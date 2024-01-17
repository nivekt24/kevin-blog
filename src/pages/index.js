import * as React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Hero from "../components/hero"
// import Layout from "../components/Layout/index"
import BlogLayout from "../components/BlogLayout"
import Seo from "../components/seo"
import { Heading } from "../components/heading"
import { Title } from "../components/title"
import Featured from "../components/featured"
import { Button } from "../components/button"

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
        {/* <h2 className="text-base uppercase letter-spacing-4">Latest Posts</h2> */}
        <Heading>
          <Title>Latest Posts</Title>
          <Button>See all Posts</Button>
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
                <header>
                  <h3>
                    <Link to={post.fields.slug} itemProp="url">
                      <span itemProp="headline">{title}</span>
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
            </li>
          )
        })}
      </ol>
      <Featured>
        <Heading>
          <Title>Featured Projects</Title>
          <Button>See all projects</Button>
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
