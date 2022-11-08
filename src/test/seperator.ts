import { Keypoint, Pose, PoseDetector } from '@tensorflow-models/pose-detection'
import { PoseNetOutputStride } from '@tensorflow-models/pose-detection/dist/posenet/types'
import * as tf from '@tensorflow/tfjs'
import myJSON from './test.json'
import { keypointsToNormalizedKeypoints } from '@tensorflow-models/pose-detection/dist/shared/calculators/keypoints_to_normalized_keypoints'

const exJSON =
  ' "keypoints": [ { "name": "nose", "score": 0.99462890625, "x": 356.5729231608479, "y": 152.99641521197003 } ], "score": 0.99494449449494 '

type KeyPointsProps = {
  keypoints: Array<BodyFactor>
  score: number
}
type BodyFactor = {
  name: string
  score: number
  x: number
  y: number
}

// const sampleObject: KeyPointsProps = JSON.parse(exJSON)

function make_part(part_name: Keypoint, part_info: Keypoint): Keypoint{
  part_name.score = part_info.score
  part_name.x = part_info.x
  part_name.y = part_info.y

  return part_name
}

export const separator = async (estimatedPose: Keypoint[]) => {
  //prettier-ignore
  let body_part: Keypoint[] = []
  let [
    nose,
    left_eye, right_eye,
    left_ear, right_ear,
    left_shoulder, right_shoulder,
    left_elbow, right_elbow,
    left_wrist, right_wrist,
    left_hip, right_hip,
    left_knee, right_knee,
    left_ankle, right_ankle,
  ]: Keypoint[] = []

  await estimatedPose.map((keypoint) => {
    switch (keypoint.name) {
      case 'nose':
        body_part.push(make_part(nose, keypoint))
        break
      case 'left_ear':
        make_part(left_ear, keypoint)
        break
      case 'right_ear':
        make_part(right_ear, keypoint)
        break
      case 'right_eye':
        make_part(right_eye, keypoint)
        break
      case 'right_shoulder':
        make_part(right_shoulder, keypoint)
        break
      case 'right_elbow':
        make_part(right_elbow, keypoint)
        break
      case 'right_wrist':
        make_part(right_wrist, keypoint)
        break
      case 'right_hip':
        make_part(right_hip, keypoint)
        break
      case 'right_knee':
        make_part(right_knee, keypoint)
        break
      case 'right_ankle':
        make_part(right_ankle, keypoint)
        break
      case 'left_eye':
        make_part(left_eye, keypoint)
        break
      case 'left_shoulder':
        make_part(left_shoulder, keypoint)
        break
      case 'left_elbow':
        make_part(left_elbow, keypoint)
        break
      case 'left_wrist':
        make_part(left_wrist, keypoint)
        break
      case 'left_hip':
        make_part(left_hip, keypoint)
        break
      case 'left_knee':
        make_part(left_knee, keypoint)
        break
      case 'left_ankle':
        make_part(left_ankle, keypoint)
        break
    }
  })
}

export default separator
