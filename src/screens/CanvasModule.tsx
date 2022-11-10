import React, { FC } from 'react'
import RegularButton from '../components/Buttons/RegularButton'
import RegularText from '../components/Texts/RegularText'
// import image to tensor converter
import TfConverter from '../feat/TfConverter'
// Canvas
// prettier-ignore
import { Canvas, Circle, Group, Image, useImage, } from '@shopify/react-native-skia'
import { Alert } from 'react-native'
// import styling tools
import { SafeAreaView } from 'react-native-safe-area-context'
// import image to tensor converter
import { ImgProps } from '../components/Media/types'
import * as poseDetection from '@tensorflow-models/pose-detection'
import * as tf from '@tensorflow/tfjs'
import LoadingIndicator from '../components/Loading/LoadingView'

import { CanvasStyles } from '../styles'

// prettier-ignore
import { BTN_MARGIN, X_SIZE, Y_SIZE, CANVAS_HEIGHT, CANVAS_WIDTH, CIRCLE_MARGIN_HEIGHT, CIRCLE_MARGIN_WIDTH } from '../feat/screenSize'

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

  const [imageProcessed, setImageProcessed] =
    React.useState<tf.Tensor<tf.Rank>>()
  const [convertProcessing, setConvertProcessing] =
    React.useState<ProcessProps>(ProcessProps.init)
  const [modelProcessing, setModelProcessing] = React.useState<ProcessProps>(
    ProcessProps.init
  )
  const [circles, setCircles] = React.useState<JSX.Element[]>([])

  if (props.error)
    return (
      <SafeAreaView style={CanvasStyles.safeAreaView}>
        <RegularText textStyles={CanvasStyles.regularText}>
          {' '}
          에러가 발생했어요 TOT...{' '}
        </RegularText>
      </SafeAreaView>
    )

  const runTfConverter = () => {
    // 이미지 uri값을 통해 tensor 객체로 converting
    setConvertProcessing(ProcessProps.processing)
    const convertFc = async () => {
      const tensorImage = await TfConverter(
        props.pickedImage.uri,
        CANVAS_WIDTH,
        CANVAS_HEIGHT
      )
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
    pose.map((arr) => {
      arr.keypoints.map((keypoint, index) => {
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
    return <Circle key={index.toString()} color="red" c={{ x, y }} r={2} />
  }

  if (convertProcessing === ProcessProps.processing)
    return (
      <SafeAreaView style={CanvasStyles.safeAreaView}>
        <LoadingIndicator
          size={100}
          text={'이미지 프로세싱 중 ...'}
          margin={BTN_MARGIN}
        />
      </SafeAreaView>
    )
  return (
    <SafeAreaView style={CanvasStyles.safeAreaView}>
      <Canvas style={{ flex: 1, marginBottom: BTN_MARGIN }}>
        {image && (
          <Image
            opacity={0.5}
            image={image}
            fit="contain"
            x={X_SIZE}
            y={Y_SIZE}
            width={CANVAS_WIDTH}
            height={CANVAS_HEIGHT}
          >
            {modelProcessing === ProcessProps.done && (
              <Group transform={[{ rotate: 0 }]}>
                {circles.map((circle) => {
                  return circle
                })}
              </Group>
            )}
          </Image>
        )}
      </Canvas>

      {convertProcessing == ProcessProps.init && (
        <RegularButton
          onPress={runTfConverter}
          btnStyles={CanvasStyles.btnView}
        >
          <RegularText textStyles={CanvasStyles.btnText}>
            {' '}
            Convert Img To Tensor Data{' '}
          </RegularText>
        </RegularButton>
      )}
      {imageProcessed !== undefined && convertProcessing == ProcessProps.done && (
        <RegularButton
          onPress={() => runEstimate(imageProcessed)}
          btnStyles={CanvasStyles.btnView}
        >
          <RegularText textStyles={CanvasStyles.btnText}>
            {' '}
            Run Model Predict{' '}
          </RegularText>
        </RegularButton>
      )}
    </SafeAreaView>
  )
}

export default CanvasModule
