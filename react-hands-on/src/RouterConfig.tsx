import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from 'pages/Home'
import JSX from 'pages/JSX'

export const RouterConfig = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/jsx" element={<JSX />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
