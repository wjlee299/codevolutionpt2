import React, { Component } from 'react'

export class HoverCounter2 extends Component {
  render() {
    const { count, incrementCount } = this.props;
    return (
      <button onMouseOver={incrementCount}>Hovered {count} times</button>
    )
  }
}

export default HoverCounter2