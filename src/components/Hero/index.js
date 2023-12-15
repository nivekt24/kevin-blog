import React from "react"
// components
import Social from "../social"
// styles
import { HeroSection } from "./Hero.styles"

const Hero = () => {
  return (
    <HeroSection>
      <h1>Kevin Tran</h1>
      <p>
        <strong>Front-end developer </strong>from Orange County.
        <br></br>
        I’m passionate about building interactive and innovative experience for
        the web and across all platforms.
      </p>
      <Social />
    </HeroSection>
  )
}

export default Hero