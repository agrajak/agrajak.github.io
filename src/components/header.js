import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"

const Ol = styled.ol`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-evenly;
`
const Li = styled.li`
  text-decoration: none;
`

export default function Header() {
  return (
    <header>
      <nav>
        <Ol>
          <Li className="logo">agrajak.log</Li>
          <Li>
            <Link to="/">홈</Link>
          </Li>
          <Li>
            <Link to="/about">소개</Link>
          </Li>
          <Li>
            <Link to="/posts">글 목록</Link>
          </Li>
        </Ol>
      </nav>
    </header>
  )
}
