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
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      flexDirection: 'column',
      backgroundColor: theme.colors.BOX_BACKGROUND_COLOR,
    },
    contentBoxBorderless: {
      borderRadius: 30,
    },
    contentBoxBorder: {
      borderWidth: 5,
      borderRadius: 30,
    },
    contentBoxHeader: {
      fontSize: theme.fontSize.LARGE,
      paddingBottom: 10,
    },
    greenContentBox: {
      borderColor: theme.colors.GREEN_BOX_BORDER_COLOR,
    },
    redContentBox: {
      borderColor: theme.colors.RED_BOX_BORDER_COLOR,
    },
    greenText: {
      color: theme.colors.GREEN_BOX_BORDER_COLOR
    },
    redText: {
      color: theme.colors.RED_BOX_BORDER_COLOR
    },
    icon: {
      fontSize: theme.fontSize.LARGE,
      color: theme.colors.INPUT_ICON
    },
    inlineTextIcon: {
      flexDirection: 'row',
      justifyContent: 'space-between'
    }
  })
