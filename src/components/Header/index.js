import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
// Components
import Nav from "../nav"
// Styles
import { Wrapper } from "./Header.styles"

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
