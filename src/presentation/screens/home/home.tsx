import React from 'react'
import { NavigationProp } from "@src/main/routes/router"
import { useTheme } from "@src/presentation/hooks/useTheme"
import { useState } from "react"
import { createStyles } from "./styles"
import { View, Text } from 'react-native'

const getWeekDay = (day: number) => {
  var weekDays = ['Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sábado',]

  return weekDays[day];
}

const getMonth = (month: number) => {
  var months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']

  return months[month];
}

const getActualDate = () => {
  const newDate = new Date();

  return {
    day: newDate.getDate(),
    month: getMonth(newDate.getMonth()),
    weekDay: getWeekDay(newDate.getDay()),
    year: newDate.getFullYear()
  }
}

const initialState = {
  userInfos: '',
  actualDate: getActualDate()
}

const initialLoadingState = {
  visible: false,
  text: ''
}

type Props = {
  requestUserInfo: Function
} & Omit<NavigationProp, 'route'>

export const HomeScreen = ({
  requestUserInfo,
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
    console.log(`teste`)
  }
  
  return (
    <View style={Styles.container}>
      <View style={Styles.headerContent}>
        <Text style={Styles.headerText}>Dia {state.actualDate.day} {state.actualDate.weekDay},</Text>
        <Text style={Styles.headerText}>{state.actualDate.month} de {state.actualDate.year}</Text>
      </View>
      <View style={Styles.content}>
        <View style={[Styles.contentBox, Styles.contentBoxBorder, Styles.greenContentBox]}>

        </View>
        <View style={[Styles.contentBox, Styles.contentBoxBorder, Styles.redContentBox]}></View>

        <View style={[Styles.contentBox, Styles.contentBoxBorderless, Styles.contentBoxBorderless]}></View>
      </View>
    </View>
  )
}
