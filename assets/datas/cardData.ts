import icon1 from '../icons/lunge.png'
import icon2 from '../icons/running.png'
import icon3 from '../icons/shoulderPress.png'
import icon4 from '../icons/sitUp.png'
import { Colors } from 'react-native-paper'

export const cardsData = [
  {
    id: 1,
    accountNo: '런지',
    balance:
      ' 런지 대표적인 다리 운동 중 하나로, 허벅지와 엉덩이에 탄력을 주며 하체 근력을 강화하는 운동이다. 자신의 체중을 이용해 실시하더라도 충분한 자극을 느낄 수 있지만, 더 강한 운동 효과를 원한다면 덤벨이나 바벨을 이용하여 천천히 운동하는 것이 좋다.',
    alias: '맨몸 운동',
    logo: icon1,
    cardColor: Colors.lightBlue100,
  },
  {
    id: 2,
    accountNo: '런닝',
    balance:
      ' 달리기는 동물이 육상에서 다리를 이용해 움직이는 가장 빠른 방법을 말한다. 스포츠에서는 특정 시점에서 모든 발이 땅에서 떨어져 있는 걸음걸이로 정의한다. 유산소 및 무산소 운동으로 널리 시행되고 있다. 또한 달리기는 모든 스포츠의 기본이 되는 운동이다. ',
    alias: '맨몸 운동',
    logo: icon2,
    cardColor: Colors.lightGreen100,
  },
  {
    id: 3,
    accountNo: '숄더 프레스',
    balance:
      ' 어깨운동에 많은 분들이 하시는 운동 중 하나가 바로 덤벨숄더프레스 입니다.  덤벨숄더프레스는 전면 삼각근을 키우는데 매우 효과적인 운동입니다. ',
    alias: '머신 운동',
    logo: icon3,
    cardColor: Colors.pink100,
  },
  {
    id: 4,
    accountNo: '윗몸 일으켜기',
    balance: ' 대충 윗몸 일으커ㅕ기 관련 설명',
    alias: '맨몸 운동',
    logo: icon4,
    cardColor: Colors.purple100,
  },
]

export default cardsData
