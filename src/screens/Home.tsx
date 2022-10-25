import React from 'react'
import type { FC } from 'react'
import { StatusBar } from 'expo-status-bar'
import styled from 'styled-components/native'

// custom components
import { colors } from '../components/colors'
import { Container } from '../components/shared'
import CardSection from '../components/Cards/CardSection'
import TransactionSection from '../components/Workout/WorkoutSection'

// import datas
import * as Data from '../../assets/datas'

const HomeContainer = styled(Container)`
  background-color: ${colors.grayLight};
  width: 100%;
  flex: 1;
`

// types
import { RootStackParamList } from '../navigators/RootStack'
import { StackScreenProps } from '@react-navigation/stack'
export type Props = StackScreenProps<RootStackParamList, 'Home'>

const Home: FC<Props> = () => {
  const cardsData = Data.cardsData
  const transactionData = Data.workoutData
  return (
    <HomeContainer>
      <StatusBar style="dark" />
      <CardSection data={cardsData} />
      <TransactionSection data={transactionData} />
    </HomeContainer>
  )
}

export default Home
