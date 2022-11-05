import * as poseDetection from '@tensorflow-models/pose-detection'
import * as tf from '@tensorflow/tfjs-core'
// Register WebGL backend.
import '@tensorflow/tfjs-backend-webgl'

export const TensorflowExample = async (image: any) => {
  const model = poseDetection.SupportedModels.BlazePose
  const detectorConfig = {
    runtime: 'tfjs',
    enableSmoothing: true,
    modelType: 'full',
  }
  const estimationConfig = { flipHorizontal: true }
  const timestamp = performance.now()

  const detector = await poseDetection.createDetector(model, detectorConfig)
  const poses = await detector.estimatePoses(image, estimationConfig, timestamp)

  // tensorflow 라이브러리가 준비될때까지 기다리기.
  tf.ready()
  return poses
}

export default TensorflowExample