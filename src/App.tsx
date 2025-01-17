import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";
import theme from "./styles/Theme";

function App() {

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div>
        STAR
      </div>
    </ThemeProvider>
  )
}

export default App
