import { Theme } from "@src/presentation/styles";
import { StyleSheet } from "react-native";

export const createStyles = (theme: Theme) => 
  StyleSheet.create({
    container: {
      flex: 1,
    },
    headerContent: {
      padding: 25,
    },
    headerText: {
      fontSize: theme.fontSize.MEDIUM,
    },
    content: {
      position: 'relative',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    contentBox: {
      padding: 20,
      marginBottom: 10,
      width: '75%',
      heigh: '500%',
      backgroundColor: theme.colors.BOX_BACKGROUND_COLOR,
    },
    contentBoxBorderless: {
      borderRadius: 30,
    },
    contentBoxBorder: {
      borderWidth: 5,
      borderRadius: 30,
    },
    greenContentBox: {
      borderColor: theme.colors.PRIMARY,
    },
    redContentBox: {
      borderColor: theme.colors.ERROR,
    },
  })