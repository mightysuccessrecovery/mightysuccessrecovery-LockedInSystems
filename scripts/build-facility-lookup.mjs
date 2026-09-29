import fs from "node:fs"
import path from "node:path"

const sourceDir = path.join(process.cwd(), "data", "facility-lookup")
const outPath = path.join(process.cwd(), "lib", "facility-lookup.json")

const readRows = (text) =>
  text
    .split(/\r?\n/)
    .map((line) => line.replace(/\s+$/, ""))
    .filter((line) => line.trim() && !line.startsWith("#"))

const source = fs
  .readdirSync(sourceDir)
  .filter((file) => /^\d+-.*\.tsv$/.test(file))
  .sort()
  .map((file) => fs.readFileSync(path.join(sourceDir, file), "utf8"))
  .join("\n")

const lines = readRows(source).map((line) => line.trim())

const key = (...parts) => parts.map((part) => part.trim().toLowerCase()).join("\u0000")

const agencyWebsites = new Map()
for (const row of readRows(fs.readFileSync(path.join(sourceDir, "agency-websites.tsv"), "utf8"))) {
  const [stateName, agencyName, website] = row.split("\t")
  if (!stateName || !agencyName || !website) throw new Error(`Bad agency website line: ${row}`)
  agencyWebsites.set(key(stateName, agencyName), website.trim())
}

const facilityContacts = new Map()
for (const row of readRows(fs.readFileSync(path.join(sourceDir, "facility-contacts.tsv"), "utf8"))) {
  const [stateName, agencyName, facilityName, phone, address, website] = row.split("\t")
  if (!stateName || !agencyName || !facilityName) throw new Error(`Bad facility contact line: ${row}`)
  const contact = {}
  if (phone?.trim()) contact.phone = phone.trim()
  if (address?.trim()) contact.address = address.trim()
  if (website?.trim()) contact.website = website.trim()
  facilityContacts.set(key(stateName, agencyName, facilityName), contact)
}
const usedAgencyWebsites = new Set()
const usedFacilityContacts = new Set()

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
    const websiteKey = key(state.name, name)
    const website = agencyWebsites.get(websiteKey)
    if (website) usedAgencyWebsites.add(websiteKey)
    agency = { id: nextId(), name, ...(website ? { website } : {}), children: [] }
    category.children.push(agency)
    continue
  }
  if (kind === "F") {
    const parent = agency ?? category
    const contactKey = key(state.name, parent.name, name)
    const contact = facilityContacts.get(contactKey)
    if (contact) usedFacilityContacts.add(contactKey)
    parent.children.push({
      id: nextId(),
      name,
      ...(code ? { code } : {}),
      ...contact,
    })
    continue
  }
  throw new Error(`Unknown kind ${kind} on ${line}`)
}

const unmatched = [
  ...[...agencyWebsites.keys()].filter((item) => !usedAgencyWebsites.has(item)),
  ...[...facilityContacts.keys()].filter((item) => !usedFacilityContacts.has(item)),
]
if (unmatched.length > 0) {
  throw new Error(`Contact rows that match no agency or facility:\n${unmatched.map((item) => item.replaceAll("\u0000", " | ")).join("\n")}`)
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
console.log(`AGENCY WEBSITES ${usedAgencyWebsites.size}`)
console.log(`FACILITY CONTACTS ${usedFacilityContacts.size}`)
