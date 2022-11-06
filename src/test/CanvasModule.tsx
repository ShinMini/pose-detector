import React, { FC } from 'react'

// custom component
import RegularButton from '../components/Buttons/RegularButton'
import RegularText from '../components/Texts/RegularText'

// Canvas
import { Canvas, Image, useImage } from '@shopify/react-native-skia'
import { View, Text, Dimensions, Alert } from 'react-native'

// import styling tools
import { Colors } from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context'

// import image to tensor converter
// import TfConverter from '../test/mini_branch/TfConverter'
import type { ImgProps } from '../components/Media/types'

const ScreenWidth = Dimensions.get('screen').width
const ScreenHeight = Dimensions.get('screen').width
const xSize = (ScreenWidth - ScreenWidth * 0.9) / 2
const ySize = (ScreenHeight - ScreenHeight * 0.9) / 2

/** canvas로 이미지를 그리는 예제까지 성공. */
export const CanvasModule: FC<ImgProps> = (props) => {
  // const image = useImage(img)

  const image = React.useMemo(() => useImage(props.pickedImage.uri), [props])
  const runTfConverter = () => {
    // const tensorImage = await TfConverter(props.pickedImage.uri)
    // console.log(tensorImage)
    Alert.alert('hi there')
  }

  if (props.error)
    return (
      <View>
        <Text> error가 발생했어요...</Text>
      </View>
    )
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: Colors.grey500,
      }}
    >
      <Canvas style={{ flex: 1 }}>
        {image && (
          <Image
            image={image}
            fit="contain"
            x={xSize}
            y={ySize}
            width={ScreenWidth * 0.9}
            height={ScreenHeight * 0.9}
          />
        )}
      </Canvas>
      <RegularButton
        onPress={runTfConverter}
        btnStyles={{ backgroundColor: Colors.black }}
      >
        <RegularText
          textStyles={{
            fontSize: 22,
            color: Colors.white,
            fontFamily: 'DancingScript-Regular',
          }}
        >
          텐서 변환
        </RegularText>
      </RegularButton>
    </SafeAreaView>
  )
}

export default CanvasModule
