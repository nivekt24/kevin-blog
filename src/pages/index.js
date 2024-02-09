import * as React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Hero from "../components/hero"
// import Layout from "../components/Layout/index"
import BlogLayout from "../components/BlogLayout"
import Seo from "../components/seo"
import { Heading } from "../components/typography/heading"
import { Title } from "../components/typography/title"
import { LinkButton } from "../components/button"
import IconRightArrow from "../components/icons/rightarrow"
import BlogPosts from "../components/posts"
import Featured from "../components/featured"
import Contact from "../components/contact"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes
  const contact = data.site.siteMetadata?.contact

  // console.log(data)
  // console.log(posts)

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
      <BlogPosts posts={posts}>
        <Heading>
          <Title>Latest Posts</Title>
          <LinkButton>
            <Link to="/posts" className="link-button">
              See all posts
              <IconRightArrow />
            </Link>
          </LinkButton>
        </Heading>
      </BlogPosts>
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
      <Contact id="#contact" contact={contact} />
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
        contact
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
