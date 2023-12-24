import styled from "styled-components"

export const NavList = styled.ul`
  /* display: none; */
  display: flex;
  align-items: center;
  list-style-type: none;
  padding: 0;
  margin: 0;
  font-family: "DM Mono", monospace;
  /* font-family: "Muli Regular", Arial, Helvetica, sans-serif; */
  font-size: 1rem;

  h1 {
    color: ${props => props.theme.colors.textDark};
  }

  a {
    text-decoration: none;
    color: ${props => props.theme.colors.textDark};
  }

  li {
    display: inline-block;
    margin-right: 20px;
    transition: opacity 0.5s ease;
    cursor: pointer;

    .active {
      font-weight: 800;
    }

    :last-child {
      margin-right: 0;
    }

    :hover {
      opacity: 0.7;
    }

    @media screen and (max-width: 768px) {
      display: none;
    }
  }
`
