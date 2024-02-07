import { graphql } from "gatsby"
import React from "react"
// Components
import Layout from "../../components/Layout/index"
import Icon from "../../components/icons/Icon"
// Styles
import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"

const Portfolio = styled.div`
  display: grid;
  grid-gap: 20px;
  text-align: center;
  width: calc(100% + 10px);
  margin: 50px -5px;

  h2 {
    font-size: 3em;
    margin-top: 80px;
  }

  h3 {
    font-size: 2em;
    font-weight: 400;
  }

  .project-detail-item {
    display: grid;
    background: ${props => props.theme.colors.cardBackground};
    grid-template-columns: 50px 1fr 0.5fr 0.5fr;
    align-items: center;
    padding: 24px;
    border-radius: 16px;

    @media screen and (max-width: 767px) {
      grid-template-columns: 50px 1fr auto;
    }
  }

  .hidden-mobile {
    display: block;
    @media screen and (max-width: 767px) {
      display: none;
    }
  }

  .project-links {
    display: flex;
    justify-content: flex-end;
  }

  @media screen and (max-width: 767px) {
    .project-detail-item {
      grid-gap: 10px;
    }
  }

  .project-links a {
    opacity: 0.7;
    padding: 0px 5px;
    transition: opacity 0.5s ease;

    &:hover,
    &:focus {
      opacity: 1;
    }
  }

  .project-links a svg {
    width: 20px;
    height: 20px;
  }
`

export default function Projects({ data }) {
  const projects = data.featured.nodes

  return (
    <Layout>
      <h1>Projects</h1>
      <Portfolio>
        {projects?.map(project => (
          <div className="project-detail-item" key={project.id}>
            <GatsbyImage
              image={project.frontmatter.thumb.childImageSharp.gatsbyImageData}
              alt=""
            />
            <div className="project-title">{project.frontmatter.title}</div>
            <div className="project-year hidden-mobile">
              {project.frontmatter.stack}
            </div>
            <div className="project-links">
              {
                <a
                  href={project.frontmatter.external}
                  aria-label="External Link"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Icon name="External" />
                </a>
              }
              {
                <a
                  href={project.frontmatter.github}
                  aria-label="GitHub Link"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Icon name="GitHub" />
                </a>
              }
            </div>
          </div>
        ))}
      </Portfolio>
    </Layout>
  )
}

// export page query
export const query = graphql`
  query ProjectsPage {
    featured: allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "projects" } } }
    ) {
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
          github
          external
        }
        id
      }
    }
  }
`
