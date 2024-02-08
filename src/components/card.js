import React from "react"
import styled from "styled-components"

const CardWrapper = styled.div`
  background: ${props => props.theme.colors.cardBackground};
  padding: 32px;
  border-radius: 8px;
  transition: color 350ms ease 0s;

  & section:hover h3 {
    color: var(--color-primary);
  }

  @media (max-width: 500px) {
    padding-left: 16px;
    padding-right: 16px;
  }
`

const Card = ({ children }) => {
  return <CardWrapper>{children}</CardWrapper>
}

export default Card
