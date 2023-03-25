import { Dimensions, PixelRatio } from "react-native";
import { Theme } from "./theme";

export const defaultTheme = {
  name: 'default',
  fontSize:{
    SMALL: PixelRatio.getFontScale() * 14,
    MEDIUM: PixelRatio.getFontScale() * 17,
    LARGE: PixelRatio.getFontScale() * 22,
    EXTRA_LARGE: PixelRatio.getFontScale() * 28
  },
  fontWeight: {
    LIGHT: '200',
    MEDIUM: '300',
    BOLD: '800'
  },
  colors: {
    GRAY_DARKER: '#606060',
    GRAY_DARK: '#808080',
    GRAY_LIGHTER: '#EBEBEB',
    GRAY_LIGHT: '#C0C0C0',

    GR_PRIMARY: '#C2FF89',
    GR_LIGHTER: '#6CADDF',

    PRIMARY: '#57b400',
    SECONDARY: '#595959',

    TEXT_PRIMARY: '#FFFFFF',
    TEXT_SECONDARY: '#111111',

    INPUT_ICON: '#C0C0C0',
    INPUT_BORDER_BOTTOM: '#8BFF1E',

    MENU_ICON: '#57B400',

    ERROR: '#FF0000',
    SUCCESS: '#54B948',
    WARN: '#FFCF01',

    WHITE: '#FFFFFF',
    RED: '#6f1717',
    PURPLE: '#8302E9',

    BACKGROUND_COLOR: '#1A1A1A',

    BOX_BACKGROUND_COLOR: '#595959',

    GREEN_BOX_BORDER_COLOR: '#57B400',
    RED_BOX_BORDER_COLOR: '#6F1717',

    LOADING_BACKGROUND_PRIMARY: '#000000B3',
    LOADING_BACKGROUND_SECONDARY: '#041E42',
    LOADING_TEXT: '#fff',
  },
  screen: {
    padding: '5%',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width
  }
} as Theme
