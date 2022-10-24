import React, { useState, useCallback } from 'react'
import type { FC } from 'react'
import { View, Text, Image, Alert } from 'react-native'
import { Colors } from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import moment from 'moment'
import * as D from '../../data'
import { Avatar } from '..'
import { styles } from '../../assets/styles/Person.style'
import PersonIcons from './PersonIcons'

export type PersonProps = {
  person: D.IPerson
}

// prettier-ignore
const PersonUsingPassingState: FC<PersonProps> = ({ person:initialPerson}) => {
  const [person, setPerson] = useState<D.IPerson>({
    ...initialPerson,
    counts: {comment: 0, retweet: 0, heart: 0}
  })
    const avatarPressed = useCallback(() => Alert.alert('Avatar pressed.'), [])
    const deletePressed = useCallback(() => Alert.alert('delete pressed.'), [])

    return (
      <View style={[styles.view]}>
        <View style={[styles.leftView]}>
          <Avatar imageStyle={[styles.avatar]}
          uri={initialPerson.avatar} size={50} onPress={avatarPressed} />
          </View>
        <View style={[styles.rightView]}>
          <Text style={[styles.name]}>{initialPerson.name}</Text>
          <Text style={[styles.email]}>{initialPerson.email}</Text>
          <View style={[styles.dateView]}>
            <Text style={[styles.text]}>
          {moment(initialPerson.createdDate).startOf('day').fromNow()}
            </Text>
            <Icon name="trash-can-outline" size={26} color={Colors.lightBlue500}
              onPress={deletePressed} />
          </View>
          <Text numberOfLines={3} ellipsizeMode="tail" style={[styles.comments]}>
            {initialPerson.comments}
          </Text>
          <Image style={[styles.image]} source={{uri: initialPerson.image}} />
          <PersonIcons person={person} setPerson={setPerson} />
        </View>
    </View>
  )
}

export default PersonUsingPassingState
