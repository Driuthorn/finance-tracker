import { Themes } from "@src/presentation/styles"
import React, { createContext, ReactNode, useState } from "react"

export type TThemeContext = {
  theme: string
  setTheme: (theme: Themes) => void
}

export const ThemeContext = createContext<TThemeContext>({
  theme: 'default',
  setTheme: () => {}
})

export const ThemeProvider = ({children}: {children: ReactNode}) => {
  const [theme, setTheme] = useState<Themes>('default')

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme: (theme: Themes) => {
          setTheme(theme)
        }
      }}>
        {children}
    </ThemeContext.Provider>
  )
}
