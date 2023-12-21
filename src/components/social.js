import React from "react"
// Components
import IconGitHub from "./icons/github"
import IconTwitter from "./icons/twitter"
// Styles
import styled from "styled-components"

const SocialList = styled.ul`
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
  list-style: none;

  &:after {
    content: "";
    display: block;
    width: 1px;
    height: 90px;
  }

  li {
    a {
      opacity: 0.7;
      padding: 10px;
      transition: opacity 0.5s ease;

      &:hover,
      &:focus {
        opacity: 1;
      }

      svg {
        width: 24px;
        height: 24px;
      }
    }
  }
`

const Social = () => (
  <SocialList>
    <li>
      <a
        href="https://github.com/nivekt24"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IconGitHub />
      </a>
    </li>
    <li>
      <a
        href="https://twitter.com/ktrandev"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IconTwitter />
      </a>
    </li>
  </SocialList>
)

export default Social
