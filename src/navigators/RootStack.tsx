import React from 'react'
import type { FC } from 'react'

// screens
import Welcome from '../screens/Welcome'
import Home from '../screens/Home'
import Balance from '../screens/Balance'
import MediaPicker from '../screens/MediaPicker'
import CanvasModule from '../screens/CanvasModule'

import NativeView from '../screens/NativeView'
import TensorView from '../screens/TensorView'

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
import { CardProps } from '../components/Cards/types'
// type about import tensor model from app component
import * as poseDetection from '@tensorflow-models/pose-detection'
type NavProps = { model: poseDetection.PoseDetector }

export type RootStackParamList = {
  Welcome: undefined
  Home: undefined
  Balance: CardProps
  MediaPicker: NavProps
  // CanvasModule: CanvasProps
  NativeView: undefined
  TensorView: undefined
}

const Stack = createStackNavigator<RootStackParamList>()

const RootStack: FC<NavProps> = (props) => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: colors.grayLight,
              borderBottomWidth: 0,
              shadowColor: 'transparent',
              shadowOpacity: 0,
              elevation: 0,
              height: 120,
            },
            headerTintColor: colors.secondary,
            headerLeftContainerStyle: {
              paddingLeft: 10,
            },
            headerRightContainerStyle: {
              paddingRight: 25,
            },
            headerRight: () => (
              <Profile
                img={Avi}
                imgContainerStyle={{ backgroundColor: colors.tertiary }}
              />
            ),
          }}
          initialRouteName="Welcome"
        >
          <Stack.Screen
            name="Welcome"
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
              headerLeft: () => <></>,
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
            name="TensorView"
            component={TensorView}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
}
export default RootStack
