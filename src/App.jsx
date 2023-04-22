import React from 'react'
import { BrowserRouter , Routes, Route } from 'react-router-dom'
import Home from "./pages/Home/Home";
import SignUp from './pages/Home/Login/SignUp/SignUp';
import SignIn from './pages/Home/Login/SignIn/SignIn';
import Pool from "./pages/Pool/Pool";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/sign-up' element={<SignUp/>}/>
                <Route path='/sign-in' element={<SignIn/>}/>
                <Route path='/pool' element={<Pool/>}/>
            </Routes>
        </BrowserRouter>
    )
}