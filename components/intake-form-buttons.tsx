import { RESOURCE_JOB_INTAKE_URL, RECOVERY_HOUSING_APPLY_URL } from "@/lib/site"

const buttonClassName =
  "inline-flex min-h-[48px] w-full items-center justify-center rounded px-6 py-3 text-center text-sm font-semibold text-white transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F2A44] sm:w-auto"

export function IntakeFormButtons({ stacked = false }: { stacked?: boolean }) {
  return (
    <div
      className={
        stacked
          ? "flex flex-col items-stretch gap-3"
          : "flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:flex-wrap sm:items-center"
      }
    >
      <a
        href={RESOURCE_JOB_INTAKE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={stacked ? `${buttonClassName} sm:w-full` : buttonClassName}
        style={{ background: "#0F2A44" }}
      >
        Resource &amp; Job Intake Form
      </a>
      <a
        href={RECOVERY_HOUSING_APPLY_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={stacked ? `${buttonClassName} sm:w-full` : buttonClassName}
        style={{ background: "#0F2A44" }}
      >
        Sober Living Housing Intake Form
      </a>
    </div>
  )
}
