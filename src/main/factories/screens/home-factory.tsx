import React from "react"
import { HomeScreen } from "@src/presentation/screens/home"

export const MakeHomeScreen: React.FC = (props: any) => {
  const logFunction = (value: any) => {
    console.log(value)
  }

  return (
    <HomeScreen 
      {...props}
      requestUserInfo={logFunction}
    />
  )
}