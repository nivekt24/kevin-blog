import React from "react"
import styled from "styled-components"

export const StyledIconRightArrow = styled.svg`
  position: absolute;
  height: 1.25rem;
  width: 1.25rem;
  transform: translate3d(0px, 0px, 0px);
  transition: transform 0.3s cubic-bezier(0.73, 0.26, 0.42, 1.24);
  margin-left: 0.5rem;

  path {
    fill: ${props => props.theme.colors.textSecondary};
  }

  &:hover {
    transform: translate3d(6px, 0px, 0px);
    transition: transform 0.3s cubic-bezier(0.73, 0.26, 0.42, 1.24);
  }
`

const IconRightArrow = () => (
  <StyledIconRightArrow
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512"
  >
    <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
  </StyledIconRightArrow>
)

export default IconRightArrow
