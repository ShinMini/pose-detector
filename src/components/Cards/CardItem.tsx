import React from 'react'
import type { FC } from 'react'
import { View } from 'react-native'
import styled from 'styled-components/native'
import { Colors } from 'react-native-paper'

// components
import { ScreenWidth } from '../shared'
import { colors } from '../colors'
import BigText from '../Texts/BigText'
import RegularText from '../Texts/RegularText'
import SmallText from '../Texts/SmallText'

// navigation
import { useNavigation } from '@react-navigation/native'
import type { Props as HomeProps } from '../../screens/Home'

const CardBackground = styled.ImageBackground`
  height: 75%;
  width: ${ScreenWidth * 0.67}px;
  resize-mode: cover;
  background-color: ${colors.tertiaryContainer};
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
  align-items: flex-start;
  width: 100%;
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

  let color: any = colors.surfaceVariant
  if (props.cardColor !== colors.surfaceVariant) color = props.cardColor
  return (
    <CardBackground>
      <CardTouchable underlayColor={colors.secondary} onPress={handlePress}>
        <TouchableView>
          <Logo source={props.logo} />
          <CardHeader>
            <BigText textStyles={{ color: colors.grayDark, fontSize: 25 }}>
              {props.accountNo}
            </BigText>
            <SmallText
              textStyles={{
                marginBottom: 5,
                color: Colors.lightBlue300,
                fontSize: 13,
              }}
            >
              {props.accountNo} motion analysis
            </SmallText>
          </CardHeader>
          <CardRow>
            <View style={{ flex: 1 }}>
              <RegularText
                textStyles={{ fontSize: 20, color: Colors.yellow900 }}
              >
                Click to check your motion
              </RegularText>
              <SmallText
                textStyles={{
                  marginTop: 5,
                  color: colors.yellow,
                  fontSize: 15,
                }}
              >
                {props.alias}
              </SmallText>
            </View>
          </CardRow>
        </TouchableView>
      </CardTouchable>
    </CardBackground>
  )
}

export default CardItem
