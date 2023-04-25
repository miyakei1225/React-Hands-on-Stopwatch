import React, { useState } from 'react'
import styled from 'styled-components'

const State = () => {
  const [count, setCount] = useState(0)

  const MarginTopBox = styled.div`
    margin-top: 24%;
  `
  return (
    <MarginTopBox>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </MarginTopBox>
  )
}

export default State
