import React from 'react'
import type { FC, ComponentProps } from 'react'
import { Text } from 'react-native'
import type { TextStyle, StyleProp } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { TouchableView } from '../components/TouchableView'
import type { TouchableViewProps } from '../components/TouchableView'

export type IconTextProps = TouchableViewProps &
  ComponentProps<typeof Icon> & {
    text: number | string
    textStyle?: StyleProp<TextStyle>
  }

export const IconText: FC<IconTextProps> = ({
  name,
  size,
  color,
  textStyle,
  text,
  ...touchableViewProps
}) => {
  return (
    <TouchableView {...touchableViewProps}>
      <Icon name={name} size={size} color={color} />
      <Text style={textStyle}>{text}</Text>
    </TouchableView>
  )
}
