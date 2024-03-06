import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const BlogPostWrapper = styled.ol``

export const StyledLink = styled(Link)`
  position: relative;

  .right-arrow {
    position: absolute;
    margin-left: 10px;
    top: 94%;
    transform: translateY(-50%);
    opacity: 0;
    transition: opacity 0.3s ease; /* Added transition for smoother hover effect */
  }

  .right-arrow path {
    fill: #435acb;
  }

  &:hover .right-arrow {
    opacity: 1;
  }
`

const BlogPosts = ({ posts, children }) => {
  return (
    <BlogPostWrapper style={{ listStyle: `none` }} id="posts">
      {children}
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
                <StyledLink to={post.fields.slug} itemProp="url">
                  <header>
                    <h3>
                      <span itemProp="headline">{title}</span>
                    </h3>
                    <small>{post.frontmatter.date}</small>
                  </header>
                  {/* <p
                    dangerouslySetInnerHTML={{
                      __html: post.frontmatter.description || post.excerpt,
                    }}
                    itemProp="description"
                  /> */}
                  {/* <span style={{ fontWeight: "bold" }}>Read more</span>
                  <IconRightArrow /> */}
                </StyledLink>
              </section>
            </article>
          </li>
        )
      })}
    </BlogPostWrapper>
  )
}

export default BlogPosts
