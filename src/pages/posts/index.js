import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../../components/Layout/index"

export default function Posts() {
  const posts = useStaticQuery(graphql`
    {
      posts: allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
        nodes {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date
            title
            description
          }
        }
      }
    }
  `)
  console.log(posts)

  return (
    <Layout>
      <div>Posts</div>
    </Layout>
  )
}
