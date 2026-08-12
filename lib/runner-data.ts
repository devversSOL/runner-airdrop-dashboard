export type DistributionStatus = "sent" | "queued" | "processing"

export interface DistributionAccount {
  rank: number
  handle: string
  wallet: string
  amount: number
  status: DistributionStatus
}

export const POOL_STATS = {
  totalDistributed: 41_920_500,
  totalSupply: 100_000_000,
  creatorFees: 328.74, // in SOL
  accountsReached: 5842,
  averageDrop: 7176,
}

export const ORDER_FLOW = [
  {
    step: 1,
    label: "FEES",
    source: "PUMP.FUN CREATOR WALLET",
    status: "COLLECTED",
  },
  {
    step: 2,
    label: "SWAP",
    source: "RUNNER POOL WALLET",
    status: "FILLED",
  },
  {
    step: 3,
    label: "LIST",
    source: "PUMP.FUN HOLDER INDEX",
    status: "SYNCED",
  },
  {
    step: 4,
    label: "DROP",
    source: "DISTRIBUTOR PAYOUTS",
    status: "LIVE",
  },
] as const

// pump.fun app users receiving the $RUNNER airdrop distribution
export const DISTRIBUTION_ACCOUNTS: DistributionAccount[] = [
  { rank: 1, handle: "@degenmike", wallet: "7xKQ...9fLm", amount: 184_200, status: "sent" },
  { rank: 2, handle: "@solqueen", wallet: "3nRT...pW2c", amount: 152_800, status: "sent" },
  { rank: 3, handle: "@pumpdaddy", wallet: "9aZP...k4Vd", amount: 141_050, status: "sent" },
  { rank: 4, handle: "@moonbags", wallet: "Ge5H...tX7q", amount: 98_600, status: "sent" },
  { rank: 5, handle: "@runnergod", wallet: "4bWc...mN1s", amount: 76_400, status: "processing" },
  { rank: 6, handle: "@aped.sol", wallet: "8vTn...Lp0e", amount: 61_250, status: "sent" },
  { rank: 7, handle: "@jitolabs.eth", wallet: "2kRD...9uYh", amount: 54_900, status: "queued" },
  { rank: 8, handle: "@fomo_frank", wallet: "Dq7M...bZ3a", amount: 43_780, status: "sent" },
  { rank: 9, handle: "@cabalcat", wallet: "6hJW...eR8t", amount: 39_120, status: "processing" },
  { rank: 10, handle: "@sizechad", wallet: "Ax2V...c5Kd", amount: 31_640, status: "queued" },
  { rank: 11, handle: "@wenlambo", wallet: "5pLQ...7mBn", amount: 28_300, status: "sent" },
  { rank: 12, handle: "@paperhandz", wallet: "Bt9F...xU4w", amount: 24_970, status: "sent" },
  { rank: 13, handle: "@onchain_ollie", wallet: "1zNC...gH6p", amount: 21_450, status: "queued" },
  { rank: 14, handle: "@basedbetty", wallet: "Fk3R...vA8s", amount: 18_820, status: "sent" },
  { rank: 15, handle: "@gm.runner", wallet: "7yUE...q2Wd", amount: 15_640, status: "processing" },
  { rank: 16, handle: "@rugsurvivor", wallet: "9cMK...t0Lx", amount: 12_910, status: "queued" },
  { rank: 17, handle: "@saltyvitalik", wallet: "4dPT...nB5h", amount: 10_380, status: "sent" },
  { rank: 18, handle: "@hodlhannah", wallet: "2wGZ...eK9m", amount: 8_740, status: "queued" },
]
