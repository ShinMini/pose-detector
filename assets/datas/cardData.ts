import icon1 from '../icons/lunge.png'
import icon2 from '../icons/running.png'
import icon3 from '../icons/shoulderPress.png'
import icon4 from '../icons/sitUp.png'
import { colors } from '../../src/components/colors'

export const cardsData = [
  {
    id: 1,
    accountNo: '런지',
    balance: '자세 분석하기',
    alias: '맨몸 운동',
    logo: icon1,
    cardColor: colors.primary,
  },
  {
    id: 2,
    accountNo: '런닝',
    balance: '30분 x 2세트 ',
    alias: '맨몸 운동',
    logo: icon2,
  },
  {
    id: 3,
    accountNo: '숄더 프레스',
    balance: '8개 x 3세트',
    alias: '머신 운동',
    logo: icon3,
  },
  {
    id: 4,
    accountNo: '윗몸 일으켜기',
    balance: '30개 x 4세트',
    alias: '맨몸 운동',
    logo: icon4,
  },
]

export default cardsData
