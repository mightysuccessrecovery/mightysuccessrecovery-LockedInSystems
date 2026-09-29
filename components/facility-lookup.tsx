"use client"

import { useMemo, useState, type ReactNode } from "react"
import Link from "next/link"
import { ChevronRight, Search } from "lucide-react"
import {
  collectIds,
  FACILITY_LOOKUP,
  filterFacilityTree,
  mapSearchHref,
  telHref,
  webSearchHref,
  type FacilityNode,
  type FacilitySelection,
} from "@/lib/facility-lookup"
import { UsStateMap } from "@/components/us-state-map"
import { SITE_EMAIL, SITE_PHONE_DISPLAY, SITE_PHONE_TEL } from "@/lib/site"

const feeRows = [
  ["$0.00 – $25.00", "$3.25 + 3.0000%"],
  ["$25.01 – $100.00", "$4.50 + 3.0000%"],
  ["$100.01 – $200.00", "$6.00 + 3.0000%"],
  ["$200.01 and up", "$7.50 + 3.0000%"],
]

export function FacilityLookup() {
  const [query, setQuery] = useState("")
  const [expanded, setExpanded] = useState<Set<string>>(new Set())
  const [selection, setSelection] = useState<FacilitySelection | null>(null)

  const visibleTree = useMemo(
    () => filterFacilityTree(FACILITY_LOOKUP, query),
    [query],
  )
  const searching = query.trim().length > 0
  const openIds = searching ? collectIds(visibleTree) : expanded

  const toggle = (id: string) => {
    setExpanded((current) => {
      const next = new Set(current)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  const selectState = (state: FacilityNode) => {
    setQuery("")
    setExpanded(new Set([state.id]))
    window.setTimeout(() => {
      document.getElementById(`branch-${state.id}`)?.scrollIntoView({ block: "start" })
    }, 0)
  }

  const selectFacility = (next: FacilitySelection) => {
    setSelection(next)
    window.setTimeout(() => {
      if (window.innerWidth < 1024) {
        document.getElementById("facility-detail")?.scrollIntoView({ block: "start" })
      }
    }, 0)
  }

  return (
    <div>
      <div className="text-center">
        <h1 className="text-2xl font-bold text-foreground sm:text-3xl">Agency/Facility Lookup</h1>
        <p className="mx-auto mt-4 max-w-3xl leading-relaxed text-muted-foreground">
          Use the map or the list below to see fees, timing, service availability and facility/agency
          contact information. In addition, you can visit the agency&apos;s website to look up your
          individual&apos;s information.
        </p>
      </div>

      <section className="mt-6" aria-label="Select a state">
        <UsStateMap
          states={FACILITY_LOOKUP}
          selectedIds={searching ? new Set() : openIds}
          onSelect={selectState}
        />
        <p className="mt-6 text-sm text-muted-foreground">Select Below</p>
        <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {FACILITY_LOOKUP.map((state) => {
            const selected = openIds.has(state.id) && !searching
            return (
              <button
                key={state.id}
                type="button"
                onClick={() => selectState(state)}
                aria-pressed={selected}
                className={`min-h-11 rounded border px-3 py-2 text-left text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F2A44] ${
                  selected
                    ? "border-[#0F2A44] bg-[#0F2A44] text-white"
                    : "border-border bg-white text-[#0F2A44] hover:bg-[#0F2A44]/5"
                }`}
              >
                {state.name}
              </button>
            )
          })}
        </div>
        <a
          href="#facility-list"
          className="mt-4 inline-flex text-sm font-medium text-[#0F2A44] underline-offset-2 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F2A44]"
        >
          Skip Navigation Links.
        </a>
      </section>

      <div className="mt-10 grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_340px]">
        <section id="facility-list" className="lg:order-1" aria-labelledby="facility-list-heading">
          <h2 id="facility-list-heading" className="text-lg font-semibold text-[#0F2A44]">
            Facilities
          </h2>
          <label className="mt-4 block">
            <span className="text-sm font-medium text-foreground">Search facilities</span>
            <span className="relative mt-2 block">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search by facility, agency, or code"
                className="min-h-11 w-full rounded border border-border bg-white py-2 pl-9 pr-3 text-sm text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F2A44]"
              />
            </span>
          </label>

          {visibleTree.length === 0 ? (
            <p className="mt-6 text-sm text-muted-foreground">No facilities match that search.</p>
          ) : (
            <ul className="mt-4 divide-y divide-border rounded-lg border border-border bg-white">
              {visibleTree.map((state) => (
                <TreeBranch
                  key={state.id}
                  node={state}
                  depth={0}
                  ancestors={[]}
                  openIds={openIds}
                  searching={searching}
                  selectedId={selection?.node.id}
                  onToggle={toggle}
                  onSelect={selectFacility}
                />
              ))}
            </ul>
          )}
        </section>

        <div className="order-first lg:order-2">
          <FacilityDetail selection={selection} />
        </div>
      </div>
    </div>
  )
}

function TreeBranch({
  node,
  depth,
  ancestors,
  openIds,
  searching,
  selectedId,
  onToggle,
  onSelect,
}: {
  node: FacilityNode
  depth: number
  ancestors: FacilityNode[]
  openIds: Set<string>
  searching: boolean
  selectedId?: string
  onToggle: (id: string) => void
  onSelect: (selection: FacilitySelection) => void
}) {
  const hasChildren = Boolean(node.children?.length)
  const open = hasChildren && (searching || openIds.has(node.id))
  const nextAncestors = [...ancestors, node]

  if (!hasChildren) {
    const label = node.code ? `${node.name} (${node.code})` : node.name
    const selected = selectedId === node.id
    return (
      <li>
        <button
          type="button"
          onClick={() => onSelect({ node, ancestors })}
          aria-pressed={selected}
          className={`flex min-h-11 w-full items-center px-4 py-2 text-left text-sm focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[#0F2A44] ${
            selected ? "bg-[#0F2A44]/10 font-semibold text-[#0F2A44]" : "text-foreground hover:bg-gray-50"
          }`}
          style={{ paddingLeft: `${depth * 16 + 16}px` }}
        >
          {label}
        </button>
      </li>
    )
  }

  return (
    <li id={depth === 0 ? `branch-${node.id}` : undefined} className={depth === 0 ? "scroll-mt-28" : undefined}>
      <button
        type="button"
        aria-expanded={open}
        onClick={() => onToggle(node.id)}
        className="flex min-h-11 w-full items-center gap-2 px-4 py-2 text-left text-sm font-semibold text-[#0F2A44] hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[#0F2A44]"
        style={{ paddingLeft: `${depth * 16 + 12}px` }}
      >
        <ChevronRight className={`h-4 w-4 shrink-0 transition-transform ${open ? "rotate-90" : ""}`} />
        <span>{node.name}</span>
      </button>
      {open ? (
        <ul>
          {node.children?.map((child) => (
            <TreeBranch
              key={child.id}
              node={child}
              depth={depth + 1}
              ancestors={nextAncestors}
              openIds={openIds}
              searching={searching}
              selectedId={selectedId}
              onToggle={onToggle}
              onSelect={onSelect}
            />
          ))}
        </ul>
      ) : null}
    </li>
  )
}

const linkClass =
  "text-[#0F2A44] underline-offset-2 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F2A44]"

function ExternalLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={`break-words font-medium ${linkClass}`}>
      {children}
    </a>
  )
}

function FacilityContact({ selection }: { selection: FacilitySelection }) {
  const { node, ancestors } = selection
  const state = ancestors[0]
  const agency = ancestors.length > 2 ? ancestors[ancestors.length - 1] : undefined
  const place = `${node.name}, ${state?.name ?? ""}`
  const website = node.website ?? agency?.website

  return (
    <section className="mt-6">
      <h3 className="text-sm font-semibold text-foreground">Facility contact information</h3>
      <dl className="mt-3 space-y-3 text-sm">
        <div>
          <dt className="font-semibold text-[#0F2A44]">Phone</dt>
          <dd className="mt-1">
            {node.phone ? (
              <a href={telHref(node.phone)} className={`font-medium ${linkClass}`}>
                {node.phone}
              </a>
            ) : (
              <ExternalLink href={mapSearchHref(place)}>Find this facility&apos;s phone number on Google Maps</ExternalLink>
            )}
          </dd>
        </div>
        <div>
          <dt className="font-semibold text-[#0F2A44]">Address</dt>
          <dd className="mt-1">
            {node.address ? (
              <>
                <span className="block text-foreground">{node.address}</span>
                <ExternalLink href={mapSearchHref(node.address)}>Get directions</ExternalLink>
              </>
            ) : (
              <ExternalLink href={mapSearchHref(place)}>Find this facility&apos;s address on Google Maps</ExternalLink>
            )}
          </dd>
        </div>
        <div>
          <dt className="font-semibold text-[#0F2A44]">Website</dt>
          <dd className="mt-1">
            {website ? (
              <>
                <ExternalLink href={website}>{website.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "")}</ExternalLink>
                {!node.website && agency ? (
                  <span className="mt-1 block text-xs text-muted-foreground">Official website of {agency.name}</span>
                ) : null}
              </>
            ) : (
              <ExternalLink href={webSearchHref(`${agency?.name ?? node.name} official website`)}>
                Search for the official website
              </ExternalLink>
            )}
          </dd>
        </div>
      </dl>
    </section>
  )
}

