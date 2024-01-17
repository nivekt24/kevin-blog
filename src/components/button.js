import React from "react"
import styled from "styled-components"

const LinkButton = styled.div`
  font-family: "DM Mono", monospace;
  font-weight: 500;
  letter-spacing: 0.03em;
  text-transform: uppercase;

  &:hover {
    text-decoration: underline;
  }
`

export const Button = ({ children }) => {
  return <LinkButton>{children}</LinkButton>
}
