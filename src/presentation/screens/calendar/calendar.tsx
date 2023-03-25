import React, { useState } from "react"
import { NavigationProp } from "@src/main/routes/router"
import { useTheme } from "@src/presentation/hooks/useTheme"
import { createStyles } from "./styles"
import { Text, View } from "react-native"

const initialState = {
  test: 1,
}

const initialLoadingState = {
  visible: false,
  text: ''
}

type Props = {

} & Omit<NavigationProp, 'route'>

    
export const CalendarScreen = ({
  navigation
}: Props) => {
  const {theme} = useTheme()
  const Styles = createStyles(theme)

  const [loading, setLoading] = useState({...initialLoadingState})
  const [state, setState] = useState<typeof initialState>(initialState)

  const onChangeInputValue = (text: string, field: string) => {
    setState(prev => ({... prev, [field]: text}))
  }

  const proceed = async () => {

  }

  const renderCalendarHeader = (day: string, month: string) => {
    return (
      <>
        <View style={Styles.headerContent}>
          <Text style={Styles.headerText}>{day} {month}</Text>
          <View style={Styles.underline}></View>
        </View>
      </>
    )
  }

  const renderCalendarBody = () => {
    return (
      <>
        <View style={Styles.bodyContent}>
          <View style={[Styles.greenBox, Styles.contentBox]}>
            <Text style={Styles.boxContentHeader}>Dividendos FIIs</Text>
            <Text style={Styles.boxContentBody}>R$ 2.000,00</Text>
          </View>
          <View style={[Styles.redBox, Styles.contentBox]}>
            <Text style={Styles.boxContentHeader}>Luz</Text>
            <Text style={Styles.boxContentBody}>R$ 2.000,00</Text>
          </View>
        </View> 
      </>
    )
  }

  const renderCalendar = (day: string, month: string) => {
    return (
      <>
        {renderCalendarHeader(day, month)}
        {renderCalendarBody()}
      </>
    )
  }

  return (
    <View style={Styles.container}>
      {renderCalendar('01', 'Mar')}
      {renderCalendar('02', 'Mar')}
      {renderCalendar('03', 'Mar')}
      {renderCalendar('04', 'Mar')}
    </View>
  )
}