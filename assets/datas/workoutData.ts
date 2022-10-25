import { colors } from '../../src/components/colors'
import { Colors } from 'react-native-paper'

export const workoutData = [
  {
    id: 1,
    amount: '114',
    date: '22 Oct 2022',
    title: '바벨 컬',
    subtitle: '4 set x 45 counts',
    art: {
      background: Colors.lightBlue100,
      icon: 'md-barbell',
    },
  },
  {
    id: 2,
    amount: '7',
    date: '07 Feb 2021',
    title: '런닝',
    subtitle: '2 set x 15 minutes',
    art: {
      background: Colors.purple100,
      icon: 'ios-walk-outline',
    },
  },
  {
    id: 3,
    amount: '34',
    date: '14 Sep 2021',
    title: '윗몸 일으키기',
    subtitle: '4 set x 12 counts',
    art: {
      background: Colors.lightGreen200,
      icon: 'body',
    },
  },
]

export default workoutData
