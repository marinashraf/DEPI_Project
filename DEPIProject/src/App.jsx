import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import About from "./components/About";
import Tourist from './components/Tourist';
import Footer from "./components/Footer";
// import CityPage from './components/CityPage';
import { useParams } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Luxor from './components/Luxor';
import Giza from './components/Giza';
import Home from './components/Home';
import Sharm from './components/Sharm';
import Red from './components/Red-Sea';
import Alexandria from './components/Alexandria';
import Aswan from './components/Aswan';
// import GovernoratesPage from './components/GovernoratesPage';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
   <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/luxor" element={<Luxor />} />
        <Route path="/giza" element={<Giza />} />
        <Route path="/aswan" element={<Aswan />} />
          <Route path="/Alexandria" element={<Alexandria />} />
            <Route path="/Red" element={<Red />} />
             <Route path="/Sharm " element={<Sharm />} />
      </Routes>

        
    </>
  )
}






export default App
