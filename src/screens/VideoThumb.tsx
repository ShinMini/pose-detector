import React, { useState } from 'react'
import { StyleSheet, Button, View, Image, Text } from 'react-native'
import * as VideoThumbnails from 'expo-video-thumbnails'

export default function VideoThumb() {
  const [image, setImage] = useState('')

  const generateThumbnail = async () => {
    try {
      const { uri } = await VideoThumbnails.getThumbnailAsync(
        'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
        {
          time: 15000,
        }
      )
      setImage(uri)
    } catch (e) {
      console.warn(e)
    }
  }

  return (
    <View style={styles.container}>
      {image && <Image source={{ uri: image }} style={styles.image} />}
      <Button onPress={generateThumbnail} title="Generate thumbnail" />
      <Text>{image}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 10,
    padding: 40,
  },
  image: {
    width: 300,
    height: 400,
  },
})
