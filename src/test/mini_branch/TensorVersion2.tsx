import { View, Text, Button, StyleSheet } from 'react-native'
import type { FC } from 'react'

import TensorflowExample from './TensorflowExample'
import TransformImageToTensor from './tf_converter'

import { RootStackParamList } from '../../navigators/RootStack'
import { StackScreenProps } from '@react-navigation/stack'

export type Props = StackScreenProps<RootStackParamList, 'TensorView'>

const TensorView: FC<Props> = ({ route }) => {
  const onPress = () => {
    console.log('clicked onPress')
    TransformImageToTensor(route.params.pickedImage.uri)
      .then(TensorflowExample)
      .then((poses) => console.log(poses))
  }

  return (
    <View style={styles.container}>
      <Button title="tensor run" onPress={onPress} />
    </View>
  )
}
export default TensorView

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
})
