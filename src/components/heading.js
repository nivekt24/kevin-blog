import React from "react"
import styled from "styled-components"

const StyledHeading = styled.ul`
  display: flex;
  justify-content: space-between;
`

export const Heading = ({ children }) => {
  return <StyledHeading>{children}</StyledHeading>
}
