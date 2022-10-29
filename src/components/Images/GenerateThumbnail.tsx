import React, { useState, useEffect } from 'react'
import { View, Button, Image, Text } from 'react-native'
import type { ImageInfo } from 'expo-image-picker'

import * as VideoThumbnails from 'expo-video-thumbnails'

// navigation
import { useNavigation } from '@react-navigation/native'
import type { Props as HomeProps } from '../../screens/Home'

export const GenerateThumbnail = (ImageInfo: ImageInfo) => {
  const [image, setImage] = useState('')
  // configuring navigation
  const navigation = useNavigation<HomeProps['navigation']>()

  // move to balance page
  const handlePress = () => {
    navigation.navigate('Welcome')
  }

  const generateThumbnail = async (videoUrl: ImageInfo['uri']) => {
    try {
      console.log('run generateThumbnail')
      const { uri } = await VideoThumbnails.getThumbnailAsync(videoUrl, {
        time: 3000,
      })
      setImage(uri)
    } catch (e) {
      console.warn(e)
    }
  }
  generateThumbnail(ImageInfo.uri)
  useEffect(() => {
    generateThumbnail(ImageInfo.uri)

    const showView = () => {
      return (
        <View
          style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
        >
          {image && <Image source={{ uri: image }} style={{ flex: 1 }} />}
          <View style={{ flex: 1 }} />
          <Text>{image}</Text>
          <Button onPress={handlePress} title="Generate thumbnail" />
        </View>
      )
    }
    showView()
  }, [image])
}

export default GenerateThumbnail
