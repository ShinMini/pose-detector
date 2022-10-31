import * as Tensor from '@tensorflow-models/pose-detection'

const TensorflowExample = async (pose: ImageData) => {
  const model = Tensor.SupportedModels.MoveNet
  const detector = await Tensor.createDetector(model)

  const poses = await detector.estimatePoses(pose)

  console.log(poses)
  console.log(typeof pose)
  console.log(pose)
}

export default TensorflowExample
