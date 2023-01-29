import { Theme } from "@src/presentation/styles";
import { StyleSheet } from "react-native";

export const createStyles = (theme: Theme) => 
  StyleSheet.create({
    container: {
      width: '100%',
      backgroundColor: theme.colors.GR_PRIMARY,
      padding: 15,
      justifyContent: 'space-between',
      borderRadius: 5,
      alignItems: 'center'
    },
    text: {
      fontSize: theme.fontSize.MEDIUM,
      color: theme.colors.TEXT_PRIMARY
    }
  })
  