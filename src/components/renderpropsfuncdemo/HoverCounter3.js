import React from 'react'

function HoverCounter3({count , incrementCount}) {
  return (
    <h2 onMouseOver={incrementCount}>Hovered {count} times</h2>
  )
}

export default HoverCounter3