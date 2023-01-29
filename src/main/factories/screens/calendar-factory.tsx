import React from "react"
import { CalendarScreen } from "@src/presentation/screens/calendar/calendar"


export const MakeCalendarScreen: React.FC = (props: any) => {
  const logFunction = (value: any) => {
    console.log(value)
  }

  return (
    <CalendarScreen
      {...props}
    />
  )
}