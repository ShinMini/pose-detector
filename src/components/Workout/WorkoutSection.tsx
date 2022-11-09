import React, { FC } from 'react'
import styled from 'styled-components/native'

// colors
import { colors } from '../colors'
import RegularText from '../Texts/RegularText'
import SmallText from '../Texts/SmallText'
import WorkoutItem from './WorkoutItem'

const WorkoutSectionBackground = styled.View`
  width: 100%;
  padding-horizontal: 25px;
  padding-top: 5px;
  flex: 2;
`

const WorkoutRow = styled.View`
  padding: 10px;
  border-radius: 5px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

const WorkoutList = styled.FlatList`
  width: 100%;
`
// types
import { WorkoutSectionProps } from './types'
import { Ionicons } from '@expo/vector-icons'
import { Colors } from 'react-native-paper'

const WorkoutSection: FC<WorkoutSectionProps> = (props) => {
  return (
    <WorkoutSectionBackground>
      <WorkoutRow
        style={{ marginBottom: 15, backgroundColor: Colors.grey400}}
      >
        <RegularText textStyles={{ fontSize: 19, color: colors.secondary }}>
          운동 기록
        </RegularText>
        <SmallText textStyles={{ color: colors.secondary }}>
          Recent
          <Ionicons name="caret-down" size={13} color={colors.grayDark} />
        </SmallText>
      </WorkoutRow>

      <WorkoutList
        data={props.data}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 25,
        }}
        keyExtractor={({ id }: any) => id.toString()}
        renderItem={({ item }: any) => <WorkoutItem {...item} />}
      />
    </WorkoutSectionBackground>
  )
}

export default WorkoutSection
