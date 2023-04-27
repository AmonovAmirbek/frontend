import React from 'react'
import { BrowserRouter , Routes, Route } from 'react-router-dom'
import Home from "./pages/Home/Home";
import SignUp from './pages/Home/Login/Sign-Up/SignUp';
import SignIn from './pages/Home/Login/Sign-in/SignIn';
import Booking from "./pages/Booking/Booking";
import Pools from './pages/Pools/Pools';
import RoomDetail from './pages/RoomDetail/RoomDetail'
import AllRooms from './pages/AllRooms/AllRooms';
import Classroom from './components/Classroom/Classroom';

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/sign-up' element={<SignUp/>}/>
                <Route path='/sign-in' element={<SignIn/>}/>
                <Route path='/booking' element={<Booking/>}/>
                <Route path='/pool' element={<Pools/>}/>
                <Route path='/room-detail/:id' element={<RoomDetail/>}/>
                <Route path='/all-rooms' element={<AllRooms/>}/>
                <Route path='/class-room/:id' element={<Classroom/>}/>
            </Routes>
        </BrowserRouter>
    )
}