// prettier-ignore
import { SafeAreaView, StyleSheet, Platform, View} from 'react-native'
import { Colors } from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import React, { useState } from 'react'
import TopBar from './src/screens/TopBar'
import Content from './src/screens/Content'
import BottomBar from './src/screens/BottomBar'
import * as D from './src/data'

const FloatIcon = () => {
  return (
    <View style={[styles.absoluteView]}>
      <Icon name="feather" size={40} color={Colors.white} />
    </View>
  )
}
export default function App() {
  const [people, setPeople] = useState<D.IPerson[]>([])
  return (
    <>
      <SafeAreaView style={styles.flex}>
        <TopBar setPeople={setPeople} />
        <Content people={people} />
        <BottomBar />
      </SafeAreaView>
      <FloatIcon />
    </>
  )
}

const styles = StyleSheet.create({
  flex: { flex: 1 },
  absoluteView: {
    backgroundColor: Colors.purple700,
    position: 'absolute',
    right: 30,
    bottom: Platform.select({ ios: 100, android: 80 }),
    padding: 10,
    borderRadius: 35,
  },
})
