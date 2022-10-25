import React, { FC } from 'react'
import styled from 'styled-components/native'

// custom components
import RegularButton from '../Buttons/RegularButton'
import { Ionicons } from '@expo/vector-icons'
import { colors } from '../colors'

const ButtonSectionBackground = styled.View`
  width: 90%;
  align-items: center;
  height: 20%;
`
// navigation
import { useNavigation } from '@react-navigation/native'
import type { Props as HomeProps } from '../../screens/Home'

const ButtonSection: FC = (props) => {
  // configuring navigation
  const navigation = useNavigation<HomeProps['navigation']>()

  // move to balance page
  const handlePress = () => {
    navigation.navigate('MediaPicker')
  }
  return (
    <ButtonSectionBackground>
      <RegularButton btnStyles={{}} onPress={handlePress}>
        내 동작 확인하기
        <Ionicons size={17} name="card" color={colors.white} />
      </RegularButton>
    </ButtonSectionBackground>
  )
}

export default ButtonSection
