import React, { useContext } from "react"
import { Link } from "gatsby"
// Components
import ModeButton from "../ModeButton"
import Menu from "../menu"

// Context
import { ModeContext } from "../context/ModeProvider"
// Styles
import styled from "styled-components"

const NavList = styled.ul`
  /* display: none; */
  display: flex;
  align-items: center;
  list-style-type: none;
  padding: 0;
  margin: 0;
  font-family: "DM Mono", monospace;
  /* font-family: "Muli Regular", Arial, Helvetica, sans-serif; */
  font-size: 1rem;

  h1 {
    color: ${props => props.theme.colors.textDark};
  }

  a {
    text-decoration: none;
    color: ${props => props.theme.colors.textDark};
  }

  li {
    display: inline-block;
    margin-right: 20px;
    transition: opacity 0.5s ease;
    cursor: pointer;

    .active {
      font-weight: 800;
    }

    :last-child {
      margin-right: 0;
    }

    :hover {
      opacity: 0.7;
    }

    @media screen and (max-width: 768px) {
      display: none;
    }
  }
`

const Nav = () => {
  const [darkMode, setDarkMode] = useContext(ModeContext)

  return (
    <>
      <NavList>
        {/* <li>
        <Link to="/">Home</Link>
      </li> */}
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <ModeButton darkMode={darkMode} setDarkMode={setDarkMode} />
        </li>
      </NavList>
      <Menu />
    </>
  )
}
export default Nav
