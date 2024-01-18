import React from "react"
import styled from "styled-components"

const StyledLinkButton = styled.div`
  font-family: "DM Mono", monospace;
  font-weight: 500;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  padding-right: 25px;
  position: relative;

  &:hover {
    text-decoration: underline;
  }
`

export const LinkButton = ({ children }) => {
  return <StyledLinkButton>{children}</StyledLinkButton>
}
