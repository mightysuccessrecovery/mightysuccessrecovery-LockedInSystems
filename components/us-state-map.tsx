"use client"

import type { MouseEvent } from "react"
import usMap from "@/lib/us-states-map.json"
import type { FacilityNode } from "@/lib/facility-lookup"

type MapState = { name: string; abbr: string; d: string; x: number; y: number; area: number }

const MIN_LABEL_AREA = 1800

export function UsStateMap({
  states,
  selectedIds,
  onSelect,
}: {
  states: FacilityNode[]
  selectedIds: Set<string>
  onSelect: (state: FacilityNode) => void
}) {
  const byName = new Map(states.map((state) => [state.name.toLowerCase(), state]))
  const shapes = usMap.states as MapState[]

  return (
    <figure className="mx-auto mt-4 max-w-4xl">
      <svg
        viewBox={usMap.viewBox}
        className="h-auto w-full"
        role="group"
        aria-label="Map of the United States. Select a state to see its facilities."
      >
        {shapes.map((shape) => {
          const state = byName.get(shape.name.toLowerCase())
          if (!state) {
            return (
              <path key={shape.abbr} d={shape.d} fill="#E5E7EB" stroke="#FFFFFF" strokeWidth={1} aria-hidden="true">
                <title>{`${shape.name}: no facilities listed`}</title>
              </path>
            )
          }
          const selected = selectedIds.has(state.id)
          return (
            <a
              key={shape.abbr}
              href={`#branch-${state.id}`}
              aria-label={`${state.name} facilities`}
              aria-current={selected ? "true" : undefined}
              onClick={(event: MouseEvent) => {
                event.preventDefault()
                onSelect(state)
              }}
              className="group cursor-pointer focus:outline-none"
            >
              <title>{state.name}</title>
              <path
                d={shape.d}
                strokeWidth={1}
                className={`stroke-white transition-colors group-hover:fill-[#0F2A44] group-focus-visible:fill-[#0F2A44] group-focus-visible:stroke-gold group-focus-visible:[stroke-width:3] ${
                  selected ? "fill-[#0F2A44]" : "fill-[#8AA4BF]"
                }`}
              />
            </a>
          )
        })}
        {shapes
          .filter((shape) => shape.area >= MIN_LABEL_AREA)
          .map((shape) => {
            const state = byName.get(shape.name.toLowerCase())
            const selected = state ? selectedIds.has(state.id) : false
            return (
              <text
                key={`label-${shape.abbr}`}
                x={shape.x}
                y={shape.y}
                textAnchor="middle"
                dominantBaseline="central"
                aria-hidden="true"
                className={`pointer-events-none select-none text-[13px] font-semibold ${
                  state ? (selected ? "fill-white" : "fill-[#0F2A44]") : "fill-gray-400"
                }`}
              >
                {shape.abbr}
              </text>
            )
          })}
      </svg>
      <figcaption className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-muted-foreground">
        <span className="inline-flex items-center gap-2">
          <span className="h-3 w-3 rounded-sm bg-[#8AA4BF]" aria-hidden="true" />
          Facilities listed — click a state
        </span>
        <span className="inline-flex items-center gap-2">
          <span className="h-3 w-3 rounded-sm bg-[#0F2A44]" aria-hidden="true" />
          Selected state
        </span>
        <span className="inline-flex items-center gap-2">
          <span className="h-3 w-3 rounded-sm bg-[#E5E7EB]" aria-hidden="true" />
          No facilities listed
        </span>
      </figcaption>
    </figure>
  )
}
