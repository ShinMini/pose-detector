import React, { FC } from 'react'
import { Colors } from 'react-native-paper'
import { Platform, View, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

/** flat icons, 플로팅 아이콘 기능
 *
 * @return {JSX node}feather Icon in absoluteView
 */
const FloatIcon: FC = () => {
  return (
    <View style={[styles.absoluteView]}>
      <Icon name="feather" size={40} color={Colors.white} />
    </View>
  )
}
export default FloatIcon

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
