import { graphql, Link } from "gatsby"
import React from "react"
// Components
import Layout from "../../components/Layout/index"
// Styles
import { Portfolio, Work } from "./Projects.styles"
import { GatsbyImage } from "gatsby-plugin-image"

export default function Projects({ data }) {
  console.log(data)
  const projects = data.allMarkdownRemark.nodes
  const contact = data.site.siteMetadata.contact

  return (
    <Layout>
      <Portfolio>
        <h2>Portfolio</h2>
        <h3>Projects & Websites I've Created</h3>
        <Work>
          {projects?.map(project => (
            <Link to={"/projects/" + project.frontmatter.slug} key={project.id}>
              <div>
                <GatsbyImage
                  image={
                    project.frontmatter.thumb.childImageSharp.gatsbyImageData
                  }
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
              gatsbyImageData(quality: 80)
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
