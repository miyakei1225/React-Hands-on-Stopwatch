import React, { useState } from 'react'

const StopwatchChakraExample = () => {
  const [time, setTime] = useState<number>(0)
  const [timerId, setTimerId] = useState<NodeJS.Timeout | null>(null)

  const handleStart = () => {
    if (timerId) return
    const id: NodeJS.Timeout = setInterval(() => setTime((prevTime) => prevTime + 10), 10)
    setTimerId(id)
  }

  const handleStop = () => {
    if (timerId) clearInterval(timerId)
    setTimerId(null)
  }

  const handleReset = () => {
    setTime(0)
    if (timerId) clearInterval(timerId)
    setTimerId(null)
  }

  return (
    <div>
      <div>{(time / 1000).toFixed(2)} s</div>
      <div>
        <button onClick={handleStart}>Start</button>
      </div>
      <div>
        <button onClick={handleStop}>Stop</button>
      </div>
      <div>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  )
}

export default StopwatchChakraExample
