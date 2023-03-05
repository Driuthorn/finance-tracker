import React, { PropsWithChildren } from "react"
import { useTheme } from "@src/presentation/hooks/useTheme"
import { Text, TouchableOpacity } from "react-native"
import LinearGradient from "react-native-linear-gradient"
import { createStyles } from "./styles"

type Props= {
  gradient?: string[]
  gradientLocation?: number[]
  textColor?: string
  onPress: () => void
  disabled?: boolean
  testID?: string
}

export const GradientButton = ({
  children,
  onPress,
  gradient,
  gradientLocation,
  textColor,
  disabled,
  testID
}: PropsWithChildren & Props) => {
  const {theme} = useTheme()
  const Styles = createStyles(theme)

  const validGradientInputs = gradient && gradientLocation && gradient.length === gradientLocation.length
  
  const gradientColors = gradient && validGradientInputs
    ? gradient
    : ['#b7f97980', '#57b40080', '#57b40036', '#57b40035', '#57b40035', '#c2ff8900']


  const gradientPercentage = gradientLocation && validGradientInputs
    ? gradientLocation
    : [0.0, 0.2, 0.45, 0.6, 0.8,1]
  
  const textStyles = textColor ? [Styles.text, {color: textColor}] : Styles.text
 
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      testID={testID}
    >
      <LinearGradient
        colors={gradientColors}
        locations={gradientPercentage}  
        style={Styles.container}
      >
        <Text style={textStyles}>
          {children}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  )
}
