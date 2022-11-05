import React, { useState } from 'react'
import { useFonts } from 'expo-font'
import AppLoading from 'expo-app-loading'
import RootStack from './src/navigators/RootStack'
import * as tf from '@tensorflow/tfjs'
import '@tensorflow/tfjs-react-native'

export default function App() {
  const [model, setModel] = useState<boolean>(false)
  let [fontsLoaded] = useFonts({
    'Lato-Bold': require('./assets/fonts/Lato-Bold.ttf'),
    'Lato-Regular': require('./assets/fonts/Lato-Regular.ttf'),
    'DancingScript-Regular': require('./assets/fonts/DancingScript-Regular.ttf'),
    'NanumPenScript-Regular': require('./assets/fonts/NanumPenScript-Regular.ttf'),
  })
  ;async () => await tf.ready().then(() => setModel(true))

  if (!fontsLoaded && !model) {
    return <AppLoading />
  }
  return <RootStack />
  // return <Test />
}
