import React, { useContext } from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
// Components
import ModeButton from "./modebutton"
import Menu from "./menu"

// Context
import { ModeContext } from "./context/ModeProvider"
// Styles
import styled from "styled-components"

const NavList = styled.ul`
  display: flex;
  align-items: center;
  list-style-type: none;
  padding: 0;
  margin: 0;
  font-family: "DM Mono", monospace;
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
    margin: 10px;
    border-radius: 10px;
    transition: opacity 0.5s ease;
    cursor: pointer;

    &:not(:last-child) {
      padding: 8px 12px;
      border: 1px solid ${props => props.theme.colors.textDark};
    }

    .active {
      font-weight: 800;
    }

    &:last-child {
      opacity: 0.7;
      margin-right: 0;
    }

    &:last-child:hover {
      opacity: 1;
    }

    @media screen and (max-width: 768px) {
      display: none;
    }
  }
`

const Nav = () => {
  const [lightMode, setLightMode] = useContext(ModeContext)

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          menuLinks {
            name
            link
          }
        }
      }
    }
  `)
  const menuLinks = data.site.siteMetadata.menuLinks

  return (
    <>
      <NavList>
        {menuLinks.map(link => (
          <li key={link.name}>
            <Link to={link.link}>{link.name}</Link>
          </li>
        ))}
        <li>
          <ModeButton lightMode={lightMode} setLightMode={setLightMode} />
        </li>
      </NavList>
      <Menu menuLinks={menuLinks} />
    </>
  )
}
export default Nav
