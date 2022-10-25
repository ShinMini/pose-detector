import React from 'react'
import type { FC } from 'react'
import styled from 'styled-components/native'

// components
import { colors } from '../colors'
import RegularText from '../Texts/RegularText'
import SmallText from '../Texts/SmallText'

const AmountSectionBackground = styled.View`
  height: 100%;
  padding-top: 5px;
  align-items: center;
  flex: 1;
`

// types
import { AmountProps } from './types'

const AmountSection: FC<AmountProps> = (props) => {
  return (
    <AmountSectionBackground>
      <SmallText textStyles={{ color: colors.secondary, marginBottom: 15 }}>
        Total Balance
      </SmallText>
      <RegularText textStyles={{ color: colors.secondary, fontSize: 28 }}>
        ${props.balance}
      </RegularText>
    </AmountSectionBackground>
  )
}

export default AmountSection
