import React from 'react'
import { SafeAreaView } from 'react-native'
import { MotiView } from '@motify/components'
import RegularText from '../Texts/RegularText'

import { SCREEN_HEIGHT } from '../../feat/screenSize'

type LoadProps = {
  size: number
  text?: string
  margin?: number
}
const LoadingIndicator = (props: LoadProps) => {
  let margin = 30
  if (props.margin) margin += props.margin
  const TEXT_HEIGHT = SCREEN_HEIGHT / 2 - (props.size + margin)
  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor: '#010100',
      }}
    >
      <RegularText
        textStyles={{
          position: 'absolute',
          alignSelf: 'center',
          color: 'white',
          fontSize: 22,
          top: TEXT_HEIGHT,
          left: 100,
        }}
      >
        {props.text}
      </RegularText>
      <MotiView
        from={{
          width: props.size,
          height: props.size,
          borderRadius: props.size / 2,
          borderWidth: 0,
          shadowOpacity: 0.5,
        }}
        transition={{
          type: 'spring',
          loop: true,
        }}
        animate={{
          width: props.size + 20,
          height: props.size + 20,
          borderRadius: (props.size + 20) / 2,
          borderWidth: props.size / 10,
          shadowOpacity: 1,
        }}
        style={{
          width: props.size,
          height: props.size,
          alignSelf: 'center',
          borderRadius: props.size / 2,
          borderWidth: props.size / 10,
          borderColor: 'white',
          shadowColor: 'white',
          shadowOffset: { width: 0, height: 0 },
          shadowOpacity: 1,
          shadowRadius: 10,
        }}
      />
    </SafeAreaView>
  )
}
export default LoadingIndicator
