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
  const [lightMode] = useContext(ModeContext)

  return (
    <div className="global-wrapper">
      <ThemeProvider theme={lightMode ? lightTheme : darkTheme}>
        <GlobalStyles />
        <Header />
        <main>
          {children}
          <Footer />
        </main>
      </ThemeProvider>
    </div>
  )
}

export default Layout
