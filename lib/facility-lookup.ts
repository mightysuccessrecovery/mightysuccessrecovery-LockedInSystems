import facilities from "@/lib/facility-lookup.json"

export type FacilityNode = {
  id: string
  name: string
  code?: string
  children?: FacilityNode[]
}

export const FACILITY_LOOKUP = facilities as FacilityNode[]

export type FacilitySelection = {
  node: FacilityNode
  path: string[]
}

export function filterFacilityTree(nodes: FacilityNode[], query: string): FacilityNode[] {
  const needle = query.trim().toLowerCase()
  if (!needle) return nodes

  const visit = (node: FacilityNode): FacilityNode | null => {
    const haystack = `${node.name} ${node.code ?? ""}`.toLowerCase()
    if (!node.children?.length) return haystack.includes(needle) ? node : null
    if (haystack.includes(needle)) return node
    const children = node.children.map(visit).filter((child): child is FacilityNode => child !== null)
    if (children.length > 0) return { ...node, children }
    return null
  }

  return nodes.map(visit).filter((node): node is FacilityNode => node !== null)
}

export function collectIds(nodes: FacilityNode[], ids = new Set<string>()) {
  for (const node of nodes) {
    if (node.children?.length) {
      ids.add(node.id)
      collectIds(node.children, ids)
    }
  }
  return ids
}
