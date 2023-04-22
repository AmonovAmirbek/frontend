import React from 'react'
import { BrowserRouter , Routes, Route } from 'react-router-dom'
import Home from "./pages/Home/Home";
import Pool from "./pages/Pool/Pool";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/pool' element={<Pool/>}/>
            </Routes>
        </BrowserRouter>
    )
}