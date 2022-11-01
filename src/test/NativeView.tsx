import React from 'react'
import { NativeModules, Button, View, StyleSheet } from 'react-native'

const { CalendarModule } = NativeModules

const NewModuleButton = () => {
  const onPressed = () => {
    CalendarModule.createCalendarEvent('testName', 'testLocation')
  }
  const onPress = () => {
    console.log('We will invoke the native module here!')
  }

  return (
    <View style={styles.container}>
      <Button
        title="Click to invoke your native module!"
        color="#841584"
        onPress={onPress}
      />
    </View>
  )
}

export default NewModuleButton
const styles = StyleSheet.create({
  container: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
