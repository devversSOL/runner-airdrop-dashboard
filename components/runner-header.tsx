import Image from "next/image"

export function RunnerHeader() {
  return (
    <header className="relative overflow-hidden border-b border-border">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, var(--color-primary) 1px, transparent 0)",
          backgroundSize: "22px 22px",
        }}
        aria-hidden="true"
      />
      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-12 text-center md:py-16">
        <span className="rounded-full border border-primary/40 bg-primary/10 px-3 py-1 font-mono text-xs font-bold uppercase tracking-widest text-primary">
          Airdrop Distribution
        </span>

        <div
          className="relative aspect-square w-56 md:w-72"
          style={{
            maskImage:
              "radial-gradient(circle at center, black 48%, transparent 66%)",
            WebkitMaskImage:
              "radial-gradient(circle at center, black 48%, transparent 66%)",
          }}
        >
          <Image
            src="/tits-logo-dark.png"
            alt="TITS logo — pump.fun styled"
            fill
            className="object-contain"
            priority
          />
        </div>

        <h1 className="text-balance text-5xl font-bold tracking-tight text-foreground md:text-7xl">
          <span className="text-primary">TITS</span>
        </h1>

        <p className="max-w-2xl text-balance text-lg font-medium leading-relaxed text-muted-foreground md:text-xl">
          Everyone loves tits.{" "}
          <span className="text-foreground">
            Trade on pump.fun even once and the $TITS airdrop is already yours.
          </span>
        </p>

        <div className="flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-runner-pulse rounded-full bg-primary" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary" />
          </span>
          <span className="font-mono text-xs font-medium uppercase tracking-wider text-muted-foreground">
            Distribution live · pump.fun traders
          </span>
        </div>
      </div>
    </header>
  )
}
