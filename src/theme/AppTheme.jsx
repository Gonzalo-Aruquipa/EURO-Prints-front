import { ThemeProvider } from "@emotion/react"
import { CssBaseline } from "@mui/material"
import { purpleTheme } from "./"

//componente que dentro tiene otros componentes
export const AppTheme = ({children}) => {
  return (
    <ThemeProvider theme={purpleTheme}>
      <CssBaseline/>
      {children}
    </ThemeProvider>
  )
}
