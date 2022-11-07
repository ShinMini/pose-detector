import { CardProps } from '../Cards/types'
import * as poseDetection from '@tensorflow-models/pose-detection'

export interface AmountProps {
  balance: string | number | undefined
}

export interface BalanceCardProps extends CardProps {
  model: poseDetection.PoseDetector
}
