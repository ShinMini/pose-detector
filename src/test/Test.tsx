import React from 'react'
import { View, Text } from 'react-native'
import * as tf from '@tensorflow/tfjs'
import '@tensorflow/tfjs-react-native'
import { State } from 'react-native-gesture-handler'

export class Test extends React.Component {
  constructor(props: any) {
    super(props)
    this.state = {
      isTfReady: false,
    }
  }

  async componentDidMount() {
    // Wait for tf to be ready.
    await tf.ready().then(() => console.log('tf is loaded'))
    // Signal to the app that tensorflow.js can now be used.
    this.setState({
      isTfReady: true,
    })
  }

  render() {
    return (
      <View
        style={{
          backgroundColor: 'black',
          flex: 1,
          alignContent: 'center',
          justifyContent: 'center',
        }}
      >
        <Text style={{ color: 'white', fontSize: 22, alignSelf: 'center' }}>
          This is Test Page
        </Text>
      </View>
    )
  }
}
