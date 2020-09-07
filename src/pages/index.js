import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"

export default function () {
  return (
    <Layout>
      Hello world!
      <Link to="/blog/my-first-post">link to my-first-post</Link>
    </Layout>
  )
}
