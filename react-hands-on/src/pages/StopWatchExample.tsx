import React, { useState } from 'react'

const StopwatchExample = () => {
  const [time, setTime] = useState<number>(0)
  const [timerId, setTimerId] = useState<NodeJS.Timeout | null>(null)

  // Startボタンを押した時の処理
  const handleStart = () => {
    if (timerId) return
    // 10ミリ秒ごとにtimeの変数を上書き
    const id: NodeJS.Timeout = setInterval(() => setTime((prevTime) => prevTime + 10), 10)
    setTimerId(id)
  }

  // Stopボタンを押した時の処理
  const handleStop = () => {
    // 一定間隔ごとに実行する処理を解除
    if (timerId) clearInterval(timerId)
    setTimerId(null)
  }

  // リセットボタンを押した時の処理
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

export default StopwatchExample
