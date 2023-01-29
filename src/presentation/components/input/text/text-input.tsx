import { useTheme } from "@src/presentation/hooks/useTheme";
import React, { forwardRef, memo, useCallback, useMemo, useState } from "react";
import { createStyle } from "./styles";

import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { 
  Platform,
  View, 
  Text, 
  TextInput,
  TextInputProps,
  TextInputFocusEventData,
  NativeSyntheticEvent,
  ViewStyle,
  TouchableOpacity
} from "react-native";

export const keyboardTypes = {
  Default: 'default',
  Number: Platform.OS === 'android' ? 'numeric' : 'number-pad',
  Decimal: 'numeric',
  Phone: 'phone-pad',
  Email: 'email-address'
}

export const AutoCapitalize = {
  Characters: 'characters',
  Words: 'words',
  Sentences: 'sentences',
  None: 'none'
}

interface InputProps extends TextInputProps {
  label: string
  name: string
  error?: string
  showErrorMessage?: boolean
  containerStyle?: ViewStyle
  inputStyle?: ViewStyle
  touchable?: boolean
  password?: boolean
  disabled?: boolean
  onTouch?: () => any
}

export const Input = memo(
  forwardRef<TextInput, InputProps>((props, ref) => {
    const {theme} = useTheme()
    const Styles = createStyle(theme)
    const [state, setState] = useState({
      focused: false,
      touched: false,
      secureTextEntry: !!props.password
    })

    const onFocus = useCallback(
      (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
        setState(prev => ({...prev, focused: true}))
        if (props.onFocus) {
          props.onFocus(e)
        }
      },
      [props.onFocus]
    )

    const onBlur = useCallback(
      (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
        setState(prev => ({
          ...prev,
          touched: true,
          focused: false
        }))

        if (props.onBlur) {
          props.onBlur(e)
        }
      },
      [props.onBlur]
    )

    const passwordIcon = useMemo(() => {
      if (!props.password) return null
      return (
        <TouchableOpacity
          activeOpacity={1}
          style={Styles.containerPasswordIcon}
          onPress={() => 
            setState(prev => ({
              ...prev,
              secureTextEntry: !prev.secureTextEntry
            }))
          }>
          {state.secureTextEntry ? (
            <MaterialIcon name="eye" style={Styles.icon} />
          ): (
            <MaterialIcon name="eye-off" style={Styles.icon} />
          )}
        </TouchableOpacity>
      )
    }, [props.password, state.secureTextEntry])

  const touchableIcon = useMemo(() => {
    if (!props.touchable || !props.onTouch) return null
    return (
      <TouchableOpacity
        activeOpacity={1}
        style={Styles.containerIcon}
        onPress={props.onTouch}>
        <FontAwesome name="caret-down" style={Styles.icon} />
      </TouchableOpacity>
    )
  },[])

  const errorMessage =
    !state.focused && state.touched && props.showErrorMessage && props.error
    ? `- ${props.error}`
    : ''

    const labelStyle = 
      props.error && state.touched && !state.focused
        ? [Styles.label, Styles.labelError]
        : [Styles.label]
    
    const containerStyle = state.focused
      ? [Styles.inputContainer, Styles.inputContainerFocused]
      : [Styles.inputContainer]

    const innerStyle = state.focused ? Styles.innerFocused : {}

    return (
      <View style={[containerStyle, props.containerStyle]}>
        <View style={innerStyle} />
        <Text style={labelStyle} testID={`${props.name}-label`}>
          {props.label} {errorMessage}
        </Text>
        <View style={Styles.rowInput}>
          <TextInput 
            testID={`${props.name}`}
            ref={ref}
            autoCapitalize="none"
            autoCorrect={false}
            style={[Styles.input, props.inputStyle, props.disabled && {opacity: 0.5}]}
            {...props}
            onFocus={onFocus}
            onBlur={onBlur}
            secureTextEntry={state.secureTextEntry}
          />
          {passwordIcon}
          {touchableIcon}
        </View>
      </View>
    )
  })
)
