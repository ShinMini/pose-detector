import React from 'react'
import type { FC } from 'react'
import styled from 'styled-components/native'

import { colors } from '../colors'

const StyledText = styled.Text`
  font-size: 37px;
  color: ${colors.white};
  text-align: left;
  font-family: Lato-Bold;
`
// types
import { TextProps } from './types'

const BigText: FC<TextProps> = (props) => {
  return <StyledText style={props.textStyles}>{props.children}</StyledText>
}

export default BigText
