import React, { FC } from 'react'

import RegularButton from '../components/Buttons/RegularButton'
import RegularText from '../components/Texts/RegularText'

// import image to tensor converter
import TfConverter from '../feat/TfConverter'

// Canvas
import { Canvas, Image, useImage } from '@shopify/react-native-skia'
import { Dimensions, StyleSheet } from 'react-native'

// import styling tools
import { Colors } from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context'

// import image to tensor converter
import { ImgProps } from '../components/Media/types'
import * as poseDetection from '@tensorflow-models/pose-detection'
import * as tf from '@tensorflow/tfjs'
import LoadingIndicator from '../components/Loading/LoadingView'

interface CanvasProps extends ImgProps {
  model: poseDetection.PoseDetector
}
/** set variable of screen & canvas size */
const SCREEN_WIDTH = Dimensions.get('screen').width
const SCREEN_HEIGHT = Dimensions.get('screen').height
const CANVAS_X = (SCREEN_WIDTH - SCREEN_WIDTH * 0.9) / 2
const CANVAS_Y = (SCREEN_HEIGHT - SCREEN_HEIGHT * 0.9) / 2

const BTN_MARGIN = 30
const IMG_RATIO = 0.9

enum ProcessProps {
  init = 'default',
  processing = 'processing',
  done = 'done',
}

export const CanvasModule: FC<CanvasProps> = (props) => {
  const model = props.model

  const [imageProcessed, setImageProcessed] =
    React.useState<tf.Tensor<tf.Rank>>()
  const [convertProcessing, setConvertProcessing] =
    React.useState<ProcessProps>(ProcessProps.init)

  if (props.error)
    return (
      <SafeAreaView style={styles.safeAreaView}>
        <RegularText textStyles={styles.regularText}>에러 발생...</RegularText>
      </SafeAreaView>
    )
  const image = useImage(props.pickedImage.uri)

  // 이미지 uri값을 통해 tensor 객체로 converting
  const runTfConverter = () => {
    console.table('skia useImage processed image ===> ', image)

    setConvertProcessing(ProcessProps.processing)
    const convertFc = async () => {
      const tensorImage = await TfConverter(props.pickedImage.uri)
      return tensorImage
    }

    convertFc().then((t_image) => {
      console.table('after converted tensor type image info ===> ', t_image)
      setImageProcessed(t_image)
      setConvertProcessing(ProcessProps.done)
    })
  }
  // 모델로 이미지 예측
  const runEstimate = async (imgProcessed: any) => {
    const t = imgProcessed.rank
    console.log('imageProcessed rank is : ', t)
    const pose = await model.estimatePoses(imgProcessed)
    console.table('the result of estimated Pose by model: ', pose)
  }

  // 이미지 프로세싱 중일 경우,
  if (convertProcessing === ProcessProps.processing)
    return (
      <SafeAreaView style={styles.safeAreaView}>
        <LoadingIndicator size={100} />
        <RegularText textStyles={styles.regularText}>
          이미지 프로세싱 중입니다 ...
        </RegularText>
      </SafeAreaView>
    )

  // 이미지 프로세싱이 끝난 경우.
  if (convertProcessing === ProcessProps.done)
    return (
      <SafeAreaView style={styles.safeAreaView}>
        <RegularText textStyles={styles.regularText}>
          이미지 프로세싱이 완료되었습니다 :)
        </RegularText>
        {imageProcessed !== undefined && (
          <RegularButton
            btnStyles={styles.btnView}
            textStyles={styles.btnText}
            onPress={() => runEstimate(imageProcessed)}
          >
            모델 테스트
          </RegularButton>
        )}
      </SafeAreaView>
    )

  // 기본 상태
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Canvas style={{ flex: 1 }}>
        {image && (
          <Image
            image={image}
            fit="contain"
            x={CANVAS_X}
            y={CANVAS_Y}
            width={SCREEN_WIDTH * IMG_RATIO}
            height={(SCREEN_HEIGHT - BTN_MARGIN) * IMG_RATIO}
          />
        )}
      </Canvas>
      <RegularButton onPress={runTfConverter} btnStyles={styles.btnView}>
        <RegularText textStyles={styles.btnText}>
          TENSOR 모델 적용하기
        </RegularText>
      </RegularButton>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: Colors.black,
    justifyContent: 'center',
    alignContent: 'center',
  },
  regularText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 22,
  },
  btnView: {
    backgroundColor: Colors.amber400,
    marginBottom: BTN_MARGIN,
    width: SCREEN_WIDTH * IMG_RATIO,
    alignSelf: 'center',
  },
  btnText: {
    fontSize: 27,
    color: Colors.white,
    fontFamily: 'DancingScript-Regular',
    alignSelf: 'center',
  },
})
export default CanvasModule
