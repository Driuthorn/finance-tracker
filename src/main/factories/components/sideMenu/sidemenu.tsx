import React from "react"
import { NativeStackHeaderProps } from "@react-navigation/native-stack"
import { SideMenu } from "@src/presentation/components/sideMenu/sideMenu"

type Props = {
  textColor?: string
  backgroundColor?: string
} & NativeStackHeaderProps

export const MakeSideMenuComponent = (props: Props) => {

  const navigateToHomeScreen = () => {
    const {navigate} = props.navigation
    navigate('home')
  }

  const navigateToCalendarScreen = () => {
    const {navigate} = props.navigation
    navigate('calendar')
  }

  const navigateToPlanningScreen = () => {
    const {navigate} = props.navigation
    navigate('calendar')
  }

  const logout = () => {
    const {navigate} = props.navigation;
    navigate('login')
  }

  return (
    <SideMenu 
      testID={"side-menu-component"}
      onHomePress={navigateToHomeScreen}      
      onCalendarPress={navigateToCalendarScreen}
      onPlanningPress={navigateToPlanningScreen}
      onLogoutPress={logout}
    />
  )
}