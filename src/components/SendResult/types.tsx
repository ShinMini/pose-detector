import type { ImageSourcePropType } from 'react-native'
export interface SendResultProps {
  id: number
  name: string
  counts: string
  background?: string
  img: ImageSourcePropType
}

export interface SendResultSectionProps {
  data: Array<SendResultProps>
}
