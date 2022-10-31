import * as Tensor from '@tensorflow-models/pose-detection'
import image from '../../assets/tensor/male-activity.jpg'

const TensorflowExample = async () => {
  const model = Tensor.SupportedModels.MoveNet
  const detector = await Tensor.createDetector(model)

  const poses = await detector.estimatePoses(image)

  console.log(poses)
  console.log(typeof image)
  console.log(image)
}

TensorflowExample()
