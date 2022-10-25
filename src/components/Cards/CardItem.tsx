import React from 'react'
import type { FC } from 'react'
import { View } from 'react-native'
import styled from 'styled-components/native'

// components
import { ScreenWidth } from '../shared'
import { colors } from '../colors'
import RegularText from '../Texts/RegularText'
import SmallText from '../Texts/SmallText'

// navigation
import { useNavigation } from '@react-navigation/native'
import type { Props as HomeProps } from '../../screens/Home'

const CardBackground = styled.ImageBackground`
  height: 75%;
  width: ${ScreenWidth * 0.67}px;
  resize-mode: cover;
  background-color: ${colors.accent};
  border-radius: 25px;
  margin-right: 25px;
  overflow: hidden;
`
const CardTouchable = styled.TouchableHighlight`
  height: 100%;
  border-radius: 25px;
`
const TouchableView = styled.View`
  justify-content: center;
  align-items: center;
  padding: 30px;
  flex: 1;
`
const CardRow = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex: 1;
`
const CardHeader = styled.View`
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  flex: 1;
`
const Logo = styled.Image`
  position: absolute;
  right: 15px;
  bottom: 15px;
  width: 40px;
  height: 40px;
  resize-mode: contain;
`

// types
import { CardProps } from './types'

const CardItem: FC<CardProps> = (props) => {
  // configuring navigation
  const navigation = useNavigation<HomeProps['navigation']>()

  // move to balance page
  const handlePress = () => {
    navigation.navigate('Balance', { ...props })
  }

  return (
    <CardBackground>
      <CardTouchable underlayColor={colors.secondary} onPress={handlePress}>
        <TouchableView>
          <Logo source={props.logo} />
          <CardHeader>
            <RegularText textStyles={{ color: colors.white }}>
              {props.accountNo}
            </RegularText>
          </CardHeader>
          <CardRow>
            <View style={{ flex: 3 }}>
              <SmallText
                textStyles={{ marginBottom: 5, color: colors.grayLight }}
              >
                Total balance
              </SmallText>
              <RegularText textStyles={{ fontSize: 19 }}>
                ${props.balance}
              </RegularText>
            </View>
          </CardRow>
        </TouchableView>
      </CardTouchable>
    </CardBackground>
  )
}

export default CardItem
