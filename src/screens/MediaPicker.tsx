import React, { useState, useCallback } from 'react'
import type { FC } from 'react'
import { Image, View } from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import type { ImageInfo } from 'expo-image-picker'

// types
import { RootStackParamList } from '../navigators/RootStack'
import { StackScreenProps } from '@react-navigation/stack'
export type Props = StackScreenProps<RootStackParamList, 'Welcome'>

export const MediaPicker: FC = () => {
  const [image, setImage] = useState<ImageInfo>()

  const pickImage = useCallback(async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    })

    if (!result.cancelled) {
      setImage(result)
    }
  }, [])

  pickImage()

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {image && (
        <Image
          source={{ uri: image.uri }}
          style={{ width: 200, height: 200 }}
        />
      )}
    </View>
  )
}

export default MediaPicker
