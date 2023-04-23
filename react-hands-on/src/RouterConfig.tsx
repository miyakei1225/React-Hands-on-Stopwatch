import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from 'pages/Home'
import JSX from 'pages/JSX'
import Chakra from 'pages/Chakra'

export const RouterConfig = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/jsx" element={<JSX />} />
          <Route path="/chakra" element={<Chakra />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
