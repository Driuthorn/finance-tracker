type FontWeight =
  | 'normal'
  | 'bold'
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900'
  | undefined

export type Themes = 'default'

export interface Theme {
  name: Themes
  fontSize: {
    SMALL: number
    MEDIUM: number
    LARGE: number
    EXTRA_LARGE: number
  }
  fontWeight: {
    LIGHT: FontWeight
    MEDIUM: FontWeight
    BOLD: FontWeight
  }
  colors: {
    GRAY_DARKER: string
    GRAY_DARK: string
    GRAY_LIGHTER: string
    GRAY_LIGHT: string

    GR_PRIMARY: string
    GR_LIGHTER: string

    PRIMARY: string
    SECONDARY: string

    ERROR: string
    SUCCESS: string
    WARN: string

    TEXT_PRIMARY: string
    TEXT_SECONDARY: string

    BACKGROUND_COLOR: string

    BOX_BACKGROUND_COLOR: string

    GREEN_BOX_BORDER_COLOR: string
    RED_BOX_BORDER_COLOR: string

    INPUT_ICON: string
    INPUT_BORDER_BOTTOM: string
    MENU_ICON: string
    WHITE: string
    RED: string
    PURPLE: string

    LOADING_BACKGROUND_PRIMARY: string
    LOADING_BACKGROUND_SECONDARY: string
    LOADING_TEXT: string
  }
  screen: {
    padding: number | string
    width: number
    height: number
  }
}
