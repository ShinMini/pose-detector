import React, { useState, useMemo, useCallback } from 'react'
import type { FC, Dispatch } from 'react'
// prettier-ignore
import { StyleSheet, SafeAreaView, View, Text } from 'react-native'
import { Colors } from 'react-native-paper'
import LifeCycle from './LifeCycle'
import Timer from './Timer '
import Interval from './Interval '
import Fetch from './Fetch '
import * as D from '../data'

/*
// content도 차라리 state 받아서 사용할 수 있게 설정해주자.
export type ContentProps = {
  people: D.IPerson[]
}
type PersonInformation = {
  title: string
  Component: FC<any>
}
const personInformations: PersonInformation[] = [
  { title: 'PersonUsingValueState', Component: PersonUsingValueState },
  { title: 'PersonUsingPassingState', Component: PersonUsingPassingState },
]
*/
// const numberOfComponents = personInformations.length
// prettier-ignore

const UserInterfacePosition = () => {
   const selects = useMemo(() => ['lifeCycle', 'timer', 'interval', 'fetch'], [])
   const [select, setSelect] = useState<string>(selects[0])
   const onPress = useCallback((text) => () => setSelect(text), [])
   const buttons = useMemo(() => 
   selects.map((text) => (
      <Text key={text} onPress={onPress(text)} style={styles.button}>
         {text}
      </Text>
   )), [])

   return (
      <SafeAreaView style={styles.safeAreaView}>
         <View style={styles.topBar}>{buttons}</View>
         {select == 'lifeCycle' && <LifeCycle />}
         {select == 'timer' && <Timer/>}
         {select == 'interval' && <Interval/>}
         {select == 'fetch' && <Fetch/>}
      </SafeAreaView>
   )
}

export default UserInterfacePosition

const styles = StyleSheet.create({
  safeAreaView: { flex: 1 },
  topBar: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    backgroundColor: Colors.grey500,
  },
  button: { fontSize: 20, color: 'white' },
})
