import React from 'react'
import { BrowserRouter , Routes, Route } from 'react-router-dom'
import Layout from "../../components/Layout/Layout";
import Header from "../../components/Header/Header";
import CheckIn from "../../components/CheckIn/CheckIn";
import About from "../../components/About/About";
import Rooms from "../../components/Rooms/Rooms";

export default function Home() {
  return (
     <Layout>
       <Header/>
       <CheckIn />
         <About/>
         <Rooms/>
     </Layout>
  )
}
