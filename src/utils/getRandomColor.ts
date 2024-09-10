import { CONTRIBUTION_COLORS } from '@/constants/contributionColors'

export const getRandomColor = () => {
  const randomIndex = Math.floor(Math.random() * CONTRIBUTION_COLORS.length)
  return CONTRIBUTION_COLORS[randomIndex]
}
