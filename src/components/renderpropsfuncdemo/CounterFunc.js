import { useState } from 'react'

function CounterFunc(props) {
  const [count, setCount] = useState(0)

  const incrementCount = () => {
    setCount(prevCount => prevCount + 1)
  }

  return (
    <>
      {props.children(count, incrementCount)}
    </>
  )
}

export default CounterFunc