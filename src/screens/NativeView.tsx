import React, { FC } from 'react'
import { Colors } from 'react-native-paper'
// prettier-ignore
import {  SafeAreaView, StyleSheet, } from 'react-native'

// user Component
import RegularButton from '../components/Buttons/RegularButton'

// screen components
import TensorView from './TensorView'

// config navigator
import { RootStackParamList } from '../navigators/RootStack'
import { StackScreenProps } from '@react-navigation/stack'

export type Props = StackScreenProps<RootStackParamList, 'NativeView'>

const NativeView: FC<Props> = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <RegularButton
        textStyles={{ fontSize: 25, color: 'white' }}
        btnStyles={{ backgroundColor: Colors.indigo500, width: 250 }}
        onPress={() => {
          navigation.navigate('TensorView')
        }}
      >
        go to test view
      </RegularButton>
    </SafeAreaView>
  )
}

export default NativeView

const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    height: 40,
    width: 160,
    justifyContent: 'center',
  },
})
