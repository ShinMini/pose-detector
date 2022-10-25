import React from 'react'
import type { FC } from 'react'
import styled from 'styled-components/native'

// components
import { colors } from '../colors'
import RegularText from '../Texts/RegularText'
import SmallText from '../Texts/SmallText'

const BalanceBackground = styled.ImageBackground`
  height: 75%;
  width: 100%;
  resize-mode: cover;
  background-color: ${colors.accent};
  border-radius: 25px;
  overflow: hidden;
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
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
`
const Logo = styled.Image`
  width: 100%;
  height: 80%;
  resize-mode: contain;
  flex: 1;
`

// types
import { BalanceCardProps } from './types'

// prettier-ignore
const BalanceItem: FC<BalanceCardProps> = () => {
  return (
    <BalanceBackground>
      <BalanceTouchable underlayColor={colors.secondary}>
         <TouchableView>
            <BalanceRow></BalanceRow>
            <BalanceRow></BalanceRow>
         </TouchableView>
      </BalanceTouchable>
    </BalanceBackground>
  )
}

export default BalanceItem
