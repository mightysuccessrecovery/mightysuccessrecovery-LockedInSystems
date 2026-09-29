import fs from "node:fs"
import path from "node:path"

const sourceDir = path.join(process.cwd(), "data", "facility-lookup")
const outPath = path.join(process.cwd(), "lib", "facility-lookup.json")

const source = fs
  .readdirSync(sourceDir)
  .filter((file) => file.endsWith(".tsv"))
  .sort()
  .map((file) => fs.readFileSync(path.join(sourceDir, file), "utf8"))
  .join("\n")

const lines = source
  .split(/\r?\n/)
  .map((line) => line.trim())
  .filter((line) => line && !line.startsWith("#"))

let id = 0
const nextId = () => `f${++id}`

/** @type {{id:string,name:string,children:any[]}[]} */
const states = []
let state = null
let category = null
let agency = null

for (const line of lines) {
  const [kind, name, code] = line.split("\t")
  if (!kind || !name) {
    throw new Error(`Bad line: ${line}`)
  }
  if (kind === "S") {
    state = { id: nextId(), name, children: [] }
    states.push(state)
    category = null
    agency = null
    continue
  }
  if (!state) throw new Error(`Entry before a state: ${line}`)
  if (kind === "C") {
    category = { id: nextId(), name, children: [] }
    state.children.push(category)
    agency = null
    continue
  }
  if (!category) throw new Error(`Entry before a category: ${line}`)
  if (kind === "A") {
    agency = { id: nextId(), name, children: [] }
    category.children.push(agency)
    continue
  }
  if (kind === "F") {
    const parent = agency ?? category
    parent.children.push({
      id: nextId(),
      name,
      ...(code ? { code } : {}),
    })
    continue
  }
  throw new Error(`Unknown kind ${kind} on ${line}`)
}

let facilities = 0
function count(nodes) {
  for (const node of nodes) {
    if (node.children?.length) count(node.children)
    else facilities += 1
  }
}
count(states)

fs.mkdirSync(path.dirname(outPath), { recursive: true })
fs.writeFileSync(outPath, JSON.stringify(states))

console.log(
  states
    .map((item) => {
      let leaves = 0
      const walk = (nodes) => {
        for (const node of nodes) {
          if (node.children?.length) walk(node.children)
          else leaves += 1
        }
      }
      walk(item.children)
      return `${item.name}: ${leaves}`
    })
    .join("\n"),
)
console.log(`STATES ${states.length}`)
console.log(`FACILITIES ${facilities}`)
