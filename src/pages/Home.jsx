import React from 'react'
import { BrowserRouter , Routes, Route } from 'react-router-dom'

export default function Home() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  )
}
