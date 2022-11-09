import React from 'react'
import type { FC } from 'react'
import styled from 'styled-components/native'

// components
import { colors } from '../colors'
import RegularText from '../Texts/RegularText'
import SmallText from '../Texts/SmallText'

const BalanceBackground = styled.ImageBackground`
  flex: 1;
  width: 100%;
  resize-mode: cover;
  background-color: ${colors.accent};
  border-radius: 25px;
  overflow: hidden;
  opacity: 0.7;
`
const BalanceTouchable = styled.TouchableHighlight`
  height: 100%;
  border-radius: 25px;
`
const TouchableView = styled.View`
  justify-content: center;
  align-items: center;
  padding: 30px;
  flex: 1;
`
const BalanceRow = styled.View`
  flex-direction: column;
  justify-content: space-evenly;
  width: 100%;
  height: 80%;
  background-color: ${Colors.grey900};
  padding: 15px;
  border-radius: 15px;
`
// types
import { BalanceCardProps } from './types'
import babel from '../../../assets/workout/babel.jpg'
import BigText from '../Texts/BigText'
import { Colors } from 'react-native-paper'

const BalanceItem: FC<BalanceCardProps> = (props) => {
  return (
    <BalanceBackground source={babel}>
      <BalanceTouchable underlayColor={colors.secondary}>
        <TouchableView>
          <BalanceRow>
            <BigText textStyles={{ color: Colors.grey100 }}>
              {props.accountNo}
            </BigText>
            <RegularText
              textStyles={{ color: Colors.grey300, textAlign: 'left' }}
            >
              {props.balance}
            </RegularText>
            <SmallText textStyles={{ color: Colors.grey400 }}>
              {props.alias}
            </SmallText>
          </BalanceRow>
        </TouchableView>
      </BalanceTouchable>
    </BalanceBackground>
  )
}

export default BalanceItem
