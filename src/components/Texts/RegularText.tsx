import React from 'react'
import type { FC } from 'react'
import styled from 'styled-components/native'

import { colors } from '../colors'

const StyledText = styled.Text`
  font-size: 19px;
  color: ${colors.white};
  text-align: left;
  font-family: Lato-Bold;
`
// types
import { TextProps } from './types'

const RegularText: FC<TextProps> = (props) => {
  return <StyledText style={props.textStyles}>{props.children}</StyledText>
}

export default RegularText
