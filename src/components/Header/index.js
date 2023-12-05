import React, { useState, useContext } from "react"

// Components
import Menu from "../Menu"
import ModeButton from "../ModeButton"

// Context
import { ModeContext } from "../context/ModeProvider"
// Styles
import { Wrapper, Logo } from "./Header.styles"

const Header = () => {
  const [darkMode, setDarkMode] = useContext(ModeContext)

  return (
    <Wrapper>
      <Menu />
      <ModeButton darkMode={darkMode} setDarkMode={setDarkMode} />
    </Wrapper>
  )
}

export default Header
