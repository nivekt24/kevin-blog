import * as React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Hero from "../components/hero"
// import Layout from "../components/Layout/index"
import BlogLayout from "../components/BlogLayout"
import Seo from "../components/seo"
import { Heading } from "../components/typography/heading"
import { Title } from "../components/typography/title"
import Featured from "../components/featured"
import { LinkButton } from "../components/button"
import IconRightArrow from "../components/icons/rightarrow"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  console.log(data)

  if (posts.length === 0) {
    return (
      <BlogLayout location={location} title={siteTitle}>
        <Bio />
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </BlogLayout>
    )
  }

  return (
    <BlogLayout location={location} title={siteTitle}>
      <Hero />
      <ol style={{ listStyle: `none` }}>
        <Heading>
          <Title>Latest Posts</Title>
          <LinkButton>
            <Link to="/posts" className="link-button">
              See all posts
              <IconRightArrow />
            </Link>
          </LinkButton>
        </Heading>
        {posts.map(post => {
          const title = post.frontmatter.title || post.fields.slug

          return (
            <li key={post.fields.slug}>
              <article
                className="post-list-item"
                itemScope
                itemType="http://schema.org/Article"
              >
                <section>
                  <Link to={post.fields.slug} itemProp="url">
                    <header>
                      <h3>
                        <span itemProp="headline">{title}</span>
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
                  </Link>
                </section>
              </article>
            </li>
          )
        })}
      </ol>
      <Featured>
        <Heading>
          <Title>Featured Projects</Title>
          <LinkButton>
            <Link to="/projects" className="link-button">
              <span>See all projects</span>
              <IconRightArrow />
            </Link>
          </LinkButton>
        </Heading>
      </Featured>
    </BlogLayout>
  )
}

export default BlogIndex

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Kevin Tran" />

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "blog" } } }
      sort: { frontmatter: { date: DESC } }
      limit: 3
    ) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
