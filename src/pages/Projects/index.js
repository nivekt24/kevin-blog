import { graphql, Link } from "gatsby"
import React from "react"
// Components
import Layout from "../../components/Layout/index"
// Styles
import { Portfolio, Work } from "./Projects.styles"

export default function Projects({ data }) {
  console.log(data)
  const projects = data.allMarkdownRemark.nodes

  return (
    <Layout>
      <Portfolio>
        <h2>Projects</h2>
        <h3>Projects & Websites I've Created</h3>
        <Work>
          {projects?.map(project => (
            <Link to={"/projects/" + project.frontmatter.slug} key={project.id}>
              <h3>{project.frontmatter.title}</h3>
              <p>{project.frontmatter.stack}</p>
            </Link>
          ))}
        </Work>
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
        }
        id
      }
    }
  }
`
