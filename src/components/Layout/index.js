import React, { useContext } from "react"
import { ThemeProvider } from "styled-components"
// Components
import Header from "../header"
import Footer from "../footer"
// Context
import { ModeContext } from "../context/ModeProvider"
// Styles
import { GlobalStyles, darkTheme, lightTheme } from "../../styles/GlobalStyles"

const Layout = ({ children }) => {
  const [darkMode] = useContext(ModeContext)

  return (
    <div className="global-wrapper">
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <GlobalStyles />
        <Header />
        <div id="content">
          {children}
          <Footer />
        </div>
      </ThemeProvider>
    </div>
  )
}

export default Layout
