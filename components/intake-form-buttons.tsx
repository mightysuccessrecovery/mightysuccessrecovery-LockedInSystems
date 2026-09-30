import { RESOURCE_JOB_INTAKE_URL, RECOVERY_HOUSING_APPLY_URL } from "@/lib/site"

const linkClassName =
  "inline-flex min-h-11 items-center font-semibold text-[#0F2A44] underline underline-offset-4 hover:text-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F2A44]"

export function IntakeFormButtons({ stacked = false }: { stacked?: boolean }) {
  return (
    <div
      className={
        stacked
          ? "flex flex-col items-start gap-1 text-sm"
          : "flex flex-col items-center justify-center gap-x-8 gap-y-1 sm:flex-row sm:flex-wrap"
      }
    >
      <a href={RESOURCE_JOB_INTAKE_URL} target="_blank" rel="noopener noreferrer" className={linkClassName}>
        Resource &amp; Job Intake Form
      </a>
      <a href={RECOVERY_HOUSING_APPLY_URL} target="_blank" rel="noopener noreferrer" className={linkClassName}>
        Sober Living Housing Intake Form
      </a>
    </div>
  )
}
