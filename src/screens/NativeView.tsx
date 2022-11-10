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
          navigation.navigate('Wallet')
        }}
      >
        go to test view
      </RegularButton>
    </SafeAreaView>
  )
}

export default NativeView
