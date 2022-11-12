import React, { useCallback } from 'react'
import type { FC } from 'react'
import { View, Text, Image, Alert } from 'react-native'
import { Colors } from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import moment from 'moment'
import * as D from '../data'
import { Avatar, IconText } from '../components'
import { styles } from '../assets/styles/Person.style'

export type PersonProps = {
  person: D.IPerson
}
