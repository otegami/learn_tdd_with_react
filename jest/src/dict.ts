export const progressKind = {
  dev: 'Dev',
  qa: 'QA'
} as const

export type ProgressType = {
  d: { status: typeof progressKind.dev, effort: number },
  D: { status: typeof progressKind.dev, effort: number },
  q: { status: typeof progressKind.qa, effort: number },
  Q: { status: typeof progressKind.qa, effort: number },
}

export const progress_pattern: ProgressType = {
  'D': { status: progressKind.dev, effort: 1.0 },
  'd': { status: progressKind.dev, effort: 0.5 },
  'Q': { status: progressKind.qa, effort: 1.0 },
  'q': { status: progressKind.qa, effort: 0.5 },
} as const
