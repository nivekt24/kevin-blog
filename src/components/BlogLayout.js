import * as React from "react"
import { useContext } from "react"

import { ThemeProvider } from "styled-components"
// Components
import Header from "./header"
// Context
import { ModeContext } from "./context/ModeProvider"
// Styles
import { GlobalStyles, darkTheme, lightTheme } from "../styles/GlobalStyles"

const BlogLayout = ({ location, title, children }) => {
  const [darkMode] = useContext(ModeContext)
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  // if (isRootPath) {
  //   header = (
  //     <h1 className="main-heading">
  //       <Link to="/">{title}</Link>
  //     </h1>
  //   )
  // } else {
  //   header = (
  //     <Link className="header-link-home" to="/">
  //       {title}
  //     </Link>
  //   )
  // }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <GlobalStyles />
        <Header />
        <header className="global-header">{header}</header>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
      </ThemeProvider>
    </div>
  )
}

export default BlogLayout
