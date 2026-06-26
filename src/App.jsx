import { Routes, Route } from "react-router-dom";
import './App.css'
import Home from './components/Main/Home'
import Skills from './components/Main/Skills';
import Contact from './components/Main/Contact'
import About from './components/Main/About'
import Projects from "./components/Main/Project";
function App() {
  

  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/skill" element={<Skills/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/projects" element={<Projects/>}/>
    </Routes> 
    </>
  )
}

export default App
