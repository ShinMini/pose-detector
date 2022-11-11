import React from 'react'
import type { FC } from 'react'
import { View } from 'react-native'
import styled from 'styled-components/native'

// components
import { colors } from '../colors'
import RegularText from '../Texts/RegularText'
import SmallText from '../Texts/SmallText'
import WorkoutAvi from './WorkoutAvi'

const WorkoutRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 15px;

  background-color: ${Colors.grey200};
  padding: 15px;
  border-radius: 15px;
`
const LeftView = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  height: 100%;
  align-items: center;
  flex: 2;
`
const RightView = styled.View`
  flex: 1;
`

// types
import { WorkoutProps } from './types'
import { Colors } from 'react-native-paper'

const WorkoutItem: FC<WorkoutProps> = (props) => {
  return (
    <WorkoutRow>
      <LeftView>
        <WorkoutAvi background={props.art.background} icon={props.art.icon} />
        <View>
          <RegularText
            textStyles={{
              color: colors.secondary,
              textAlign: 'left',
              marginBottom: 5,
            }}
          >
            {props.title}
          </RegularText>
          <SmallText textStyles={{ color: colors.grayDark, textAlign: 'left' }}>
            {props.subtitle}
          </SmallText>
        </View>
      </LeftView>
      <RightView>
        <RegularText
          textStyles={{
            color: colors.secondary,
            textAlign: 'right',
            marginBottom: 5,
          }}
        >
          {props.amount}
        </RegularText>
        <SmallText textStyles={{ color: colors.grayDark, textAlign: 'right' }}>
          {props.date}
        </SmallText>
      </RightView>
    </WorkoutRow>
  )
}

export default WorkoutItem
