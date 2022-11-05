import { StyleSheet, Text, View, Button, Alert } from 'react-native'
import React, { FC, useCallback, useState, useEffect } from 'react'

import tf from '@tensorflow/tfjs'

// config navigator
import { RootStackParamList } from '../navigators/RootStack'
import { StackScreenProps } from '@react-navigation/stack'

// get tensorflow model
import { bundleResourceIO } from '@tensorflow/tfjs-react-native'
import * as poseDetection from '@tensorflow-models/pose-detection';

export type Props = StackScreenProps<RootStackParamList, 'TensorView'>

const json = require('../../assets/tensorModel/model.json')
const wet = require('../../assets/tensorModel/weights.bin')
/*
 *  async function bundleResourceIOExample() {
 *    const model =
 *      await tf.loadLayersModel(bundleResourceIO(modelJson, modelWeights));
 */

const TensorView: FC<Props> = ({ route }) => {
  const [model, setModel] = useState<tf.LayersModel>()

  const getModel = useCallback(async () => {
    try {
      const loadedModel = await tf.loadLayersModel(bundleResourceIO(json, wet))
      setModel(loadedModel)
    } catch (e) {
      console.log('error to import model the reason: ' + e)
    }
  }, [])

  useEffect(() => {
    console.log('useEffect is running ')
    getModel()
    model !== undefined
      ? Alert.alert('model is loaded')
      : Alert.alert('model is undefined')
  }, [model])

  const onPressed = () => {
    if (model !== undefined) model.summary()
    else Alert.alert('model을 불러오는데 실패했습니다.')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}> 현재 모델 상태: {typeof model}</Text>
      <Button title="모델 불러오기" onPress={getModel} />
      <Button title="모델 확인하기" onPress={onPressed} />
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
