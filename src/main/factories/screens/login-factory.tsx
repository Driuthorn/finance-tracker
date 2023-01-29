import { useIsFocused } from "@react-navigation/native"
import { LoginScreen } from "@src/presentation/screens/login"
import React from "react"

export const MakeLoginScreen: React.FC = (props: any) => {
  const logFunction = (value: any) => {
    console.log(value)
  }
  return (
    <LoginScreen 
      {...props}
      requestAuthorization={logFunction}
      useIsFocused={useIsFocused}
    />
  )
}