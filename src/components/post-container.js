import React from "react"
import { graphql } from "gatsby"

export default function PostContainer({ data }) {
  //const { allMarkdownRemark } = data
  //console.log(allMarkdownRemark)
  console.log(data)
  return <div>page list</div>
}
export const query = graphql`
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
