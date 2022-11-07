import { StyleSheet, Text, View } from 'react-native'
import React, { FC, useCallback, useMemo, useState, useEffect } from 'react'

import RegularButton from '../components/Buttons/RegularButton'
// config navigator
import { RootStackParamList } from '../navigators/RootStack'
import { StackScreenProps } from '@react-navigation/stack'

// get tensorflow model
import * as tf from '@tensorflow/tfjs'
import * as poseDetection from '@tensorflow-models/pose-detection'

export type Props = StackScreenProps<RootStackParamList, 'TensorView'>

const detectorConfig: poseDetection.PosenetModelConfig = {
  architecture: 'ResNet50',
  outputStride: 16,
  inputResolution: { width: 400, height: 600 },
  quantBytes: 2,
}
const TensorView: FC<Props> = ({ route }) => {
  const [model, setModel] = useState<poseDetection.PoseDetector>()

  // 불러온 모델을 최초 1회 실행 후 이후 실행시 저장.
  const getModel = useMemo(
    useCallback(async () => {
      try {
        console.log('try ... importing model')
        await tf.ready()
        const detector = await poseDetection.createDetector(
          poseDetection.SupportedModels.PoseNet,
          detectorConfig
        )
        console.log(detector)
        setModel(detector)
      } catch (e) {
        console.log('error to import model the reason: ' + e)
      } finally {
        console.log('finally')
      }
    }, []),
    []
  )

  // mount 될 경우 model 불러오기 실행.
  useEffect(() => {
    getModel
  }, [])

  const runEstimate = () => {
    // let pose = model?.estimatePoses(image)
    console.log('runEstimate')
  }

  if (!typeof model) {
    return (
      <View>
        <Text>model을 불러오는 중입니다 ...</Text>
      </View>
    )
  }
  return (
    <RegularButton
      btnStyles={styles.button}
      textStyles={styles.text}
      onPress={runEstimate}
    >
      모델 테스트
    </RegularButton>
  )
}

export default TensorView

const styles = StyleSheet.create({
  container: {
    flex: 4,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 22,
    color: 'white',
  },
  button: {
    height: 40,
    width: 160,
    justifyContent: 'center',
  },
})
