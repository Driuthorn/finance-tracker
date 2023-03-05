import { Theme } from "@src/presentation/styles";
import { StyleSheet } from "react-native";

export const createStyles = (theme: Theme) => 
  StyleSheet.create({
    container: {
      width: '50%',
      padding: 15,
      justifyContent: 'space-between',
      borderRadius: 25,
      alignItems: 'center',
      paddingHorizontal: 16,
      paddingVertical: 18,
      alignSelf: 'center'
    },
    text: {
      fontSize: theme.fontSize.MEDIUM,
      color: theme.colors.TEXT_SECONDARY
    }
  })
  