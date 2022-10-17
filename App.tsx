import React from 'react'
import { SafeAreaView, StyleSheet, ImageBackground, Image } from 'react-native'

import * as D from './src/data'

const avatarUrl = D.randomAvatarUrl()
const avatarSize = 50

export default function App() {
  console.log(avatarUrl)
  return (
    <SafeAreaView style={styles.flex}>
      <ImageBackground
        style={[styles.flex, styles.imageBackground]}
        source={require('./src/assets/images/city-image.jpg')}
      >
        <Image source={{ uri: avatarUrl }} style={[styles.image]} />
      </ImageBackground>
    </SafeAreaView>
  )
}

// prettier-ignore
const styles = StyleSheet.create({
  flex: { flex: 1 },
  imageBackground: { padding: 10 },
  image: { width: avatarSize, height: avatarSize, borderRadius: avatarSize / 2, }
})
