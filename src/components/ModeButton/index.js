import React from "react"
// Images
import DayIcon from "../../images/daymode.svg"
import NightIcon from "../../images/nightmode.svg"
// Styles
import styled from "styled-components"

const ImgButton = styled.img`
  display: flex;
  align-self: flex-start;
  width: 35px;
  cursor: pointer;
  transition: all 0.3s ease;

  :hover {
    transform: scale(1.1);
  }
`

const ModeButton = ({ lightMode, setLightMode }) => (
  <ImgButton
    src={lightMode ? NightIcon : DayIcon}
    alt="mode"
    onClick={() => setLightMode(prev => !prev)}
  />
)

export default ModeButton
