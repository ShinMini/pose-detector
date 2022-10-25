import React from 'react'
import type { FC } from 'react'
import styled from 'styled-components/native'

// components
import { colors } from '../colors'
import BigText from '../Texts/BigText'
import RegularText from '../Texts/RegularText'
import SmallText from '../Texts/SmallText'

const BalanceBackground = styled.ImageBackground`
  flex: 1;
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
import babel from '../../../assets/workout/babel.jpg'

const BalanceItem: FC<BalanceCardProps> = () => {
  return (
    <BalanceBackground source={babel}>
      <BalanceTouchable underlayColor={colors.secondary}>
        <TouchableView>
          <BalanceRow>
            <RegularText>운동 기본 동작에 대해 설명하는 세션</RegularText>
          </BalanceRow>
          <RegularText>버튼 클릭시 카메라 라이브러리 호출 예정</RegularText>
          <BalanceRow>
            <SmallText>부가 설명 글 삽입 예정</SmallText>
          </BalanceRow>
        </TouchableView>
      </BalanceTouchable>
    </BalanceBackground>
  )
}

export default BalanceItem
