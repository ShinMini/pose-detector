import React from 'react'

// custom font
import { useFonts } from 'expo-font'
import AppLoading from 'expo-app-loading'

// React Navigation
import RootStack from './src/navigators/RootStack'

export default function App() {
  let [fontsLoaded] = useFonts({
    'Lato-Bold': require('./assets/fonts/Lato-Bold.ttf'),
    'Lato-Regular': require('./assets/fonts/Lato-Regular.ttf'),
  })
  if (!fontsLoaded) {
    return <AppLoading />
  }
  return <RootStack />
}
