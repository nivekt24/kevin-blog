import React, { useState } from "react"
import { Link } from "gatsby"
// Components

import Menu from "../Menu"
// Hooks
import { useSiteConfigQuery } from "../hooks/useSiteConfigQuery"
// Styles
import { Wrapper, Logo } from "./Header.styles"

const Header = () => {
  const siteConfig = useSiteConfigQuery()

  return (
    <Wrapper>
      <Menu items={siteConfig.menu} />
      <Link to="/"></Link>
      <div>Theme Button</div>
    </Wrapper>
  )
}

export default Header
