import { StyleSheet, Text, View } from 'react-native'
import React, { FC, useCallback, useMemo, useState, useEffect } from 'react'

import RegularButton from '../components/Buttons/RegularButton'
// config navigator
import { RootStackParamList } from '../navigators/RootStack'
import { StackScreenProps } from '@react-navigation/stack'

// get tensorflow model
import * as poseDetection from '@tensorflow-models/pose-detection'
import * as tf from '@tensorflow/tfjs'

export type Props = StackScreenProps<RootStackParamList, 'TensorView'>

const detectorConfig: poseDetection.PosenetModelConfig = {
  architecture: 'ResNet50',
  outputStride: 16,
  inputResolution: { width: 257, height: 200 },
  quantBytes: 2,
}
const TensorView: FC<Props> = ({ route }) => {
  const [model, setModel] = useState<poseDetection.PoseDetector>()

  const getModel = useMemo(
    useCallback(async () => {
      try {
        await tf.ready()
        console.log('try ...')
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

  const onPressed = () => {
    // const pose = model?.estimatePoses(image)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}> 현재 모델 상태: {typeof model}</Text>
      <RegularButton
        btnStyles={styles.button}
        textStyles={styles.text}
        onPress={() => getModel}
      >
        모델 불러오기
      </RegularButton>
      {model !== undefined && (
        <RegularButton
          btnStyles={styles.button}
          textStyles={styles.text}
          onPress={onPressed}
          children={<Text>모델 테스트</Text>}
        />
      )}
    </View>
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
