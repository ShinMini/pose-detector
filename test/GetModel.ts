import tf from '@tensorflow/tfjs'

import tensorModels from '@assets/tensorModels'

import Assets from 'expo-asset'

import {
  fetch,
  decodeJpeg,
  bundleResourceIO,
} from '@tensorflow/tfjs-react-native'

// Get reference to bundled model assets
const modelJson = tensorModels.model
const modelWeights =tensorModels.weights
const image = tensorModels.model

// Use the bundleResorceIO IOHandler to load the model
export const loadedModel = await tf.loadLayersModel(
  bundleResourceIO(modelJson, modelWeights)
)

// rode image
const imageData = await image.arrayBuffer()
const imageTensor = decodeJpeg(imageData)

// export const prediction = (await model.predict(imageTensor))[0]
