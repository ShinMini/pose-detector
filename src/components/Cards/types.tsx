import type { ImageSourcePropType } from 'react-native'

export interface CardProps {
  id: number
  accountNo: string
  balance?: string
  alias?: string
  logo: ImageSourcePropType
  cardColor?: string
}

export interface CardSectionProps {
  data: Array<CardProps>
}
