import React from "react"
import styled from "styled-components"

const StyledTitle = styled.div`
  font-family: "DM Mono", monospace;
  font-size: 0.875rem;
  text-transform: uppercase;
  border-radius: 0.75rem;
  letter-spacing: 0.1em;
  font-weight: 700;
  /* padding: 4px 16px; */

  @media screen and (min-width: 640px) {
    font-size: 1rem;
  }
`

export const Title = ({ children }) => {
  return <StyledTitle>{children}</StyledTitle>
}
