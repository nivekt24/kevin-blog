import React, { useContext } from "react"
import { Link } from "gatsby"
// Components
import ModeButton from "../ModeButton"

// Context
import { ModeContext } from "../context/ModeProvider"
// Styles
import { NavList } from "./Nav.styles"

const Nav = () => {
  const [darkMode, setDarkMode] = useContext(ModeContext)

  return (
    <NavList>
      {/* <li>
        <Link to="/">Home</Link>
      </li> */}
      <li>
        <Link to="/about">01. About</Link>
      </li>
      <li>
        <Link to="/projects">02. Projects</Link>
      </li>
      <li>
        {" "}
        <ModeButton darkMode={darkMode} setDarkMode={setDarkMode} />
      </li>
    </NavList>
  )
}
export default Nav
