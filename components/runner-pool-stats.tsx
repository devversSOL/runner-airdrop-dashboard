import { POOL_STATS } from "@/lib/runner-data"

function formatNumber(n: number) {
  return new Intl.NumberFormat("en-US").format(n)
}

export function RunnerPoolStats() {
  const pct = Math.round((POOL_STATS.totalDistributed / POOL_STATS.totalSupply) * 100)

  const stats = [
    {
      label: "TOTAL $TITS DROPPED",
      value: formatNumber(POOL_STATS.totalDistributed),
      accent: true,
    },
    {
      label: "ACCOUNTS REACHED",
      value: formatNumber(POOL_STATS.accountsReached),
    },
    {
      label: "CREATOR FEES (SOL)",
      value: POOL_STATS.creatorFees.toFixed(2),
    },
    {
      label: "AVG DROP / USER",
      value: formatNumber(POOL_STATS.averageDrop),
    },
  ]

  return (
    <section aria-label="Pool statistics" className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((s) => (
        <div
          key={s.label}
          className="rounded-lg border border-border bg-card p-5"
        >
          <p className="font-mono text-xs font-medium uppercase tracking-wider text-muted-foreground">
            {s.label}
          </p>
          <p
            className={`mt-3 font-mono text-2xl font-bold tabular-nums md:text-3xl ${
              s.accent ? "text-primary" : "text-foreground"
            }`}
          >
            {s.value}
          </p>
        </div>
      ))}

      <div className="rounded-lg border border-border bg-card p-5 sm:col-span-2 lg:col-span-4">
        <div className="flex items-center justify-between">
          <p className="font-mono text-xs font-medium uppercase tracking-wider text-muted-foreground">
            Supply distributed
          </p>
          <p className="font-mono text-sm font-bold text-primary">{pct}%</p>
        </div>
        <div className="mt-3 h-3 w-full overflow-hidden rounded-full bg-secondary">
          <div
            className="h-full rounded-full bg-primary"
            style={{ width: `${pct}%` }}
          />
        </div>
        <p className="mt-2 font-mono text-xs text-muted-foreground">
          {formatNumber(POOL_STATS.totalDistributed)} / {formatNumber(POOL_STATS.totalSupply)} $TITS
        </p>
      </div>
    </section>
  )
}
