import React, { Component } from 'react'

import { Input, ButtonInput } from 'react-bootstrap'

export class UserInput extends Component {

  state = {
    disable: true,
    value: ''
  };

  constructor(props) {
    super(props)
    this.state.value = this.props.value
  }

  onChange() {
    let state = this.state

    state.value = this.refs.input.getValue()

    let length = this.refs.input.getValue().length
    if (length < 2) {
      state.disabled = true
    } else {
      state.disabled = false
    }

    this.setState(state)
  }

  onClick() {
    this.props.onClick(this.state.value)
    this.state.value = ''
  }

  render() {
    const innerAdd = <ButtonInput type="submit" value="Add" onClick={this.onClick.bind(this)} disabled={this.state.disabled} />
    return (
      <form>
        <Input type="text" ref="input" buttonAfter={innerAdd} placeholder={this.props.placeholder} value={this.state.value} onChange={this.onChange.bind(this)} />
      </form>
    )
  }
}
