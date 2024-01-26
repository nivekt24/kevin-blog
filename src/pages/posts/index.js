import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import Layout from "../../components/Layout/index"
import styled from "styled-components"
import Card from "../../components/card"

const CardGridStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 32px;

  @media (min-width: 1150px) {
    margin-left: -32px;
    margin-right: -32px;
  }
`

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

  const allPosts = posts.posts.nodes

  return (
    <Layout>
      <h1>Writing</h1>
      <CardGridStyle>
        {allPosts?.map(post => (
          <Card key={post.fields.slug}>
            <article className="post-list-item">
              <header>
                <h3>
                  <Link to={post.fields.slug} itemProp="url">
                    <span itemProp="headline">{post.frontmatter.title}</span>
                  </Link>
                </h3>
                <small>{post.frontmatter.date}</small>
              </header>
              <section>
                <p
                  dangerouslySetInnerHTML={{
                    __html: post.frontmatter.description || post.excerpt,
                  }}
                  itemProp="description"
                />
              </section>
            </article>
          </Card>
        ))}
      </CardGridStyle>
    </Layout>
  )
}
