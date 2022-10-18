import React from 'react'
import type { FC } from 'react'
import { Text, View, Image } from 'react-native'
import { styles } from '../assets/styles'
import moment from 'moment'
// import 'moment/locale/pt-br'
import * as D from '../data'
import * as S from '../assets/styles'

moment.locale('ko')

export type PersonProps = {
  person: D.IPerson
}

const Person: FC<PersonProps> = ({ person }) => {
  return (
    <View style={[styles.view]}>
      <Image source={{ uri: person.avatar }} style={[styles.avatar]} />
      <View style={[styles.nameEmailView]}>
        <Text style={[styles.name]}>{person.name}</Text>
        <Text style={[styles.email]}>{person.email}</Text>
      </View>
      <View style={[styles.dateView]}>
        <Text style={[styles.createdDate]}>
          {moment(person.createdDate).startOf('date').fromNow()}
        </Text>
      </View>
      <Text style={[styles.text]}>{person.comments}</Text>
      <Image style={[styles.image]} source={{ uri: person.image }} />
      <View style={[styles.countsView]}>
        <Text style={[styles.counts]}>{person.counts.comment}</Text>
        <Text style={[styles.counts]}>{person.counts.retweet}</Text>
        <Text style={[styles.counts]}>{person.counts.heart}</Text>
      </View>
    </View>
  )
}
export default Person
