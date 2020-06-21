import { Link } from "gatsby"

import React from "react"

const Header = ({ }) => (
  <header>
    <div className="container">
      <div className="inner-header">
        <div className="logo">
          <Link to="/">ODUNSI</Link>
        </div>
        <div className="navigation">
          <nav>
            <Link to="/">About</Link>
            <Link to="/">Work</Link>
            <Link to="/">Contact</Link>
          </nav>
        </div>
      </div>
    </div>
  </header>
)

export default Header
