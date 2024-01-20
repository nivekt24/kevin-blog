import React from "react"
import styled from "styled-components"

const StyledTitle = styled.div`
  font-family: "DM Mono", monospace;
  text-transform: uppercase;
  border-radius: 0.75rem;
  letter-spacing: 0.1em;
  font-weight: 700;
  /* padding: 4px 16px; */
`

export const Title = ({ children }) => {
  return <StyledTitle>{children}</StyledTitle>
}
