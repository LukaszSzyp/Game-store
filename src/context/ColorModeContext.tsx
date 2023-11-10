import React from "react"
import { theme } from "../theme"
import { ThemeProvider } from "@mui/material"

interface IColorModeContext {
  toggleColorMode: () => void
  mode: "dark" | "light"
}

export const ColorModeContext = React.createContext<IColorModeContext>({
  toggleColorMode: () => {},
  mode: "dark",
})

export const ColorModeContextProvider = ({ children }: any) => {
  const [mode, setMode] = React.useState<"light" | "dark">("dark")
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "dark" ? "light" : "dark"))
      },
      mode,
    }),
    [mode]
  )

  const themeWithColorMode = React.useMemo(() => {
    const themeStyles = theme
    themeStyles.palette.mode = mode
    return themeStyles
  }, [mode])
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={themeWithColorMode}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export const useColorMode = () => React.useContext(ColorModeContext)
