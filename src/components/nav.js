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
    padding: 10px;
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
