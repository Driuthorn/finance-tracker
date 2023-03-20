import React from "react"
import { useTheme } from "@src/presentation/hooks/useTheme"
import { ActivityIndicator, Modal, Text, View } from "react-native"
import { createStyle } from "./styles"

type Props = {
  text: string
  visible: boolean
  testID?: string
}

export const LoadingFullScreen = ({visible, text, testID}: Props) => {
  const {theme} = useTheme()
  const Styles = createStyle(theme)

  return (
    <Modal testID={testID} animationType="fade" transparent visible={visible}>
      <View style={Styles.container}>
        <Text style={Styles.text}>{text}</Text>
        <ActivityIndicator color={theme.colors.LOADING_TEXT} />
      </View>
    </Modal>
  )
}