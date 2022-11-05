/*
import { StyleSheet, Text, View, Button } from 'react-native'
import React, { FC, useCallback } from 'react'

import tf from '@tensorflow/tfjs'

import useModelAsync from '../src/feat/hook/useModelAsync'
import { loadedModel } from './GetModel'

// config navigator
import { RootStackParamList } from '../src/navigators/RootStack'
import { StackScreenProps } from '@react-navigation/stack'

export type Props = StackScreenProps<RootStackParamList, 'TensorView'>

const TensorView: FC<Props> = ({ route }) => {
  const getModel = useCallback(async () => {
    console.log('getModel callback function running ')
    try {
      return loadedModel
    } catch (e) {
      console.log('error to import model...' + e)
    }
  }, [])

  const { execute, status, model, error } = useModelAsync(getModel)
  if (status === 'pending')
    return (
      <View style={styles.container}>
        <Text style={styles.text}>this is tensor lab view.</Text>
      </View>
    )
  // 에러 발생시
  if (status === 'error') {
    console.log(error)
    return (
      <View style={styles.container}>
        <Text style={styles.text}>에러가 발생했습니다. error: {error}</Text>
      </View>
    )
  }
  if (status === 'success' && model !== undefined) {
    console.log('model.summary 값이 undefined가 아니라고? .. 가능하냐 이거?. ')
    model?.summary()
    return (
      <View style={styles.container}>
        <Text style={styles.text}> 모델 불러오기 성공 ! </Text>
      </View>
    )
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text}> 현재 모델 상태: undefined</Text>
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

*/
