import { useState } from 'react'
import './App.css'
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Favourites from './pages/Favourites'
import Navigation from './components/Navigation'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/favourites' element={<Favourites/>}/>
      </Routes>
    </div>
  )
}

export default App
