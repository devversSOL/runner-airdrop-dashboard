import { ORDER_FLOW } from "@/lib/runner-data"

export function RunnerOrderFlow() {
  return (
    <section aria-label="Order flow" className="rounded-lg border border-border bg-card p-5">
      <h2 className="font-mono text-sm font-bold uppercase tracking-widest text-foreground">
        Order Flow
      </h2>
      <p className="mt-1 font-mono text-xs text-muted-foreground">
        Creator fees are swapped into $TITS and dropped to everyone who traded on pump.fun.
      </p>

      <ol className="mt-5 grid gap-3 md:grid-cols-4">
        {ORDER_FLOW.map((s, i) => (
          <li key={s.step} className="relative">
            <div className="flex h-full flex-col justify-between gap-4 rounded-lg border border-border bg-background p-4">
              <div className="flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-md bg-primary/15 font-mono text-xs font-bold text-primary">
                  {s.step}
                </span>
                <span className="font-mono text-sm font-bold tracking-wide text-foreground">
                  {s.label}
                </span>
              </div>
              <div>
                <p className="font-mono text-xs leading-relaxed text-muted-foreground">
                  {s.source}
                </p>
                <p className="mt-2 inline-flex items-center gap-1.5 font-mono text-xs font-bold uppercase tracking-wider text-primary">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  {s.status}
                </p>
              </div>
            </div>
            {i < ORDER_FLOW.length - 1 && (
              <span
                aria-hidden="true"
                className="absolute -right-2 top-1/2 hidden -translate-y-1/2 font-mono text-primary md:block"
              >
                →
              </span>
            )}
          </li>
        ))}
      </ol>
    </section>
  )
}
