import { graphql, Link } from "gatsby"
import React from "react"
// Components
import Layout from "../../components/Layout/index"
// Styles
import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"

const Portfolio = styled.div`
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
const Work = styled.div`
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

export default function Projects({ data }) {
  // console.log(data)
  const projects = data.allMarkdownRemark.nodes
  const contact = data.site.siteMetadata.contact

  return (
    <Layout>
      <Portfolio>
        <h2>Portfolio</h2>

        <Work>
          {projects?.map(project => (
            <Link to={"/projects/" + project.frontmatter.slug} key={project.id}>
              <div>
                <GatsbyImage
                  image={
                    project.frontmatter.thumb.childImageSharp.gatsbyImageData
                  }
                  alt=""
                />

                <h3>{project.frontmatter.title}</h3>
                <p>{project.frontmatter.stack}</p>
              </div>
            </Link>
          ))}
        </Work>
        <p>Like what you see? Email me at {contact} for a quote!</p>
      </Portfolio>
    </Layout>
  )
}

// export page query
export const query = graphql`
  query ProjectsPage {
    allMarkdownRemark(filter: { frontmatter: { type: { eq: "projects" } } }) {
      nodes {
        frontmatter {
          slug
          stack
          title
          thumb {
            childImageSharp {
              gatsbyImageData(quality: 80, placeholder: BLURRED)
            }
          }
        }
        id
      }
    }
    site {
      siteMetadata {
        contact
      }
    }
  }
`
