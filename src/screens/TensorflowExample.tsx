import poseDetection from '@tensorflow-models/pose-detection'

const model = poseDetection.SupportedModels.MoveNet
const detector = await poseDetection.createDetector(model)

const poses = await detector.estimatePoses(image)
