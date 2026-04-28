export function TransactionSecurityNotice() {
  return (
    <div className="w-full">
      <div className="bg-red-600 px-4 py-1 text-xs font-semibold text-white">
        TRANSACTION SECURITY NOTICE
      </div>

      <div className="border-l-4 border-red-500 bg-amber-50 px-4 py-4">
      <div className="mx-auto flex max-w-5xl gap-3">
        <div className="text-lg text-red-600">⚠️</div>

        <div className="text-sm leading-relaxed text-gray-800">
          <p className="font-semibold uppercase tracking-wide text-red-700">
            Important Notice – Read Carefully
          </p>

          <p className="mt-2">
            All transactions processed through this platform are subject to verification and fraud
            screening.
          </p>

          <p className="mt-2">
            If a transaction is identified as fraudulent, unauthorized, or disputed, it may be
            placed on hold, reversed, or reviewed in accordance with applicable facility and
            compliance policies.
          </p>

          <p className="mt-2">
            Repeated misuse or fraudulent activity may result in restricted access in coordination
            with the relevant correctional facility.
          </p>
        </div>
      </div>
      </div>
    </div>
  )
}

