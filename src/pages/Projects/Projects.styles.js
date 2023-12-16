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
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-auto-rows: minmax(300px, auto);
  margin-right: auto;
  width: 100%;
  max-width: 1000px;
  padding-top: 32px;
  text-align: center;

  h3 {
    text-align: center;
    margin: 10px auto 0px;
    font-weight: 500;
  }

  p {
    margin-top: 4px;
  }
`
