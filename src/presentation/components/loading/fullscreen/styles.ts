import { Theme } from "@src/presentation/styles";
import { StyleSheet } from "react-native";

export const createStyle = (theme: Theme) => 
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.LOADING_BACKGROUND_PRIMARY,
      justifyContent: 'center',
      alignItems: 'center'
    },
    text: {
      textAlign: 'center',
      color: theme.colors.LOADING_TEXT,
      fontSize: theme.fontSize.EXTRA_LARGE,
      marginBottom: '5%'
    }
  })