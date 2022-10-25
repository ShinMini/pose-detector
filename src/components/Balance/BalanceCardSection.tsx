import React from 'react'
import type { FC } from 'react'
import styled from 'styled-components/native'

// components
import BalanceCard from './BalanceCard'

const BalanceCardSectionBackground = styled.View`
  width: 95%;
  height: 75%;
`

// types
import { BalanceCardProps } from './types'

const BalanceCardSection: FC<BalanceCardProps> = (props) => {
  return (
    <BalanceCardSectionBackground>
      <BalanceCard {...props} />
    </BalanceCardSectionBackground>
  )
}

export default BalanceCardSection
