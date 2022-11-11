import React, { useState, useCallback, useMemo } from 'react'
import type { FC } from 'react'
import { View, Text } from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import type { ImageInfo } from 'expo-image-picker'

// types
import { RootStackParamList } from '../navigators/RootStack'
import { StackScreenProps } from '@react-navigation/stack'

export type Props = StackScreenProps<RootStackParamList, 'MediaPicker'>
// user component
import VideoPreview from '../components/Media/VideoPreview'

// navigation
import CanvasModule from './CanvasModule'

export const MediaPicker: FC<Props> = ({ route }) => {
  const [image, setImage] = useState<ImageInfo>()
  const [error, setError] = useState(false)

  const pickImage = useCallback(async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      assets: [4, 4],
      quality: 0.2,
    })
    if (!result.cancelled) {
      setImage(result)
    } else {
      setError(result.cancelled)
    }
  }, [])

  useMemo(pickImage, [])

  console.log('MediaPicker ', image)
  // prettier-ignore
  if(image === undefined) return <View><Text>Error</Text></View>

  // prettier-ignore
  return image.type === 'image' ?
  // <View onLayout={() => navigation.navigate('TensorView', {pickedImage: image})} /> :
  // <ImagePreview pickedImage={image} error={error} /> :
  <CanvasModule pickedImage={image} model={route.params.model} error={error}/> :
  <VideoPreview pickedVideo={image}/>
}

export default MediaPicker
