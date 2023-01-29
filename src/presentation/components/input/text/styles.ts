import { StyleSheet } from "react-native";
import { Theme } from "@src/presentation/styles";

export const createStyle = (theme: Theme) =>
  StyleSheet.create({
    inputContainer: {
      position: 'relative',
      borderColor: theme.colors.PRIMARY,
    },
    inputContainerFocused: {
      borderBottomColor: theme.colors.INPUT_BORDER_BOTTOM
    },
    innerFocused: {
      ...StyleSheet.absoluteFillObject,
      opacity: 0.3
    },
    label: {
      fontSize: theme.fontSize.MEDIUM,
      paddingBottom: 5,
      color: theme.colors.GR_PRIMARY
    },
    labelError: {
      color: theme.colors.ERROR,
      fontWeight: 'bold'
    },
    containerPasswordIcon: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-end',
      position: 'absolute',
      right: 0
    },
    containerIcon: {
      ...StyleSheet.absoluteFillObject,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-end',
      position: 'absolute',
      right: 0
    },
    icon: {
      fontSize: theme.fontSize.EXTRA_LARGE,
      color: theme.colors.INPUT_ICON
    },
    input: {
      padding: 0,
      fontSize: theme.fontSize.MEDIUM,
      minHeight: 24,
      color: theme.colors.PRIMARY,
      flex: 1,
      borderWidth: 2,
      borderColor: theme.colors.PRIMARY,
      borderRadius: 15
    },
    rowInput: {
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  })
