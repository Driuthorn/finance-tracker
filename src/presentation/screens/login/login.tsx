import { NavigationProp } from "@src/main/routes/router"
import { Button } from "@src/presentation/components/button/button"
import { GradientButton } from "@src/presentation/components/gradientButton/gradientButton"
import { Input } from "@src/presentation/components/input"
import { useTheme } from "@src/presentation/hooks/useTheme"
import React from "react"
import { useEffect, useState } from "react"
import { View } from "react-native"
import { createStyles } from "./styles"

const initialState = {
  username: '',
  password: ''
}

const initialLoadingState = {
  visible: false,
  text: ''
}

type Props = {
  requestAuthorization: Function
  useIsFocused: Function
} & Omit<NavigationProp, 'route'>

export const LoginScreen = ({
  requestAuthorization,
  useIsFocused,
  navigation
}: Props) => {
  const isFocused = useIsFocused()
  const {theme} = useTheme()
  const Styles = createStyles(theme)

  const [loading, setLoading] = useState({...initialLoadingState})
  const [state, setState] = useState<typeof initialState>(initialState)

  const onChangeInputValue = (text: string, field: string) => {
    setState(prev => ({...prev, [field]: text}))
  }

  const proceed = async () => {
    if (state.password && state.username) {
      navigation.navigate('home')
    }
  }

  return (
    <View style={Styles.container}>
      <View style={Styles.content}>
        <Input
          label={'Username:'}
          name={'input-username'}
          testID={'input-username'}
          value={state.username}
          keyboardType={'default'}
          onChangeText={_ => onChangeInputValue(_, 'username')}
          autoCapitalize="characters"
        />
        <Input
          label={'Password:'}
          name={'input-password'}
          testID={'input-password'}
          value={state.password}
          keyboardType={'default'}
          password={true}
          onChangeText={_ => onChangeInputValue(_, 'password')}
          autoCapitalize="none"
        />
        <GradientButton
          testID="button-submit"  
          onPress={proceed}
        >
          Submit
        </GradientButton>
        {/* <Button
          testID="button-submit"
          color={theme.colors.GR_PRIMARY}
          onPress={proceed}
        >
          Submit
        </Button> */}
      </View>
    </View>
  )
}