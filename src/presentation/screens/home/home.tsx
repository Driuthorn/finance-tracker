import React from 'react'
import { NavigationProp } from "@src/main/routes/router"
import { useTheme } from "@src/presentation/hooks/useTheme"
import { useState } from "react"
import { createStyles } from "./styles"
import { View, Text } from 'react-native'

const initialState = {
  userInfos: ''
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
      <Text>TESTE</Text>
    </View>
  )
}
