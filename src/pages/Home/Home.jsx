import React from 'react'
import Layout from '../../components/Layout/Layout'
import Rooms from '../../components/Rooms/Rooms'
import "./home.css"
import { BrowserRouter , Routes, Route } from 'react-router-dom'
import Header from "../../components/Header/Header";
import CheckIn from "../../components/CheckIn/CheckIn";
import About from "../../components/About/About";
import Team from '../../components/Team/Team';
import Staffc from '../../components/Staffc/Staffc';
import Menu from '../../components/Menu/Menu';

export default function Home() {
  return (
     <Layout>
       <Header/>
       <CheckIn />
         <About/>
         <Rooms/>
         <Team/>
         <Staffc/>
         <Menu/>
     </Layout>
  )
}
