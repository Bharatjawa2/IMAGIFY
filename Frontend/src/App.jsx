import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import BuyCredit from './pages/BuyCredit'
import Result from './pages/Result'
import './index.css'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className='px-4 sm:px-10 md:px-14 lg:28 min-h-screen bg-gradient-to-b from-teal-50 from-orange-50'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Buy' element={<BuyCredit/>}/>
        <Route path='/Result' element={<Result/>}/>
      </Routes>
    </div>
  )
}

export default App