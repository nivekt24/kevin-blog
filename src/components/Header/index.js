import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
// Components
import Nav from "../nav"
// Styles
import styled from "styled-components"

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100px;
  z-index: 10;
  padding: 0 24px;
  background: ${props => props.theme.colors.menuBackground};
  color: ${props => props.theme.colors.textSecondary};
  -webkit-backdrop-filter: blur(8px);
  backdrop-filter: blur(8px);

  @media screen and (min-width: 768px) {
    padding: 0 50px;
  }
`

const Header = () => {
  return (
    <Wrapper>
      <Link to="/">
        <StaticImage
          layout="fixed"
          formats={["auto", "webp", "avif"]}
          src="../../images/logo_main.png"
          width={40}
          height={40}
          quality={95}
          alt="Profile picture"
        />
      </Link>
      <Nav />
    </Wrapper>
  )
}

export default Header

/*

const NavWrapper = styled.div`
  display: flex;
  z-index: 1100;
  backdrop-filter: blur(8px);
  background: rgba(22, 25, 39, 0.85);
  position: fixed;
`

*/
