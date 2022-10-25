import React, { FC } from 'react'
import styled from 'styled-components/native'

// custom components
import RegularButton from '../Buttons/RegularButton'
import { Ionicons } from '@expo/vector-icons'
import { colors } from '../colors'
import MediaPicker from '../Picker/MediaPicker'

const ButtonSectionBackground = styled.View`
  width: 90%;
  align-items: center;
  height: 20%;
`

const ButtonSection: FC = () => {
  return (
    <ButtonSectionBackground>
      <RegularButton btnStyles={{}} onPress={(notUsed) => <MediaPicker />}>
        내 동작 확인하기
        <Ionicons size={17} name="card" color={colors.white} />
      </RegularButton>
    </ButtonSectionBackground>
  )
}

export default ButtonSection
