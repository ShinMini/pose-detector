import React from 'react'
import type { FC } from 'react'
import { StatusBar } from 'expo-status-bar'
import styled from 'styled-components/native'

// custom components
import { colors } from '../components/colors'
import { Container } from '../components/shared'
import AmountSection from '../components/Balance/AmountSection'
import BalanceCardSection from '../components/Balance/BalanceCardSection'
import ButtonSection from '../components/Balance/ButtonSection'

const BalanceContainer = styled(Container)`
  background-color: ${colors.secondary};
  justify-content: space-between;
  width: 100%;
  height: 100%;
`
// type
import { RootStackParamList } from '../navigators/RootStack'
import { StackScreenProps } from '@react-navigation/stack'
type Props = StackScreenProps<RootStackParamList, 'Balance'>

const Balance: FC<Props> = ({ route }) => {
  return (
    <BalanceContainer>
      <StatusBar style="dark" />
      <AmountSection balance={route?.params?.balance} />
      <BalanceCardSection {...route?.params} />
      <ButtonSection />
    </BalanceContainer>
  )
}

export default Balance
