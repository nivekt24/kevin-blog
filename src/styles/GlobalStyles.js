import { createGlobalStyle } from "styled-components"

export const colors = {
  white: "#fff",
  lightGrey: "#f5f5f5",
  deepDarkGrey: "#404040",
  blueShade1: "#215973",
  blueShade2: "#435acb",
  blueShade3: "#112240",
  blueShade4: "#0a192f",
  blueShade5: "#161927",
  blueTransparent1: "rgba(22, 25, 39, 0.85)",
  blueTransparent2: "hsl(210deg, 30%, 8%)",
  whiteTransparent: "rgb(255,255,255, 0.85)",
}

export const darkTheme = {
  colors: {
    background: colors.blueShade5,
    menuBackground: colors.blueTransparent1,
    cardBackground: colors.blueTransparent2,
    textDark: colors.lightGrey,
    textMain: colors.blueShade2,
    textSecondary: colors.white,
  },
}

export const lightTheme = {
  colors: {
    background: colors.white,
    menuBackground: colors.whiteTransparent,
    cardBackground: colors.lightGrey,
    textDark: colors.blueShade1,
    textMain: colors.blueShade2,
    textSecondary: colors.deepDarkGrey,
  },
}

export const GlobalStyles = createGlobalStyle`
  :root {
    --site-max-width: 1200px;
  }

  html {
    box-sizing: border-box;
    width: 100%;
    scroll-behavior: smooth;
  }


/* Scrollbar */
html {
    scrollbar-width: thin;
    scrollbar-color: #495670 #0a192f;
  }
  
  ::-webkit-scrollbar {
    width: 0.875rem;

  }

  ::-webkit-scrollbar-track {
    background: #0f172a;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #637777;
    border: 3px solid #0f172a;
    border-radius: 0.625rem;
  }


  body {
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.textSecondary};
    margin: 0;
    transition: all 0.5s ease;
  }



  .overflow-hidden {
    overflow: hidden;
  }

  main {
    max-width: 960px;
    margin: 40px auto;
    padding-top: 40px;
  }

  h1, h2, h3, h4, h5, h6 {
    /* font-family: "Muli Black", Arial, Helvetica, sans-serif; */
    transition: all 0.5s ease;
    letter-spacing: 1px;
  }

  p {
    color: ${props => props.theme.colors.textSecondary};
    font-size: 1rem;
    line-height: 1.2;

    @media screen and (min-width: 768px) {
      line-height: 1.5;
    }
  }

  h2 {
    font-size: 1rem;
    letter-spacing: 1.8px;

    @media screen and (min-width: 768px) {
      font-size: 1.5rem;
    }
  }

  h3 {
    font-size: 0.8rem;
    letter-spacing: 1.5px;
    margin: 30px 0 -15px 0;

    @media screen and (min-width: 768px) {
      font-size: 1.2rem;
    }
  }

  a {
    color: ${props => props.theme.colors.textSecondary};
    text-decoration: none;
  }

  .link-button > .right-arrow {
  transform: translate3d(0px, 0px, 0px);
  transition: transform 0.3s cubic-bezier(0.73, 0.26, 0.42, 1.24);
  }

  .link-button:hover > .right-arrow {
    transform: translate3d(6px, 0px, 0px);
    transition: transform 0.3s cubic-bezier(0.73, 0.26, 0.42, 1.24);
  }

  .right-arrow {
  position: absolute;
  height: 1.25rem;
  width: 1.25rem;
  margin-left: 0.5rem;
  }

  .right-arrow path {
    fill: ${props => props.theme.colors.textSecondary};
  }
`
