import styled from "styled-components"

export const Portfolio = styled.div`
  text-align: center;

  h2 {
    font-size: 3em;
    margin-top: 80px;
  }

  h3 {
    font-size: 2em;
    font-weight: 400;
  }
`
export const Work = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 40px;
  margin: 40px 10px;

  h3 {
    text-align: center;
    margin: 10px auto 0px;
    font-weight: 500;
  }

  p {
    margin-top: 4px;
  }
`
