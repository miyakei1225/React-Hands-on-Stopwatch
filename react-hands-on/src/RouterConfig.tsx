import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './Home'

export const RouterConfig = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
