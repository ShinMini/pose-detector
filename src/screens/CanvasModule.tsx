import type { FC } from 'react'

// Canvas
import { Canvas, Image, useImage } from '@shopify/react-native-skia'

// types
import { RootStackParamList } from '../navigators/RootStack'
import { StackScreenProps } from '@react-navigation/stack'
export type Props = StackScreenProps<RootStackParamList, 'CanvasModule'>

// assets
import img from '../../assets/images/city-image.jpg'

/** canvas로 이미지를 그리는 예제까지 성공. */
export const CanvasModule: FC<Props> = ({ navigation }) => {
  const image = useImage(img)
  return (
    <Canvas style={{ flex: 1 }}>
      {image && (
        <Image
          image={image}
          fit="contain"
          x={0}
          y={0}
          width={256}
          height={256}
        />
      )}
    </Canvas>
  )
}

export default CanvasModule
