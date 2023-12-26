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
  max-width: 960px;
  height: 70px;
  margin: 20px auto;

  @media screen and (min-width: 768px) {
    height: 120px;
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
          width={50}
          height={50}
          quality={95}
          alt="Profile picture"
        />
      </Link>
      <Nav />
    </Wrapper>
  )
}

export default Header
