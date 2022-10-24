import React, { useState, useMemo, useCallback } from 'react'
import type { FC, Dispatch } from 'react'
// prettier-ignore
import { StyleSheet, SafeAreaView, View, Text } from 'react-native'
import { Colors } from 'react-native-paper'
import LifeCycle from '../components/userInterface/LifeCycle'
// import Timer from '../components/userInterface/Timer'
// import Interval from '../components/userInterface/Interval'
// import Fetch from '../components/userInterface/Fetch'
import * as D from '../data'

const UserInterfacePosition = () => {
  const selects = useMemo(() => ['lifeCycle', 'timer', 'interval', 'fetch'], [])
  const [select, setSelect] = useState<string>(selects[0])
  const onPress = useCallback((text) => () => setSelect(text), [])
  const buttons = useMemo(
    () =>
      selects.map((text) => (
        <Text key={text} onPress={onPress(text)} style={styles.button}>
          {text}
        </Text>
      )),
    []
  )

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.topBar}>{buttons}</View>
      {select == 'lifeCycle' && <LifeCycle />}
      {select == 'timer' && <Timer />}
      {select == 'interval' && <Interval />}
      {select == 'fetch' && <Fetch />}
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
