import React,  { PropsWithChildren } from "react"
import { Text, TouchableOpacity } from "react-native"
import { useTheme } from "@src/presentation/hooks/useTheme"
import { createStyles } from "./styles"

type Props = {
  color?: string
  textColor?: string
  onPress: () => void
  disabled?: boolean
  testID?: string
}

export const Button = ({
  children,
  onPress,
  color,
  textColor,
  disabled,
  testID
}: PropsWithChildren & Props) => {
  const {theme} = useTheme()
  const Styles = createStyles(theme)

  const backgroundColor = disabled
    ? theme.colors.GR_PRIMARY
    : color

  const buttonStyle = color
    ? [Styles.container, {backgroundColor}]
    : Styles.container

  const textStyles = textColor ? [Styles.text, {color: textColor}] : Styles.text

  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={buttonStyle}
      activeOpacity={0.5}
      testID={testID}>
      <Text style={textStyles}>{children}</Text>
    </TouchableOpacity>
  )
}
