import * as React from "react"
import { useContext } from "react"

import { ThemeProvider } from "styled-components"
// Components
import Header from "./header"
import Footer from "./footer"
// Context
import { ModeContext } from "./context/ModeProvider"
// Styles
import { GlobalStyles, darkTheme, lightTheme } from "../styles/GlobalStyles"

const BlogLayout = ({ location, title, children }) => {
  const [lightMode] = useContext(ModeContext)
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
      <ThemeProvider theme={lightMode ? lightTheme : darkTheme}>
        <GlobalStyles />
        <Header />
        <header className="global-header">{header}</header>
        <main>
          {children}
          <Footer />
        </main>
      </ThemeProvider>
    </div>
  )
}

export default BlogLayout
