import { StyleSheet } from 'react-native'
import { Colors } from 'react-native-paper'

// prettier-ignore
export const styles = StyleSheet.create({
  view: { backgroundColor: 'Colors.lime100', padding: 5, },
  avatar: { width: 50,height: 50, borderRadius: 25, },
  nameEmailView: { flexDirection: 'row', alignItems: 'center' },
  name: { marginRight: 5, fontSize: 22, fontWeight: '500' },
  email: {},
  dateView: {},
  createdDate: {},
  text: {},
  image: { width: '100%',height: 150},
  countsView: { flexDirection: 'row', padding: 3,  justifyContent: 'space-around' },
  counts: {},
})

export default styles
