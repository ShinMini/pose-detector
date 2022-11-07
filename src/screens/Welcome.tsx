import React from 'react'
import type { FC } from 'react'
import { StatusBar } from 'expo-status-bar'
import styled from 'styled-components/native'

// custom components
import { colors } from '../components/colors'
import { Container } from '../components/shared'
import BigText from '../components/Texts/BigText'
import SmallText from '../components/Texts/SmallText'
import RegularButton from '../components/Buttons/RegularButton'

const WelcomeContainer = styled(Container)`
  background-color: ${colors.secondary};
  justify-content: space-between;
  width: 100%;
  height: 100%;
`

const TopSection = styled.View`
  width: 100%;
  flex: 1;
  max-height: 55%;
`
const TopImage = styled.Image`
  width: 100%;
  height: 100%;
  resize-mode: cover;
`
const BottomSection = styled.View`
  width: 100%;
  padding: 25px;
  flex: 1;
`
// image
import background from '../../assets/bgs/horizontal-cute-robot.jpg'

// types
import { RootStackParamList } from '../navigators/RootStack'
import { StackScreenProps } from '@react-navigation/stack'
export type Props = StackScreenProps<RootStackParamList, 'Welcome'>

const Welcome: FC<Props> = ({ navigation, route }) => {
  return (
    <>
      <StatusBar style="light" />
      <WelcomeContainer>
        <TopSection>
          <TopImage source={background} />
        </TopSection>
        <BottomSection>
          <BigText
            textStyles={{
              width: '70%',
              marginBottom: 25,
              color: colors.accent,
            }}
          >
            Try mobile motion analysis
          </BigText>
          <SmallText
            textStyles={{ width: '70%', marginBottom: 25, color: colors.gray }}
          >
            Best application for correcting work out posture through motion
            analysis using machine learning!
          </SmallText>
          <RegularButton
            textStyles={{ fontSize: 25 }}
            onPress={() => {
              navigation.navigate('Home', { model: route.params.model })
            }}
          >
            Get Started
          </RegularButton>
          <RegularButton
            textStyles={{ fontSize: 25 }}
            onPress={() => {
              navigation.navigate('NativeView')
            }}
          >
            go to test view
          </RegularButton>
        </BottomSection>
      </WelcomeContainer>
    </>
  )
}

export default Welcome
