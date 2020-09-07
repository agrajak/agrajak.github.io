import React from "react"
import Header from "./header"
import Footer from "./footer"
import styled from "@emotion/styled"

const Component = styled.div`
  padding: 10px 100px;
`

export default function Layout({ children }) {
  return (
    <Component>
      <Header></Header>
      {children}
      <Footer></Footer>
    </Component>
  )
}
