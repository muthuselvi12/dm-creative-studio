import { useEffect } from "react"
import AOS from "aos"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Services from "./components/Services"
import Portfolio from "./components/Portfolio"
import About from "./components/About"
import Contact from "./components/Contact"
import './App.css'

function App() {
 
useEffect(()=>{ AOS.init({duration:1000}); },[]);

  return (
    <>
      <Navbar/>
      <Hero/>
      <Services/>
      <Portfolio/>
      <About/>
      <Contact/>
    </>
  );
}

export default App
