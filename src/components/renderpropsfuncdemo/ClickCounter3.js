import React from 'react'

function ClickCounter3({count, incrementCount}) {
  return (
    <button onClick={incrementCount}>Clicked {count} times</button>
  )
}

export default ClickCounter3