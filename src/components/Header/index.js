import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
// Components
import Menu from "../Menu"
// Styles
import { Wrapper } from "./Header.styles"

const Header = () => {
  return (
    <Wrapper>
      <Link to="/">
        <StaticImage
          className="bio-avatar"
          layout="fixed"
          formats={["auto", "webp", "avif"]}
          src="../../images/logo_main.png"
          width={50}
          height={50}
          quality={95}
          alt="Profile picture"
        />
      </Link>
      <Menu />
    </Wrapper>
  )
}

export default Header
