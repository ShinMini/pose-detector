import React from 'react'
import { SafeAreaView } from 'react-native'
import { MotiView } from '@motify/components'
import RegularText from '../Texts/RegularText'

const LoadingIndicator = ({ size }: { size: number }) => {
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
          alignSelf: 'center',
          color: 'white',
          fontSize: 22,
          paddingBottom: 15,
          fontFamily: 'DancingScript-Regular',
        }}
      >
        Welcome to my app
      </RegularText>
      <MotiView
        from={{
          width: size,
          height: size,
          borderRadius: size / 2,
          borderWidth: 0,
          shadowOpacity: 0.5,
        }}
        transition={{
          type: 'spring',
          loop: true,
        }}
        animate={{
          width: size + 20,
          height: size + 20,
          borderRadius: (size + 20) / 2,
          borderWidth: size / 10,
          shadowOpacity: 1,
        }}
        style={{
          width: size,
          height: size,
          alignSelf: 'center',
          borderRadius: size / 2,
          borderWidth: size / 10,
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
