import React from 'react'
import "./home.css"
import Layout from '../../components/Layout/Layout'
import Rooms from '../../components/Rooms/Rooms'
import Header from "../../components/Header/Header";
import About from "../../components/About/About";
import Staffc from '../../components/Staffc/Staffc';
import Menu from '../../components/Menu/Menu';
import Services from '../../components/Services/Services';

export default function Home(props) {
  return (
     <Layout>
       <Header/>
         <About/>
         <Rooms/>
         <Services/>
         <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
         <Staffc/>
         <Menu/>
     </Layout>
  )
}
