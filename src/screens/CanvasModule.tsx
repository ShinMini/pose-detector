import React, { FC } from 'react'
import RegularButton from '../components/Buttons/RegularButton'
import RegularText from '../components/Texts/RegularText'
// import image to tensor converter
import TfConverter from '../feat/TfConverter'
// Canvas
import { Canvas, Image, useImage } from '@shopify/react-native-skia'
import { Alert, Dimensions, StyleSheet } from 'react-native'
// import styling tools
import { Colors } from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context'
// import image to tensor converter
import { ImgProps } from '../components/Media/types'
import * as poseDetection from '@tensorflow-models/pose-detection'
import * as tf from '@tensorflow/tfjs'
import LoadingIndicator from '../components/Loading/LoadingView'

/** constance variable */
// prettier-ignore
import { BTN_MARGIN, IMG_RATIO, SCREEN_WIDTH, X_Size, Y_Size, CANVAS_HEIGHT, CANVAS_WIDTH, } from './screenSize'
import separator from '../test/seperator';

interface CanvasProps extends ImgProps {
  model: poseDetection.PoseDetector
}
enum ProcessProps {
  init = 'default',
  processing = 'processing',
  done = 'done',
}

export const CanvasModule: FC<CanvasProps> = (props) => {
  const model = props.model
  const image = useImage(props.pickedImage.uri)

  // prettier-ignore
  const [imageProcessed, setImageProcessed] = React.useState<tf.Tensor<tf.Rank>>()
  const [convertProcessing, setConvertProcessing] =
    React.useState<ProcessProps>(ProcessProps.init)

  // prettier-ignore
  if (props.error)
    return (
       <SafeAreaView style={styles.safeAreaView}>
        <RegularText textStyles={styles.regularText}> 에러가 발생했어요 TOT...{' '} </RegularText>
      </SafeAreaView>
      )

  // prettier-ignore
  const runTfConverter = () => { // 이미지 uri값을 통해 tensor 객체로 converting
    setConvertProcessing(ProcessProps.processing)
    const convertFc = async () => {
      const tensorImage = await TfConverter( props.pickedImage.uri, CANVAS_WIDTH, CANVAS_HEIGHT)
      return tensorImage
    }

    convertFc().then((t_image) => {
      setImageProcessed(t_image)
      setConvertProcessing(ProcessProps.done)

      Alert.alert('done img processing :) ')
    })
  }
  // 모델로 이미지 예측
  const runEstimate = async (imgProcessed: any) => {
    const pose = await model.estimatePoses(imgProcessed)
    console.log('the result of estimated Pose by model: ', pose)
    pose.map((arr) => {
      separator(arr.keypoints).then()
    })
  }

  // prettier-ignore
  if (convertProcessing === ProcessProps.processing)
    return (
      <SafeAreaView style={styles.safeAreaView}>
        <LoadingIndicator size={100} text={'이미지 프로세싱 중 ...'} margin={BTN_MARGIN} />
      </SafeAreaView>
    )
  // prettier-ignore
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Canvas style={{ flex: 1, marginBottom: BTN_MARGIN}}>
        {image && (
          <Image
            image={image}
            fit="contain"
            x={X_Size}
            y={Y_Size}
            width={CANVAS_WIDTH}
            height={CANVAS_HEIGHT}
          />)}
      </Canvas>

      {convertProcessing == ProcessProps.init && (
        <RegularButton onPress={runTfConverter} btnStyles={styles.btnView}>
          <RegularText textStyles={styles.btnText}> TENSOR 모델 적용하기 </RegularText>
        </RegularButton>
      )}
      {imageProcessed !== undefined && convertProcessing == ProcessProps.done&& (
        <RegularButton onPress={() => runEstimate(imageProcessed)} btnStyles={styles.btnView} >
          <RegularText textStyles={styles.btnText}> 모델 테스트 </RegularText>
        </RegularButton>
      )}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: Colors.black,
    justifyContent: 'center',
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
