import React, { FC } from 'react'
import RegularButton from '../components/Buttons/RegularButton'
import RegularText from '../components/Texts/RegularText'
// import image to tensor converter
import TfConverter from '../feat/TfConverter'
// Canvas
// prettier-ignore
import { Canvas, center, Circle, Group, Image, Rect, useImage,
} from '@shopify/react-native-skia'
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
import { BTN_MARGIN, IMG_RATIO, SCREEN_WIDTH, X_SIZE, Y_SIZE, CANVAS_HEIGHT, CANVAS_WIDTH, CIRCLE_MARGIN_HEIGHT, CIRCLE_MARGIN_WIDTH } from './screenSize'
import ViewStyles from '../styles/View.style'

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
  // prettier-ignore
  const [convertProcessing, setConvertProcessing] = React.useState<ProcessProps>(ProcessProps.init)
  // prettier-ignore
  const [modelProcessing, setModelProcessing] = React.useState<ProcessProps>( ProcessProps.init)
  const [circles, setCircles] = React.useState<JSX.Element[]>([])

  // prettier-ignore
  if (props.error)
    return (
       <SafeAreaView style={styles.safeAreaView}>
        <RegularText textStyles={styles.regularText}> 에러가 발생했어요 TOT... </RegularText>
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
    setModelProcessing(ProcessProps.processing)
    const pose = await model.estimatePoses(imgProcessed)
    console.log('canvas width: ', CANVAS_WIDTH)
    console.log('canvas width: ', CANVAS_HEIGHT)

    pose.map((arr) => {
      arr.keypoints.map((keypoint, index) => {
        console.log('name: ', keypoint.name)
        console.log('x: ', keypoint.x * 0.85 + CIRCLE_MARGIN_WIDTH)
        console.log('y: ', keypoint.y * 1.2 + CIRCLE_MARGIN_HEIGHT)

        if (keypoint.name) {
          if (
            makeCircles(keypoint.name, keypoint.x, keypoint.y, index) !==
            undefined
          ) {
            setCircles((circles) => [
              ...circles,
              makeCircles(
                keypoint.name,
                keypoint.x * 0.85 + CIRCLE_MARGIN_WIDTH,
                keypoint.y * 1.15 + CIRCLE_MARGIN_HEIGHT,
                // keypoint.x,
                // keypoint.y,
                index
              ),
            ])
          }
        }
      })
    })
    setModelProcessing(ProcessProps.done)
  }

  const makeCircles = (
    name: string | undefined,
    x: number,
    y: number,
    index: number
  ) => {
    return (
      <Circle
        ViewStyles={{ zIndex: 10 }}
        key={index.toString()}
        Label={name}
        color="red"
        c={{ x, y }}
        r={2}
      />
    )
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
            ViewStyles={{zIndex: 1}}
            opacity={0.5}
            image={image}
            fit="contain"
            x={X_SIZE}
            y={Y_SIZE}
            width={CANVAS_WIDTH}
            height={CANVAS_HEIGHT}
          >
      {(modelProcessing === ProcessProps.done) &&
      (
        <Group ViewStyles={{zIndex: 10}} transform={[{rotate: 0}]} width={CANVAS_WIDTH} height={CANVAS_HEIGHT}>
          { circles.map((circle) => { return circle }) }
        </Group>
      )}
          </Image>)}
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
  absoluteCanvas: {
    position: 'absolute',
    height: CANVAS_HEIGHT,
    width: CANVAS_WIDTH,
    backgroundColor: Colors.green100,
  },
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
