import { Tensor3D } from '@tensorflow/tfjs'
import { decodeJpeg } from '@tensorflow/tfjs-react-native'

// const imageUri = 'http://image-uri-here.example.com/image.jpg'

async function getImageUri(imageUri: string): Promise<Tensor3D> {
  // Load an image as a Uint8Array
  const response = await fetch(imageUri)
  const imageDataArrayBuffer = await response.arrayBuffer()
  const imageData = new Uint8Array(imageDataArrayBuffer)

  // Decode image data to a tensor
  const imageTensor = decodeJpeg(imageData)
  return imageTensor
}
