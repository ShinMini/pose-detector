import React from 'react'
import type { FC } from 'react'
import { Text } from 'react-native'
import * as D from '../data'
import * as S from '../assets/styles'

export type PersonProps = {
  person: D.IPerson
}

const Person: FC<PersonProps> = ({ person }) => {
  return (
    <Text style={S.TextStyles.Text}>{JSON.stringify(person, null, 2)}</Text>
  )
}
export default Person
