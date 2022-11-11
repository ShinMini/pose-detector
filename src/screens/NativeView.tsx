import React, { FC } from 'react'
import { Colors } from 'react-native-paper'
// prettier-ignore
import {  SafeAreaView, StyleSheet, } from 'react-native'

// user Component
import RegularButton from '../components/Buttons/RegularButton'

// config navigator
import { RootStackParamList } from '../navigators/RootStack'
import { StackScreenProps } from '@react-navigation/stack'

import { NativeStyles } from '../styles'

export type Props = StackScreenProps<RootStackParamList, 'NativeView'>

const NativeView: FC<Props> = ({ navigation }) => {
  return (
    <SafeAreaView style={NativeStyles.container}>
      <RegularButton
        textStyles={NativeStyles.text}
        btnStyles={NativeStyles.button}
        onPress={() => {
          navigation.navigate('CanvasAnimation')
        }}
      >
        애니메이션 기능
      </RegularButton>
      <RegularButton
        textStyles={NativeStyles.text}
        btnStyles={NativeStyles.button}
        onPress={() => {
          navigation.navigate('Wallet')
        }}
      >
        몸무게 차트 분석
      </RegularButton>
    </SafeAreaView>
  )
}

export default NativeView
