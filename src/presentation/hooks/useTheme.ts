import { defaultTheme, Theme } from "@src/presentation/styles"
import { useMemo, useContext } from "react"
import { ThemeContext, TThemeContext } from "../contexts/theme.context"

type TUseTheme = {
  theme: Theme
} & Omit<TThemeContext, 'theme'>

export const useTheme = (): TUseTheme => {
  const {theme, setTheme} = useContext<TThemeContext>(ThemeContext)

  const currentTheme = useMemo(() => defaultTheme, [theme])

  return {theme: currentTheme, setTheme}
}