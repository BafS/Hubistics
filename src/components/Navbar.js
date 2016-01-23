import React, { Component } from 'react'
import { Link } from 'react-router'

import { Navbar, Nav } from 'react-bootstrap'

export class NavbarComp extends Component {
  render() {
    let style = {
      background: '#fdfdfd',
      borderBottom: '1px solid rgba(0,0,0,.05)'
    }

    return (
      <Navbar style={style} fluid staticTop>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">Hubistics</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <li><Link to="/about">About</Link></li>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}
