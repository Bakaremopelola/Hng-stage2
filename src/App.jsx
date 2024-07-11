
import { Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import CartPage from '../src/Pages/CartPage'
import Checkout from './Pages/Checkout'

const App = () => {
  return (
    <div>
      
      <Routes>
      <Route  path='/'  element={<HomePage/>}/>
      <Route  path='/CartPage'  element={<CartPage/>}/>
      <Route  path='/checkout'  element={<Checkout/>}/>
      </Routes>
    </div>
  )
}

export default App

