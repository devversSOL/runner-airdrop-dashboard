export function RunnerTicker() {
  const items = Array.from({ length: 14 }, (_, i) => i)
  return (
    <div className="relative overflow-hidden border-y border-border bg-primary/10 py-2">
      <div className="flex w-max animate-runner-marquee">
        {[0, 1].map((group) => (
          <ul key={group} className="flex shrink-0" aria-hidden={group === 1}>
            {items.map((i) => (
              <li
                key={`${group}-${i}`}
                className="flex items-center gap-2 px-4 font-mono text-sm font-bold tracking-widest text-primary"
              >
                <span>$TITS</span>
                <span className="text-primary/40">/</span>
                <span className="text-foreground/70">EVERYONE LOVES TITS</span>
                <span className="text-primary/40">/</span>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  )
}
