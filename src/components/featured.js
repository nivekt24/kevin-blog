import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import Icon from "./icons/Icon"

import styled from "styled-components"

const ProjectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 6rem 0;

  & > * {
    margin-bottom: 48px;
  }
`

const ProjectItem = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  /* background: ${props => props.theme.colors.cardBackground}; */
  border-radius: 24px;
  justify-content: space-between;
  align-items: center;
  padding: 32px;
  word-wrap: break-word;
  overflow: hidden;

  @media screen and (max-width: 767px) {
    flex-direction: column;
    align-items: stretch;
    padding: 20px 16px;
  }

  .project-content {
    margin: 0 32px;

    @media screen and (max-width: 767px) {
      margin: 16px;
    }
  }

  .project-label {
    display: flex;
    flex-direction: column;

    & h3,
    & p {
      margin-top: 16px;
    }
  }

  h3 {
    margin-top: 0;
    margin-bottom: 0;
    font-size: clamp(24px, 4vw, 28px);
    font-weight: 700;
    line-height: 1.06667;
  }

  .project-image-left,
  .project-image-right {
    width: 62%;
    margin: auto -48px -48px 20px;

    &.project-image-left {
      margin: auto 20px -48px -48px;
    }
  }

  .project-tech-list {
    display: flex;
    flex-wrap: wrap;
    position: relative;
    z-index: 2;
    padding: 0px;
    margin-bottom: 16px;
    list-style: none;
  }

  .project-tech-list li {
    margin: 0px 20px 5px 0px;
    /* white-space: nowrap; */
  }

  .project-links a {
    opacity: 0.7;
    padding: 10px;
    margin-right: 10px; /* Adjust as needed */
    transition: opacity 0.5s ease;

    &:hover,
    &:focus {
      opacity: 1;
    }
  }

  .project-links a svg {
    width: 24px;
    height: 24px;
  }
`

const ImageContainer = styled.div`
  @media screen and (max-width: 767px) {
    width: 100%;
    max-width: 350px; /* Set maximum width to 300px */
    margin: 0 auto; /* Center horizontally */
  }
`

const Featured = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      featured: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/src/projects/" } }
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
            external
            github
          }
          id
        }
      }
    }
  `)
  // console.log(data)
  const featuredProjects = data.featured.nodes

  return (
    <ProjectWrapper id="projects">
      {children}
      {featuredProjects?.map(project => (
        <ProjectItem key={project.id}>
          <Link to={"/projects/" + project.frontmatter.slug} key={project.id}>
            <ImageContainer>
              <GatsbyImage
                image={
                  project.frontmatter.thumb.childImageSharp.gatsbyImageData
                }
                alt=""
              />
            </ImageContainer>
          </Link>
          <div className="project-content">
            <div className="project-label">
              <h3>{project.frontmatter.title}</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <ul className="project-tech-list">
              <li>{project.frontmatter.stack}</li>
              <li>React</li>
              <li>Styled Components</li>
              <li>Express</li>
              <li>Heroku</li>
            </ul>
            <div className="project-links">
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
              {
                <a
                  href={project.frontmatter.external}
                  className="external"
                  aria-label="External Link"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Icon name="External" />
                </a>
              }
            </div>
          </div>
        </ProjectItem>
      ))}
    </ProjectWrapper>
  )
}

export default Featured
