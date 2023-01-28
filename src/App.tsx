import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/globa";
import { defaultTheme } from "./styles/themes/default";
import { Router } from "./Router";
import { HashRouter } from "react-router-dom";



export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <HashRouter>
        <Router />
      </HashRouter>

      <GlobalStyle />
    </ThemeProvider>
  )
}