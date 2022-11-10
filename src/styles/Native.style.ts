import { StyleSheet } from 'react-native'
import { Colors } from 'react-native-paper'

export const NativeStyles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: { fontSize: 25, color: 'white' },
  button: {
    backgroundColor: Colors.indigo500,
    width: 250,
  },
})

export default NativeStyles
