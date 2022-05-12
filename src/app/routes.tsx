import { Route, Routes } from 'react-router-dom'

import { HomePage } from './pages/HomePage/Loadable'

export function AppRotues() {
  return (
    <Routes>
      {/* <Route path='*' element={<NotFoundPage />} /> */}
      <Route path='/' element={<HomePage />} />
    </Routes>
  )
}
