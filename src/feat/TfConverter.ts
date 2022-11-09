import * as tf from '@tensorflow/tfjs'
import * as tfCore from '@tensorflow/tfjs-core'
import * as tfReact from '@tensorflow/tfjs-react-native'
import * as FileSystem from 'expo-file-system'
import '@tensorflow/tfjs-react-native'

const options = { encoding: FileSystem.EncodingType.Base64 }

// prettier-ignore
const transformImageToTensor = async (uri: string, width :number, height:number): Promise<tfCore.Tensor> => {
  await tf.ready()
  console.log('\n [Running Converter process] \n')
  console.log('convert width to: ', width)
  console.log('convert height to: ', height)

  // read the image as base64 and create buffer
  const img64 = await FileSystem.readAsStringAsync(uri, options)
  const imgBuffer = tf.util.encodeString(img64, 'base64').buffer
  const raw = new Uint8Array(imgBuffer)

  let imgTensor = tfReact.decodeJpeg(raw)

  //resize the image

  imgTensor = tf.image.resizeNearestNeighbor(imgTensor, [width, height])
  return imgTensor
}

export default transformImageToTensor
