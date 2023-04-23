import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from 'pages/Home'
import JSX from 'pages/JSX'
import Chakra from 'pages/Chakra'
import StopwatchExample from 'pages/StopWatchExample'

export const RouterConfig = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/jsx" element={<JSX />} />
          <Route path="/chakra" element={<Chakra />} />
          <Route path="/stopwatch/example" element={<StopwatchExample />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
