import React, { Component } from 'react'
import { NavbarComp } from './components/Navbar'

export class App extends Component {
  render() {
    return (
      <div className="app">
        <NavbarComp />
        {this.props.children}
      </div>
    )
  }
}
