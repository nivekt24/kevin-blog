import React from "react"
// components
import Social from "../social"
// styles
import styled from "styled-components"

const HeroSection = styled.div`
  padding: 6rem 0;

  h1 {
    font-family: "DM Mono", monospace;
    font-size: 3em;
  }

  p {
    /* text-align: center; */
    font-size: 1rem;
    font-weight: 400;
    margin-bottom: 20px;
    max-width: 40rem;
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
