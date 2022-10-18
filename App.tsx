// prettier-ignore
import { SafeAreaView, StyleSheet, Platform, View} from 'react-native'
import { Colors } from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import React from 'react'
import TopBar from './src/screens/TopBar'
import Content from './src/screens/Content'
import BottomBar from './src/screens/BottomBar'

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.flex}>
        <TopBar />
        <Content />
        <BottomBar />
      </SafeAreaView>
      <View style={[styles.absoluteView]}>
        <Icon name="feather" size={40} color={Colors.white} />
      </View>
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
