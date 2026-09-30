import { RECOVERY_HOUSING_APPLY_URL, RESOURCE_JOB_INTAKE_URL } from "@/lib/site"

const actions = [
  {
    href: RESOURCE_JOB_INTAKE_URL,
    label: "Request Resource & Job Help",
    description:
      "Get help with employment, food assistance, transportation, identification, housing resources, and other support needs.",
  },
  {
    href: RECOVERY_HOUSING_APPLY_URL,
    label: "Apply for Sober Living & Recovery Housing",
    description:
      "Complete the Gemstone Housing Network intake for sober living, recovery housing, reentry support, and other supportive housing pathways.",
  },
]

const linkClassName =
  "inline-flex min-h-11 items-center text-base font-semibold leading-snug text-[#0F2A44] underline underline-offset-4 hover:text-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F2A44]"

export function IntakeActions() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {actions.map((action) => (
        <div
          key={action.href}
          className="flex flex-col rounded-lg border border-border bg-secondary p-6"
        >
          <a
            href={action.href}
            target="_blank"
            rel="noopener noreferrer"
            className={linkClassName}
          >
            {action.label}
          </a>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{action.description}</p>
        </div>
      ))}
    </div>
  )
}
