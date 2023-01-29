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

  return (
    <View style={Styles.container}>
      <Text>CalendarScreen</Text>
    </View>
  )
}