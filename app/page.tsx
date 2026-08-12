import { RunnerTicker } from "@/components/runner-ticker"
import { RunnerHeader } from "@/components/runner-header"
import { RunnerPoolStats } from "@/components/runner-pool-stats"
import { RunnerOrderFlow } from "@/components/runner-order-flow"
import { RunnerAccounts } from "@/components/runner-accounts"

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <RunnerTicker />
      <RunnerHeader />

      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-10 md:py-14">
        <RunnerPoolStats />
        <RunnerOrderFlow />
        <RunnerAccounts />
      </div>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 px-4 py-8 text-center">
          <p className="font-mono text-sm font-bold tracking-widest text-primary">
            $TITS
          </p>
          <p className="font-mono text-xs text-muted-foreground">
            Distributed to everyone who traded on pump.fun. Not financial advice.
          </p>
        </div>
      </footer>
    </main>
  )
}
