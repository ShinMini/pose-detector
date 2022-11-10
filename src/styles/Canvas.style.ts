import { StyleSheet } from 'react-native'
import { Colors } from 'react-native-paper'

// prettier-ignore
import { BTN_MARGIN, IMG_RATIO, SCREEN_WIDTH, CANVAS_HEIGHT, CANVAS_WIDTH} from '../feat/screenSize'

export const CanvasStyles = StyleSheet.create({
  absoluteCanvas: {
    position: 'absolute',
    height: CANVAS_HEIGHT,
    width: CANVAS_WIDTH,
    backgroundColor: Colors.green100,
  },
  safeAreaView: {
    flex: 1,
    backgroundColor: Colors.black,
    justifyContent: 'center',
  },
  regularText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 22,
  },
  btnView: {
    backgroundColor: Colors.amber400,
    marginBottom: BTN_MARGIN,
    width: SCREEN_WIDTH * IMG_RATIO,
    alignSelf: 'center',
  },
  btnText: {
    fontSize: 27,
    color: Colors.white,
    fontFamily: 'DancingScript-Regular',
    alignSelf: 'center',
  },
})

export default CanvasStyles
