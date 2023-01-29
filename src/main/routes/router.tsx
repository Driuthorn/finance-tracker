import React from 'react'
import { createNativeStackNavigator, NativeStackScreenProps } from "@react-navigation/native-stack"
import { RouteNames } from "./routes"
import { NavigationContainer } from '@react-navigation/native'
import { navigationRef } from '@src/main/routes/rootNavigation'
import { MakeLoginScreen } from '../factories/screens/login-factory'
import { MakeHomeScreen } from '../factories/screens/home-factory'
import { MakeCalendarScreen } from '../factories/screens/calendar-factory'

export type RootStackParamList = {
  ['login']: undefined
  ['home']: undefined
  ['calendar']: undefined
}

export type NavigationProp = NativeStackScreenProps<RootStackParamList, RouteNames>

const Stack = createNativeStackNavigator<RootStackParamList>()

const StackNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
      animation: 'slide_from_right',
      contentStyle: {
        backgroundColor: 'transparent'
      }
    }}
  >
    <Stack.Screen
      name='login'
      component={MakeLoginScreen}
      options={{
        title: 'Login'
      }}
    />
    <Stack.Screen
      name='home'
      component={MakeHomeScreen}
      options={{
        title:'home'
      }}
    />
    <Stack.Screen
      name='calendar'
      component={MakeCalendarScreen}
      options={{
        title: 'calendar'
      }}
    />
  </Stack.Navigator>
)

export default () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <StackNavigator />
    </NavigationContainer>
  )
}