import React, { useContext } from "react"
import { Link } from "gatsby"
// Components
import ModeButton from "../ModeButton"

// Context
import { ModeContext } from "../context/ModeProvider"
// Styles
import { Nav } from "./Menu.styles"

const Menu = () => {
  const [darkMode, setDarkMode] = useContext(ModeContext)

  return (
    <Nav>
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
    </Nav>
  )
}
export default Menu
