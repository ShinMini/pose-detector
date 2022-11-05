import tf from '@tensorflow/tfjs'

import { bundleResourceIO } from '@tensorflow/tfjs-react-native'


const json = require('../../assets/tensorModel/model.json')
const wet = require('../../assets/tensorModel/weights.bin')
export const loadedModel = await tf.loadLayersModel(bundleResourceIO(json, wet))
// export const [assets, error] = useAssets(require('../assets/tensorModel/model.json'))

/*
export const modelJson = assets[0]
// Use the bundleResorceIO IOHandler to load the model
export const loadedModel = await tf.loadLayersModel(modelJson)
// const image = tensorModels.model


/*
// rode image
// const imageData = await image.arrayBuffer()
const imageTensor = decodeJpeg(imageData)

*/
// export const prediction = (await model.predict(imageTensor))[0]
