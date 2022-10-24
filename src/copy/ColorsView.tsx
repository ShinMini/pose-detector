import React from 'react'
import type { FC } from 'react'
import { Text, SafeAreaView } from 'react-native'
import * as S from '../assets/styles'

const ColorsView: FC = () => {
  return (
    <SafeAreaView style={S.ViewStyles.SafeAreaView}>
      <Text style={[S.TextStyles.Text]}>Hello StyleSheet World !!!</Text>
    </SafeAreaView>
  )
}
export default ColorsView
