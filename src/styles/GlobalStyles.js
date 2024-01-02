import { createGlobalStyle } from "styled-components"

export const colors = {
  white: "#fff",
  lightGrey: "#d1e1e9",
  deepDarkGrey: "#404040",
  blueShade1: "#215973",
  blueShade2: "#435acb",
  blueShade3: "#112240",
  blueShade4: "#0a192f",
  blueShade5: "#161927",
}

export const darkTheme = {
  colors: {
    background: colors.blueShade5,
    menuBackground: colors.blueShade4,
    textDark: colors.lightGrey,
    textMain: colors.blueShade2,
    textSecondary: colors.lightGrey,
  },
}

export const lightTheme = {
  colors: {
    background: colors.white,
    menuBackground: colors.white,
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
    width: 1.125rem;
  }


  ::-webkit-scrollbar-track {
    background: #0f172a;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #637777;
    border: 0.1875rem solid #0f172a;
    border-radius: 0.625rem;
  }


  body {
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.textSecondary};
    margin: 0;
    padding: 0 20px 80px 20px;
    transition: all 0.5s ease;
  }

  main {
    max-width: 960px;
    margin: 40px auto;
  }

  h1, h2, h3, h4, h5, h6 {
    color: ${props => props.theme.colors.textMain};
    /* font-family: "Muli Black", Arial, Helvetica, sans-serif; */
    transition: all 0.5s ease;
    letter-spacing: 1px;
  }

  p {
    color: ${props => props.theme.colors.textSecondary};
    font-size: 0.9rem;
    line-height: 1.2;

    @media screen and (min-width: 768px) {
      font-size: 1.1rem;
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
`
