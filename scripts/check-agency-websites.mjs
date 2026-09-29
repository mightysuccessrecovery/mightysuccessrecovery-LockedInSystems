import fs from "node:fs"
import path from "node:path"

const file = path.join(process.cwd(), "data", "facility-lookup", "agency-websites.tsv")
const rows = fs
  .readFileSync(file, "utf8")
  .split(/\r?\n/)
  .filter((line) => line.trim() && !line.startsWith("#"))
  .map((line) => line.split("\t"))

const results = await Promise.all(
  rows.map(async ([state, agency, url]) => {
    try {
      const response = await fetch(url, {
        redirect: "follow",
        signal: AbortSignal.timeout(20000),
        headers: { "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/124 Safari/537.36" },
      })
      const html = await response.text()
      const title = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1].replace(/\s+/g, " ").trim() ?? ""
      return `${response.status}\t${state} | ${agency}\t${response.url}\t${title.slice(0, 90)}`
    } catch (error) {
      return `ERR\t${state} | ${agency}\t${url}\t${error.cause?.code ?? error.name}`
    }
  }),
)

console.log(results.join("\n"))