function FacilityDetail({ selection }: { selection: FacilitySelection | null }) {
  return (
    <aside id="facility-detail" className="rounded-lg border border-border bg-white p-5 lg:sticky lg:top-24">
      {selection ? (
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            {selection.ancestors.map((item) => item.name).join(" / ")}
          </p>
          <h2 className="mt-2 text-lg font-semibold text-[#0F2A44]">{selection.node.name}</h2>
          {selection.node.code ? (
            <p className="mt-1 text-sm text-muted-foreground">Facility code: {selection.node.code}</p>
          ) : null}

          <FacilityContact selection={selection} />

          <section className="mt-6">
            <h3 className="text-sm font-semibold text-foreground">LockedIn Systems support</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Questions about deposits, commissary, or fees for this facility go through LockedIn
              Systems, operated by Mighty Success Recovery Inc.
            </p>
            <p className="mt-3 text-sm">
              <span className="font-semibold text-[#0F2A44]">Phone: </span>
              <a
                href={`tel:${SITE_PHONE_TEL}`}
                className="text-[#0F2A44] underline-offset-2 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F2A44]"
              >
                {SITE_PHONE_DISPLAY}
              </a>
            </p>
            <p className="mt-2 text-sm">
              <span className="font-semibold text-[#0F2A44]">Email: </span>
              <a
                href={`mailto:${SITE_EMAIL}`}
                className="break-all text-[#0F2A44] underline-offset-2 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F2A44]"
              >
                {SITE_EMAIL}
              </a>
            </p>
          </section>

          <section className="mt-6">
            <h3 className="text-sm font-semibold text-foreground">Availability</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Deposit and commissary service for this facility is available only where the agency
              authorizes it. Timing follows that facility&apos;s processing schedule and the payment
              provider. Confirm availability before sending funds.
            </p>
            <p className="mt-3 flex flex-wrap gap-4 text-sm">
              <Link href="/deposit" className="font-medium text-[#0F2A44] underline-offset-2 hover:underline">
                Deposits
              </Link>
              <Link href="/commissary" className="font-medium text-[#0F2A44] underline-offset-2 hover:underline">
                Commissary
              </Link>
            </p>
          </section>

          <section className="mt-6">
            <h3 className="text-sm font-semibold text-foreground">Pricing</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Transaction fees disclosed for this facility use the LockedIn Systems fee table. The
              variable fee is 3.0000% of the total transaction amount.
            </p>
            <div className="mt-3 overflow-hidden rounded border border-border text-sm">
              <div className="grid grid-cols-2 bg-gray-50 px-3 py-2 font-semibold text-[#0F2A44]">
                <span>Amount tier</span>
                <span className="text-right">Fixed fee + variable fee</span>
              </div>
              {feeRows.map(([tier, fee]) => (
                <div key={tier} className="grid grid-cols-2 border-t border-border px-3 py-2">
                  <span>{tier}</span>
                  <span className="text-right font-medium">{fee}</span>
                </div>
              ))}
            </div>
            <Link
              href="/fees"
              className="mt-3 inline-flex text-sm font-medium text-[#0F2A44] underline-offset-2 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F2A44]"
            >
              View the full fee disclosure
            </Link>
          </section>
        </div>
      ) : (
        <div>
          <h2 className="text-lg font-semibold text-[#0F2A44]">Availability &amp; Pricing</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Select a facility in the list to see its phone number, address, website, service
            availability, and pricing.
          </p>
        </div>
      )}
    </aside>
  )
}
