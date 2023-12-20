import { graphql, useStaticQuery, Link } from "gatsby"
import React from "react"

import { GatsbyImage } from "gatsby-plugin-image"

import styled from "styled-components"

export const FeaturedList = styled.div`
  padding: 6rem 0;

  h2 {
    font-size: 2em;
    font-weight: 400;
  }
`
const Project = styled.div`
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

export default function Featured() {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
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
  const featuredProjects = data.allMarkdownRemark.nodes

  return (
    <FeaturedList>
      <h1>Featured Projects</h1>

      <Project>
        {featuredProjects?.map(project => (
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
      </Project>
    </FeaturedList>
  )
}
