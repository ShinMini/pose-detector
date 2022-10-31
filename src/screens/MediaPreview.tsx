import React from 'react'
import type { FC } from 'react'
import { Image, View, Text } from 'react-native'
import type { ImageInfo } from 'expo-image-picker'

export interface ImgProps {
  pickedImage: ImageInfo | undefined
  error?: boolean
}
export const MediaPreview: FC<ImgProps> = (props) => {
  if (props.pickedImage === undefined || props.error === true)
    return (
      <View>
        <Text> error가 발생했어요...</Text>
      </View>
    )
  else {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        {props.pickedImage && (
          <Image
            source={{ uri: props.pickedImage.uri }}
            style={{ width: 200, height: 200 }}
          />
        )}
      </View>
    )
  }
}

export default MediaPreview
