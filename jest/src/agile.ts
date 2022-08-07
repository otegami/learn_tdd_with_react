import { progressKind, ProgressType, progress_pattern } from "./dict"

type ProgressSummary = {
  Dev?: number
  QA?: number
}

export const translate = (progress: string): ProgressSummary => {
  const perDays = progress.split('')

  return perDays.reduce((progressSummary: ProgressSummary, perDay) => {
    const { status, effort } = parse(perDay)
    progressSummary[status] = (progressSummary[status] || 0) + effort
    return progressSummary
  }, {})
}

const parse = (progress: string): ProgressType[keyof ProgressType] => {
  if (progress === 'd' || progress === 'D' || progress === 'q' || progress === 'Q') return progress_pattern[progress]
  return { status: progressKind.dev, effort: 0 }
}
