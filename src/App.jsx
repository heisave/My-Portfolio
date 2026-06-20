import { Routes, Route } from "react-router-dom";
import './App.css'
import Home from './components/Main/Home'
import Skills from './components/Main/Skills';
function App() {
  

  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/skill" element={<Skills/>}/>
    </Routes> 
    </>
  )
}

export default App
