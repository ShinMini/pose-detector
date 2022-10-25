import React from 'react'
import type { FC } from 'react'
import styled from 'styled-components/native'

import { colors } from './../colors'

const StyledText = styled.Text`
  font-size: 14px;
  color: ${colors.gray};
  text-align: left;
  font-family: Lato-Regular;
`
// types
import { TextProps } from './types'

const SmallText: FC<TextProps> = (props) => {
  return <StyledText style={props.textStyles}>{props.children}</StyledText>
}

export default SmallText
