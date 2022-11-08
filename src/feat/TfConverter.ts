import * as tf from '@tensorflow/tfjs'
import * as tfCore from '@tensorflow/tfjs-core'
import * as tfReact from '@tensorflow/tfjs-react-native'
import * as FileSystem from 'expo-file-system'
import '@tensorflow/tfjs-react-native'

// export const transformImageToTensor = async (uri: string) => {
const transformImageToTensor = async (uri: string): Promise<tfCore.Tensor> => {
  await tf.ready()
  const options = { encoding: FileSystem.EncodingType.Base64 }
  console.log('Running Converter !!!!!!!!')

  // read the image as base64 and create buffer
  const img64 = await FileSystem.readAsStringAsync(uri, options)
  const imgBuffer = tf.util.encodeString(img64, 'base64').buffer
  const raw = new Uint8Array(imgBuffer)

  let imgTensor = tfReact.decodeJpeg(raw)
  const scalar = tf.scalar(255)

  //resize the image
  console.table('before reshape imgTensor: ', imgTensor)
  imgTensor = tf.image.resizeNearestNeighbor(imgTensor, [400, 600])
  console.table('after reshape imgTensor: ', imgTensor)

  return imgTensor
  /* 
  //normalize; if a normalization layer is in the model, this step can be skipped
  const tensorScaled = imgTensor.div(scalar)
  //final shape of the tensor
  const img = tf.reshape(tensorScaled, [1, 400, 600, 3])
  console.log('img: ', img)
  return img
  */
}

export default transformImageToTensor
