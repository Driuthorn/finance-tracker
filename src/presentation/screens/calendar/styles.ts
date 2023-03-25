import { Theme } from "@src/presentation/styles"
import { StyleSheet } from "react-native"

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
    underline: {
      borderTopColor: '#aaaaaa',
      borderTopWidth: StyleSheet.hairlineWidth*5,
    },
    bodyContent: {
      paddingLeft: 25,
      paddingRight: 25,
    },
    contentBox: {
      borderRadius: 25,
      marginBottom: 10,
    },
    greenBox: {
      backgroundColor: theme.colors.GREEN_BOX_BORDER_COLOR,
    },
    redBox: {
      backgroundColor: theme.colors.RED_BOX_BORDER_COLOR,
    },
    boxContentHeader: {
      fontSize: theme.fontSize.LARGE,
      fontWeight: theme.fontWeight.BOLD,
      fontStyle: 'italic',
      paddingLeft: 25,
      paddingTop: 15,
    },
    boxContentBody: {
      fontSize: theme.fontSize.LARGE,
      fontWeight: theme.fontWeight.BOLD,
      fontStyle: 'italic',
      paddingLeft: 25,
      paddingBottom: 15,
    }
  })