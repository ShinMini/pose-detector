import React, { useState, useCallback, useEffect } from 'react'
import { Image, View, Text, Platform } from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import type { ImageInfo } from 'expo-image-picker'

import styled from 'styled-components/native'
import { Colors } from 'react-native-paper'

// types
import { RootStackParamList } from '../navigators/RootStack'
import { StackScreenProps } from '@react-navigation/stack'
export type Props = StackScreenProps<RootStackParamList, 'Welcome'>

// custom components
import { GenerateThumbnail } from '../components/Images/GenerateThumbnail'
import VideoThumb from './VideoThumb'

export const MediaPicker = () => {
  const pickImage = useCallback(async () => {
    let getVideo: ImagePicker.ImagePickerResult =
      await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Videos,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
        videoQuality: ImagePicker.UIImagePickerControllerQualityType.Medium, // 굳이 고화질 필요없을듯
        videoMaxDuration: 120,
      })

    if (!getVideo.cancelled) {
      console.log('픽 이미지 실행')
      console.log(getVideo)
      return <VideoThumb />
    }
  }, [])
  pickImage()
  return <VideoThumb />
}
export default MediaPicker
