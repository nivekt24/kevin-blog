import React from "react"
import styled from "styled-components"

const CardWrapper = styled.div`
  background: hsl(210deg, 30%, 8%);
  padding: 32px;
  border-radius: 8px;
  transition: background 350ms ease 0s;
`

function Card({ children }) {
  return <CardWrapper>{children}</CardWrapper>
}

export default Card
