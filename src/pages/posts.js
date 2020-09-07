import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
export default function Posts({ data }) {
  const {
    allMarkdownRemark: { edges },
  } = data
  return (
    <Layout>
      <p> 글 목록입니다. </p>
      <ul>
        {edges
          .map(x => x.node)
          .map(({ id, frontmatter }, i) => (
            <li key={id}>
              <Link to={frontmatter.slug}>
                {frontmatter.title} | {frontmatter.date}
              </Link>
            </li>
          ))}
      </ul>
    </Layout>
  )
}
export const pageQuery = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            title
            slug
            date
          }
        }
      }
    }
  }
`
