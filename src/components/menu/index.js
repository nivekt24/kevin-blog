import React, { useState, useEffect, useContext, useRef } from "react"
import { Link } from "gatsby"
import { ModeContext } from "../context/ModeProvider"
import useOnClickOutside from "../hooks/useOnClickOutside"
import ModeButton from "../ModeButton"

// Styles
import styled from "styled-components"

const StyledMenu = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`

const StyledHamburgerButton = styled.button`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 10;
    margin-right: -15px;
    padding: 15px;
    border: 0;
    background-color: transparent;
    color: inherit;
    text-transform: none;
    transition-timing-function: linear;
    transition-duration: 0.15s;
    transition-property: opacity, filter;
  }

  .ham-box {
    display: inline-block;
    position: relative;
    width: 30px;
    height: 24px;
  }

  .ham-box-inner {
    position: absolute;
    top: 50%;
    right: 0;
    width: 30px;
    height: 2px;
    border-radius: 4px;
    background-color: #64ffda;
    transition-duration: 0.22s;
    transition-property: transform;
    transition-delay: ${props => (props.menuOpen ? `0.12s` : `0s`)};
    transform: rotate(${props => (props.menuOpen ? `225deg` : `0deg`)});
    transition-timing-function: cubic-bezier(
      ${props =>
        props.menuOpen ? `0.215, 0.61, 0.355, 1` : `0.55, 0.055, 0.675, 0.19`}
    );
    &:before,
    &:after {
      content: "";
      display: block;
      position: absolute;
      left: auto;
      right: 0;
      width: 30px;
      height: 2px;
      border-radius: 4px;
      background-color: #64ffda;
      transition-timing-function: ease;
      transition-duration: 0.15s;
      transition-property: transform;
    }
    &:before {
      width: ${props => (props.menuOpen ? `100%` : `120%`)};
      top: ${props => (props.menuOpen ? `0` : `-10px`)};
      opacity: ${props => (props.menuOpen ? 0 : 1)};
      transition: ${({ menuOpen }) =>
        menuOpen
          ? "top 0.1s ease-out, opacity 0.1s ease-out 0.12s;"
          : "top 0.1s ease-in 0.25s, opacity 0.1s ease-in"};
    }
    &:after {
      width: ${props => (props.menuOpen ? `100%` : `80%`)};
      bottom: ${props => (props.menuOpen ? `0` : `-10px`)};
      transform: rotate(${props => (props.menuOpen ? `-90deg` : `0`)});
    }
  }
`

const StyledSidebar = styled.aside`
  display: none;

  @media (max-width: 768px) {
    background: ${props => props.theme.colors.menuBackground};
    color: ${props => props.theme.colors.textSecondary};
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    padding: 50px 10px;
    width: min(75vw, 400px);
    height: 100vh;
    outline: 0;
    box-shadow: -10px 0px 30px -15px rgba(2, 12, 27, 0.7);
    z-index: 9;
    transform: translateX(${props => (props.menuOpen ? 0 : 100)}vw);
    visibility: ${props => (props.menuOpen ? "visible" : "hidden")};
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  }

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 3.25rem;
    width: 100%;
    flex-direction: column;
    color: #ccd6f6;
    text-align: center;
    list-style: none;
  }

  ol {
    padding: 0;
    margin: 0;
    width: 100%;

    li {
      position: relative;
      margin: 0 auto 20px;
      font-size: clamp(0.875rem, 4vw, 1.125rem);

      @media (max-width: 600px) {
        margin: 0 auto 10px;
      }

      &:before {
        content: "";
        display: block;
        margin-bottom: 5px;
        color: green;
        font-size: 0.875rem;
      }
    }

    a {
      width: 100%;
      padding: 3px 20px 20px;
    }
  }
`

const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen(!menuOpen)

  const [darkMode, setDarkMode] = useContext(ModeContext)

  const onResize = e => {
    if (e.currentTarget.innerWidth > 768) {
      setMenuOpen(false)
    }
  }

  useEffect(() => {
    window.addEventListener("resize", onResize)

    return () => {
      window.removeEventListener("resize", onResize)
    }
  }, [])

  const wrapperRef = useRef()
  useOnClickOutside(wrapperRef, () => setMenuOpen(false))

  return (
    <StyledMenu>
      <div ref={wrapperRef}>
        <StyledHamburgerButton
          onClick={toggleMenu}
          menuOpen={menuOpen}
          aria-label="Menu"
        >
          <div className="ham-box">
            <div className="ham-box-inner" />
          </div>
        </StyledHamburgerButton>

        <StyledSidebar
          menuOpen={menuOpen}
          aria-hidden={!menuOpen}
          tabIndex={menuOpen ? 1 : -1}
        >
          <nav>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <ModeButton darkMode={darkMode} setDarkMode={setDarkMode} />
            </li>
          </nav>
        </StyledSidebar>
      </div>
    </StyledMenu>
  )
}

export default Menu
