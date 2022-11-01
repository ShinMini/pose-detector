import React, { useState } from 'react'

// tensorflow js
import * as tf from '@tensorflow/tfjs'
import '@tensorflow/tfjs-react-native'

// custom font
import { useFonts } from 'expo-font'
import AppLoading from 'expo-app-loading'

// React Navigation
import RootStack from './src/navigators/RootStack'

export default function App() {
  const [tfReady, setTfReady] = useState(false)

  let [fontsLoaded] = useFonts({
    'Lato-Bold': require('./assets/fonts/Lato-Bold.ttf'),
    'Lato-Regular': require('./assets/fonts/Lato-Regular.ttf'),
    'DancingScript-Regular': require('./assets/fonts/DancingScript-Regular.ttf'),
    'NanumPenScript-Regular': require('./assets/fonts/NanumPenScript-Regular.ttf'),
  })

  ;async () => {
    await tf.ready()
    setTfReady(true)
  }

  if (!fontsLoaded && !tfReady) {
    return <AppLoading />
  }
  return <RootStack />
}
