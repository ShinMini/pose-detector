import React from 'react'
import type { FC } from 'react'

// screens
import Welcome from '../screens/Welcome'
import Home from '../screens/Home'
import Balance from '../screens/Balance'
import MediaPicker from '../screens/MediaPicker'
import CanvasAnimation from '../screens/CanvasAnimatedView'
import NativeView from '../screens/NativeView'

// custom components
import { colors } from '../components/colors'
import Greeting from '../components/Header/Greeting'
import Profile from '../components/Header/Profile'
import Avi from '../../assets/avi/male-avatar.png'

// balance back icon
import { Ionicons } from '@expo/vector-icons'

// React Navigation
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

// for balance screen
import { BalanceCardProps } from '../components/Balance/types'
import { Wallet } from '../test/Skia'

// type about import tensor model from app component
import * as poseDetection from '@tensorflow-models/pose-detection'
import { Colors } from 'react-native-paper'
type NavProps = { model: poseDetection.PoseDetector }

export type RootStackParamList = {
  Welcome: NavProps
  Home: NavProps
  Balance: BalanceCardProps
  MediaPicker: NavProps
  NativeView: undefined
  Wallet: undefined
  CanvasAnimation: undefined
}

const Stack = createStackNavigator<RootStackParamList>()
const RootStack: FC<NavProps> = (props) => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: Colors.grey900,
              borderBottomWidth: 0,
              shadowColor: 'transparent',
              shadowOpacity: 0,
              elevation: 0,
              height: 120,
            },
            headerTintColor: Colors.white,
            headerLeftContainerStyle: {
              paddingLeft: 10,
            },
            headerRightContainerStyle: {
              paddingRight: 25,
            },
            headerRight: () => (
              <Profile
                img={Avi}
                imgContainerStyle={{ backgroundColor: Colors.grey200 }}
              />
            ),
          }}
          initialRouteName="Welcome"
        >
          <Stack.Screen
            name="Welcome"
            initialParams={{ model: props.model }}
            component={Welcome}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              headerTitle: (props) => (
                <Greeting
                  mainText="신현민님, 안녕하세요 :)"
                  subText="Welcome back"
                  {...props}
                />
              ),
              headerBackImage: () => (
                <Ionicons name="chevron-back" size={25} color={colors.white} />
              ),
              headerBackTitleVisible: false,
            }}
          />
          <Stack.Screen
            name="Balance"
            component={Balance}
            options={({ route }) => ({
              headerTitle: route?.params?.alias,
              headerTitleAlign: 'center',
              headerBackImage: (props) => (
                <Ionicons
                  {...props}
                  name="chevron-back"
                  size={25}
                  color={colors.secondary}
                />
              ),
              headerLeftContainerStyle: {
                paddingLeft: 0,
              },
            })}
          />
          <Stack.Screen
            name="MediaPicker"
            component={MediaPicker}
            options={({ route }) => ({
              headerShown: false,
            })}
          />
          <Stack.Screen
            name="NativeView"
            component={NativeView}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Wallet"
            component={Wallet}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="CanvasAnimation"
            component={CanvasAnimation}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
}
export default RootStack
