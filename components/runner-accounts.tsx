import { DISTRIBUTION_ACCOUNTS, type DistributionStatus } from "@/lib/runner-data"

function formatNumber(n: number) {
  return new Intl.NumberFormat("en-US").format(n)
}

const STATUS_STYLES: Record<DistributionStatus, string> = {
  sent: "border-primary/40 bg-primary/10 text-primary",
  processing: "border-chart-2/40 bg-chart-2/10 text-chart-2",
  queued: "border-border bg-secondary text-muted-foreground",
}

const STATUS_LABEL: Record<DistributionStatus, string> = {
  sent: "SENT",
  processing: "PROCESSING",
  queued: "QUEUED",
}

export function RunnerAccounts() {
  return (
    <section aria-label="Distribution accounts" className="rounded-lg border border-border bg-card">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border p-5">
        <div>
          <h2 className="font-mono text-sm font-bold uppercase tracking-widest text-foreground">
            Distribution Accounts
          </h2>
          <p className="mt-1 font-mono text-xs text-muted-foreground">
            pump.fun app users receiving the $RUNNER airdrop
          </p>
        </div>
        <span className="rounded-full border border-primary/40 bg-primary/10 px-3 py-1 font-mono text-xs font-bold text-primary">
          {DISTRIBUTION_ACCOUNTS.length} shown
        </span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[520px] border-collapse text-left">
          <thead>
            <tr className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
              <th scope="col" className="px-5 py-3 font-medium">#</th>
              <th scope="col" className="px-5 py-3 font-medium">Account</th>
              <th scope="col" className="px-5 py-3 font-medium">Wallet</th>
              <th scope="col" className="px-5 py-3 text-right font-medium">$RUNNER</th>
              <th scope="col" className="px-5 py-3 text-right font-medium">Status</th>
            </tr>
          </thead>
          <tbody>
            {DISTRIBUTION_ACCOUNTS.map((a) => (
              <tr
                key={a.wallet}
                className="border-t border-border transition-colors hover:bg-primary/5"
              >
                <td className="px-5 py-3 font-mono text-sm tabular-nums text-muted-foreground">
                  {a.rank}
                </td>
                <td className="px-5 py-3 font-mono text-sm font-medium text-foreground">
                  {a.handle}
                </td>
                <td className="px-5 py-3 font-mono text-sm text-muted-foreground">
                  {a.wallet}
                </td>
                <td className="px-5 py-3 text-right font-mono text-sm font-bold tabular-nums text-primary">
                  {formatNumber(a.amount)}
                </td>
                <td className="px-5 py-3 text-right">
                  <span
                    className={`inline-flex rounded-full border px-2.5 py-0.5 font-mono text-[0.65rem] font-bold tracking-wider ${STATUS_STYLES[a.status]}`}
                  >
                    {STATUS_LABEL[a.status]}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
