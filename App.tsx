import React, { useEffect, useMemo, useCallback, useState } from 'react'
import { useFonts, loadAsync } from 'expo-font'
import 'react-native'

import LoadingIndicator from './src/components/Loading/LoadingView'
// import AppLoading from 'expo-app-loading'
import RootStack from './src/navigators/RootStack'

// import tensorflow model before app start
import * as tf from '@tensorflow/tfjs'
import * as poseDetection from '@tensorflow-models/pose-detection'
import '@tensorflow/tfjs-react-native'

/** constance variable */
// prettier-ignore
import {  CANVAS_HEIGHT, CANVAS_WIDTH } from './src/screens/screenSize'

const detectorConfig: poseDetection.PosenetModelConfig = {
  architecture: 'ResNet50',
  outputStride: 16,
  inputResolution: { width: CANVAS_WIDTH, height: CANVAS_HEIGHT },
  quantBytes: 2,
}
export default function App() {
  const [model, setModel] = useState<poseDetection.PoseDetector>()

  let [fontsLoaded] = useFonts({
    'Lato-Regular': require('./assets/fonts/Lato-Regular.ttf'),
    'DancingScript-Regular': require('./assets/fonts/DancingScript-Regular.ttf'),
    'NanumPenScript-Regular': require('./assets/fonts/NanumPenScript-Regular.ttf'),
  })

  const getModel = useMemo(
    useCallback(async () => {
      try {
        console.log('try ... importing model')
        await tf.ready()
        const detector = await poseDetection.createDetector(
          poseDetection.SupportedModels.PoseNet,
          detectorConfig
        )
        setModel(detector)
      } catch (e) {
        console.log('error to import model the reason: ' + e)
      }
    }, []),
    []
  )

  // app mount시 실행.
  useEffect(() => {
    getModel

    useFonts
  }, [])

  // font가 로드되지않았거나, model이 로드되지 않은 경우,
  if (!fontsLoaded || !model) {
    return <LoadingIndicator size={100} text={'Load to resource ...'} />
  }

  return <RootStack model={model} />
}
