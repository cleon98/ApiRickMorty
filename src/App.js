import ListOfCharacters from "./componentes/ListOfCharacters"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import OneCharacter from "./componentes/OneCharacter"
import Navbar from "./componentes/Navbar"
import Home from "./componentes/Home"

export default function App() {
  return (
  <Router>
    <Navbar />
    <div> 
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="characters" element={<ListOfCharacters/>}></Route>
        <Route path="/character/:charId" element={<OneCharacter/>}></Route>
      </Routes>
    </div>
  </Router>
  )
}