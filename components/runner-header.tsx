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
        <div className="flex items-center gap-3">
          <div className="relative h-12 w-12 overflow-hidden rounded-xl border border-primary/40 bg-primary/10">
            <Image
              src="/runner-mascot.png"
              alt="Runner mascot"
              fill
              className="object-cover"
              priority
            />
          </div>
          <span className="rounded-full border border-primary/40 bg-primary/10 px-3 py-1 font-mono text-xs font-bold uppercase tracking-widest text-primary">
            Airdrop Distribution
          </span>
        </div>

        <h1 className="text-balance text-5xl font-bold tracking-tight text-foreground md:text-7xl">
          <span className="text-primary">RUNNER</span>
        </h1>

        <p className="max-w-2xl text-balance text-lg font-medium leading-relaxed text-muted-foreground md:text-xl">
          Everyone is trying to catch the next runner.{" "}
          <span className="text-foreground">You already got it in your wallet.</span>
        </p>

        <div className="flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-runner-pulse rounded-full bg-primary" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary" />
          </span>
          <span className="font-mono text-xs font-medium uppercase tracking-wider text-muted-foreground">
            Distribution live · pump.fun users
          </span>
        </div>
      </div>
    </header>
  )
}
