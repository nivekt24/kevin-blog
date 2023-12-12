import React, { useContext } from "react"
import { ThemeProvider } from "styled-components"
// Components
import Header from "../Header"
// Context
import { ModeContext } from "../context/ModeProvider"
// Styles
import { GlobalStyles, darkTheme, lightTheme } from "../../styles/GlobalStyles"

const Layout = ({ children }) => {
  const [darkMode] = useContext(ModeContext)

  return (
    <div class>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <GlobalStyles />
        <Header />
        {children}
        <footer className="text-align">
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
      </ThemeProvider>
    </div>
  )
}

export default Layout
