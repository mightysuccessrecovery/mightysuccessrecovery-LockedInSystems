import fs from "node:fs"
import path from "node:path"
import { createRequire } from "node:module"
import { geoPath } from "d3-geo"
import { feature } from "topojson-client"

const require = createRequire(import.meta.url)
const topology = require("us-atlas/states-albers-10m.json")
const outPath = path.join(process.cwd(), "lib", "us-states-map.json")

const abbreviations = {
  Alabama: "AL", Alaska: "AK", Arizona: "AZ", Arkansas: "AR", California: "CA", Colorado: "CO",
  Connecticut: "CT", Delaware: "DE", "District of Columbia": "DC", Florida: "FL", Georgia: "GA",
  Hawaii: "HI", Idaho: "ID", Illinois: "IL", Indiana: "IN", Iowa: "IA", Kansas: "KS", Kentucky: "KY",
  Louisiana: "LA", Maine: "ME", Maryland: "MD", Massachusetts: "MA", Michigan: "MI", Minnesota: "MN",
  Mississippi: "MS", Missouri: "MO", Montana: "MT", Nebraska: "NE", Nevada: "NV", "New Hampshire": "NH",
  "New Jersey": "NJ", "New Mexico": "NM", "New York": "NY", "North Carolina": "NC", "North Dakota": "ND",
  Ohio: "OH", Oklahoma: "OK", Oregon: "OR", Pennsylvania: "PA", "Rhode Island": "RI",
  "South Carolina": "SC", "South Dakota": "SD", Tennessee: "TN", Texas: "TX", Utah: "UT", Vermont: "VT",
  Virginia: "VA", Washington: "WA", "West Virginia": "WV", Wisconsin: "WI", Wyoming: "WY",
}

const pathFor = geoPath().digits(0)
const states = feature(topology, topology.objects.states)
  .features.map((state) => {
    const name = state.properties.name
    const abbr = abbreviations[name]
    if (!abbr) return null
    const [cx, cy] = pathFor.centroid(state)
    return {
      name,
      abbr,
      d: pathFor(state),
      x: Math.round(cx * 10) / 10,
      y: Math.round(cy * 10) / 10,
      area: Math.round(pathFor.area(state)),
    }
  })
  .filter(Boolean)
  .sort((a, b) => a.name.localeCompare(b.name))

fs.writeFileSync(outPath, JSON.stringify({ viewBox: "0 0 975 610", states }))
console.log(`STATES ${states.length}, ${Math.round(fs.statSync(outPath).size / 1024)} KB`)
