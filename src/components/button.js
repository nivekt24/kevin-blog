import React from "react"
import styled from "styled-components"

const StyledLinkButton = styled.div`
  font-family: "DM Mono", monospace;
  font-size: 0.7rem;
  font-weight: 500;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  padding-right: 25px;
  position: relative;

  &:hover {
    text-decoration: underline;
  }

  @media screen and (min-width: 640px) {
    font-size: 0.875rem;
  }
`

export const LinkButton = ({ children }) => {
  return <StyledLinkButton>{children}</StyledLinkButton>
}
