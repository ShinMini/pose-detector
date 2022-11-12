import React, { useMemo } from 'react'
import type { FC } from 'react'
import PersonView from './PersonView'
import * as D from '../data'

export type ContentProps = {
  people: D.IPerson[]
}
const Content: FC<ContentProps> = ({ people }) => {
  return <PersonView people={people} />
}
export default Content
