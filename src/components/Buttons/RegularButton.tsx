import React from 'react'
import type { FC } from 'react'
import styled from 'styled-components/native'
import {
  GestureResponderEvent,
  StyleProp,
  TextStyle,
  ViewStyle,
} from 'react-native'

// components
import { colors } from '../colors'
import RegularText from '../Texts/RegularText'

const ButtonView = styled.TouchableOpacity`
  align-items: center;
  background-color: ${colors.primary};
  width: 100%;
  margin-top: 25px;
  padding: 20px;
  border-radius: 20px;
`
type ButtonProps = {
  btnStyles?: StyleProp<ViewStyle>
  textStyles?: StyleProp<TextStyle>
  onPress: ((event: GestureResponderEvent) => void) | undefined
  children?: React.ReactNode
}

/**
 * 
 * @param props btnStyles, onPress, textStyles, children
 * @returns {React.ComponentElement} return regularText in ButtonView 
 */
const RegularButton: FC<ButtonProps> = (props) => {
  return (
    <ButtonView style={props.btnStyles} onPress={props.onPress}>
      <RegularText textStyles={props.textStyles}>{props.children}</RegularText>
    </ButtonView>
  )
}

export default RegularButton
