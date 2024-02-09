import { Link } from "gatsby"
import React from "react"

import styled from "styled-components"

const BlogPostWrapper = styled.ol``

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
    </BlogPostWrapper>
  )
}

export default BlogPosts
