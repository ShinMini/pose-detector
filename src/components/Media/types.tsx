import type { ImageInfo } from 'expo-image-picker'

export interface ImgProps {
  pickedImage: ImageInfo | undefined
  error?: boolean
}

export interface VideoProps {
  pickedVideo: ImageInfo
  error?: boolean
}
