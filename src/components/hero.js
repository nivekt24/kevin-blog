import React from "react"
// components
import Social from "./social"
// styles
import styled from "styled-components"

const HeroSection = styled.div`
  max-width: 40rem;
  padding: 96px 0;

  h1 {
    color: ${props => props.theme.colors.textMain};
    font-family: "DM Mono", monospace;
    font-size: 3em;
  }

  p {
    font-size: 1rem;
    font-weight: 400;
    margin-bottom: 20px;
  }
`

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
