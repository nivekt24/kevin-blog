import React from "react"
import { ThemeProvider } from "styled-components"
// Components
import Header from "../Header"
// Styles
import { GlobalStyles, darkTheme, lightTheme } from "../../styles/GlobalStyles"

const Layout = ({ children }) => {
  return (
    <div className="global-wrapper">
      <ThemeProvider theme={lightTheme}>
        <GlobalStyles />
        <Header />
        {children}
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
      </ThemeProvider>
    </div>
  )
}

export default Layout
