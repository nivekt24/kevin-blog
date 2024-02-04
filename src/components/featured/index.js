import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import styled from "styled-components"

const ProjectWrapper = styled.div`
  flex-direction: column;
  display: flex;
  width: 100%;
  grid-column-gap: 32px;
  grid-row-gap: 32px;
  padding: 6rem 0;
`

const ProjectItem = styled.div`
  display: flex;
  position: relative;
  grid-column-gap: 40px;
  grid-row-gap: 40px;
  background: ${props => props.theme.colors.cardBackground};
  border-radius: 24px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 48px;
  overflow: hidden;

  @media screen and (max-width: 767px) {
    flex-direction: column;
    grid-column-gap: 10px;
    grid-row-gap: 50px; /* adjust as you like */
    align-items: stretch;
    padding: 20px 0 0 16px;
  }

  .project-label {
    display: flex;
    flex-direction: column;
    grid-column-gap: 16px;
    grid-row-gap: 16px;
  }

  h3 {
    background: ${props => props.theme.colors.cardBackground};
    margin-top: 0;
    margin-bottom: 0;
    font-size: 30px;
    font-weight: 700;
    line-height: 1.06667;
  }

  p {
    background: ${props => props.theme.colors.cardBackground};
  }

  .project-image-left {
    width: 62%;
    margin: auto 20px -48px -48px;
  }

  .project-image-right {
    width: 62%;
    margin: auto -48px -48px 20px;
  }

  .project-tech-list {
    display: flex;
    flex-wrap: wrap;
    position: relative;
    z-index: 2;
    margin: 25px 0px 10px;
    padding: 0px;
    list-style: none;
  }

  .project-tech-list li {
    margin: 0px 20px 5px 0px;
    white-space: nowrap;
  }

  .project-links svg {
    padding: 10px;
  }
`

export default function Featured({ children }) {
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
          }
          id
        }
      }
    }
  `)
  console.log(data)
  const featuredProjects = data.featured.nodes

  return (
    /*
    <FeaturedList>
      {children}

      <Project>
        {featuredProjects?.map(project => (
         
            <GatsbyImage
              image={project.frontmatter.thumb.childImageSharp.gatsbyImageData}
              alt=""
            />

            <h3>{project.frontmatter.title}</h3>
            <p>{project.frontmatter.stack}</p>
          </Link>
        ))}
      </Project>
    </FeaturedList>
    */

    <ProjectWrapper>
      {children}
      {featuredProjects?.map(project => (
        <ProjectItem key={project.id}>
          <Link to={"/projects/" + project.frontmatter.slug} key={project.id}>
            <GatsbyImage
              image={project.frontmatter.thumb.childImageSharp.gatsbyImageData}
              alt=""
            />
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
            <div className="project-links"></div>
          </div>
        </ProjectItem>
      ))}
    </ProjectWrapper>
  )
}
