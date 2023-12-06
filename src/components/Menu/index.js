import React from "react"
import { Link } from "gatsby"
// Styles
import { Nav } from "./Menu.styles"

const Menu = () => {
  return (
    <Nav>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/About">About</Link>
      </li>
      <li>
        <Link to="/Projects">Projects</Link>
      </li>
    </Nav>
  )
}
export default Menu
