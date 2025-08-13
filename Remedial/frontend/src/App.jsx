import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Inicio from './paginas/Home';
import Grafica_estatica from './paginas/grafica_estatica';
import Grafica_dinamica from './paginas/grafica_dinamica';
import NavBar from './paginas/Navbar';

function App() {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Inicio />}/>
        <Route path="/Home" element={<Inicio/>}/>
        <Route path="/grafica_dinamica" element={<Grafica_dinamica />} />
        <Route path="/grafica_estatica" element={<Grafica_estatica />} />
        <Route path="/Navbar" element={<NavBar />} />
      </Routes>
    </Router>
  )
}

export default App;
