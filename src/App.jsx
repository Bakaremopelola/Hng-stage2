

import { Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import CartPage from '../src/Pages/CartPage'

const App = () => {
  return (
    <div>
      
      <Routes>
      <Route  path='/'  element={<HomePage/>}/>
      <Route  path='/CartPage'  element={<CartPage/>}/>
      </Routes>
    </div>
  )
}

export default App

