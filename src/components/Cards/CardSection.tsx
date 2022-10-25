import React from 'react'
import type { FC } from 'react'
import styled from 'styled-components/native'

// components
import CardItem from './CardItem'
const CardList = styled.FlatList`
  width: 100%;
  flex: 1;
  padding-left: 25px;
  padding-bottom: 15px;
`
// types
import { CardSectionProps } from './types'

const CardSection: FC<CardSectionProps> = (props) => {
  return (
    <CardList
      data={props.data}
      horizontal={true}
      showHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingRight: 25, alignItems: 'center' }}
      keyExtractor={({ id }: any) => id.toString()}
      renderItem={({ item }: any) => <CardItem {...item} />}
    />
  )
}

export default CardSection
