import React from 'react'
import type { FC } from 'react'
import styled from 'styled-components/native'
import type {
  ImageSourcePropType,
  GestureResponderEvent,
  ImageStyle,
  StyleProp,
  ViewStyle,
} from 'react-native'

const StyledView = styled.TouchableOpacity`
  flex-direction: column;
  height: 45px;
  width: 45px;
  border-radius: 15px;
`

const StyledImage = styled.Image`
  resize-mode: 'cover';
  height: 100%;
  width: 100%;
  border-radius: 15px;
`
interface ProfileProps {
  img: ImageSourcePropType
  imgStyle?: StyleProp<ImageStyle>
  imgContainerStyle?: StyleProp<ViewStyle>
  onPress?: ((event: GestureResponderEvent) => void) | undefined
}


/**
 * 
 * @param props get Profile information
 * @returns {React.Component} profile info * icons in StyledView
 */
const Profile: FC<ProfileProps> = (props) => {
  return (
    <StyledView onPress={props.onPress} style={props.imgContainerStyle}>
      <StyledImage
        style={[props.imgStyle, { resizeMode: 'cover' }]}
        source={props.img}
      />
    </StyledView>
  )
}

export default Profile
