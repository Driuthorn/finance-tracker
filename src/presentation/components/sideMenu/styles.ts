import { Theme } from "@src/presentation/styles";
import { StyleSheet } from "react-native";

export const createStyle = (theme: Theme) => 
  StyleSheet.create({
    container: {
      height: theme.screen.height * 0.07,
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      backgroundColor: theme.colors.SECONDARY,
      paddingHorizontal: theme.screen.padding,
      paddingVertical: theme.screen.width * 0.03,
    },
    header: {
      alignItems: 'flex-start',
      alignContent: 'space-between',
      justifyContent: 'space-between',
    },
    containerIcon: {
      alignItems: 'center',
      justifyContent: 'flex-end',
    },
    icon: {
      borderRadius: 10,
      fontSize: theme.fontSize.EXTRA_LARGE,
      color: theme.colors.MENU_ICON
    },
    logoutIcon: {
      borderRadius: 10,
      fontSize: theme.fontSize.EXTRA_LARGE,
      color: theme.colors.INPUT_ICON
    }
  })