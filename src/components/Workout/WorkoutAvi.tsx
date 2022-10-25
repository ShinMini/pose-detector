import React, { FC } from 'react'
import styled from 'styled-components/native'

// icons
import { Ionicons } from '@expo/vector-icons'
// custom components
import { colors } from '../colors'

const StyledView = styled.View`
  height: 45px;
  width: 45px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`

// types
import { WorkoutAviProps } from './types'

const WorkoutAvi: FC<WorkoutAviProps> = (props) => {
  return (
    <StyledView style={{ backgroundColor: props.background }}>
      <Ionicons name={props.icon} size={25} color={colors.white} />
    </StyledView>
  )
}

export default WorkoutAvi
