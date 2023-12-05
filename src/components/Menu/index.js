import React from "react"
import { Link } from "gatsby"
// Styles
import { Nav } from "./Menu.styles"

const Menu = ({ items }) => (
  <Nav>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/">About</Link>
    </li>
    <li>
      <Link to="/">Projects</Link>
    </li>
  </Nav>
)

export default Menu
