import React from 'react'
import { BrowserRouter , Routes, Route } from 'react-router-dom'
import Home from "./pages/Home/Home";
import Booking from "./pages/Booking/Booking";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/booking' element={<Booking/>}/>
            </Routes>
        </BrowserRouter>
    )
}