import {Route, Routes} from 'react-router-dom'

import {HelloWorld} from '@src/features/HelloWorld'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HelloWorld />} />
    </Routes>
  )
}
