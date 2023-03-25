import React from 'react'
import { NavigationProp } from "@src/main/routes/router"
import { useTheme } from "@src/presentation/hooks/useTheme"
import { useState } from "react"
import { createStyles } from "./styles"
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
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
          <View>
            <Text style={[Styles.contentBoxHeader, Styles.greenText]}>Créditos:</Text>
          </View>
          <View style={Styles.inlineTextIcon}>
            <MaterialIcons name="fiber-manual-record" style={Styles.icon} />
            <Text>Pagamento</Text>
          </View>
          <View style={Styles.inlineTextIcon}>
            <MaterialIcons name="fiber-manual-record" style={Styles.icon} />
            <Text>Dividendos</Text>
          </View>
        </View>
        <View style={[Styles.contentBox, Styles.contentBoxBorder, Styles.redContentBox]}>
          <View>
            <Text style={[Styles.contentBoxHeader, Styles.redText]}>Débitos:</Text>
          </View>
          <View style={Styles.inlineTextIcon}>
            <MaterialIcons name="fiber-manual-record" style={Styles.icon} />
            <Text>luz</Text>
          </View>
          <View style={Styles.inlineTextIcon}>
            <MaterialIcons name="fiber-manual-record" style={Styles.icon} />
            <Text>Carro</Text>
          </View>
        </View>
        <View style={[Styles.contentBox, Styles.contentBoxBorderless, Styles.contentBoxBorderless]}>
          <View>
            <Text style={[Styles.contentBoxHeader]}>Prestação de contas:</Text>
          </View>
          <View style={Styles.inlineTextIcon}>
            <Text>Sem comprovantes:</Text>
            <Text style={Styles.redText}> 3 </Text> 
          </View>
          <View style={Styles.inlineTextIcon}>
            <Text>Em atraso:</Text> 
            <Text style={Styles.redText}> 2 </Text>
          </View>
          <View style={Styles.inlineTextIcon}>
            <Text>A receber:</Text> 
            <Text style={Styles.greenText}> 2 </Text>
          </View>
        </View>
      </View>
    </View>
  )
}
