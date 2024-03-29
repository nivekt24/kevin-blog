import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../../components/Layout/index"
import Card from "../../components/card"
import IconRightArrow from "../../components/icons/rightarrow"
import { StyledLink } from "../../components/posts"
import styled from "styled-components"

const CardGridStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 32px;
  padding-top: 32px;

  h3 span {
    font-size: var(--fontSize-3);
  }

  @media (min-width: 1150px) {
    margin-left: -32px;
    margin-right: -32px;
  }

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
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
              <section>
                <StyledLink to={post.fields.slug} itemProp="url">
                  <header>
                    <h3>
                      <span itemProp="headline">{post.frontmatter.title}</span>
                    </h3>
                    {/* <small>{post.frontmatter.date}</small> */}
                  </header>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: post.frontmatter.description || post.excerpt,
                    }}
                    itemProp="description"
                  />
                  <span style={{ fontWeight: "bold" }}>Read more</span>
                  <IconRightArrow />
                </StyledLink>
              </section>
            </article>
          </Card>
        ))}
      </CardGridStyle>
    </Layout>
  )
}
