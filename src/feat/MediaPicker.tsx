import React, { useState, useCallback, useMemo } from 'react'
import type { FC } from 'react'
import { Image, View, Text } from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import type { ImageInfo } from 'expo-image-picker'

// types
import { RootStackParamList } from '../navigators/RootStack'
import { StackScreenProps } from '@react-navigation/stack'
export type Props = StackScreenProps<RootStackParamList, 'Welcome'>

// user component
import ImagePreview from '../screens/MediaPreview'
import VideoPreview from '../components/Media/VideoPreview'

export const MediaPicker: FC = () => {
  const [image, setImage] = useState<ImageInfo>()
  const [error, setError] = useState(false)

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
    } else {
      setError(result.cancelled)
    }
  }, [])

  useMemo(pickImage, [])

  console.log(image)
  // prettier-ignore
  if(image === undefined) return <View><Text>Error</Text></View>

  // prettier-ignore
  return image.type === 'image' ?
  <ImagePreview pickedImage={image} error={error} /> :
  <VideoPreview pickedVideo={image}/>
}

export default MediaPicker
