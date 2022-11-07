import type { ImageSourcePropType } from 'react-native'

import * as poseDetection from '@tensorflow-models/pose-detection'

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
  model: poseDetection.PoseDetector
}
