import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"

const Details = styled.div`
  text-align: center;

  h2 {
    font-size: 3.5em;
    margin-top: 80px;
  }

  h3 {
    font-size: 2em;
    font-weight: 400;
    margin-bottom: 40px;
  }
`

const Featured = styled.div`
  margin-bottom: 40px;
`

const Html = styled.div`
  margin-top: 40px;
`

const ProjectDetails = ({ data }) => {
  const { html } = data.markdownRemark
  const { title, stack, featuredImg } = data.markdownRemark.frontmatter

  return (
    <Layout>
      <Details>
        <h2>{title}</h2>
        <h3>{stack}</h3>
        <Featured>
          <GatsbyImage
            image={getImage(featuredImg.childImageSharp.gatsbyImageData)}
            alt="Projects"
          />
        </Featured>
        <Html dangerouslySetInnerHTML={{ __html: html }} />
      </Details>
    </Layout>
  )
}

export default ProjectDetails

export const query = graphql`
  query ProjectDetails($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        stack
        title
        featuredImg {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          }
        }
      }
    }
  }
`
