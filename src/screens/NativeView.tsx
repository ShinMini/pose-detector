import React, { FC } from 'react'
// prettier-ignore
import { NativeModules, Text, View, StyleSheet, TouchableOpacity, } from 'react-native'

// config navigator
import { RootStackParamList } from '../navigators/RootStack'
import { StackScreenProps } from '@react-navigation/stack'
export type Props = StackScreenProps<RootStackParamList, 'NativeView'>

const NativeView: FC<Props> = ({ route }) => {
  let OpenActivity = NativeModules.OpenActivity
  const openNativeView = () => {
    OpenActivity.open()
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={openNativeView}>
        <Text style={{ color: 'white' }}>Open Android Activity !</Text>
      </TouchableOpacity>
    </View>
  )
}

export default NativeView

const styles = StyleSheet.create({
  container: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    height: 40,
    width: 160,
    justifyContent: 'center',
  },
})
