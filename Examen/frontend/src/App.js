import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./paginas/NavBar.jsx";
import Grafica_Estatica from "./paginas/grafica_Estatica";
import Inicio from "./paginas/Home";
import "./App.css";

function App() {
  return(
   <Router>
      <Routes>
        <Route path="/" elemnt={<Inicio  />} />
        <Route path="/Home" elemnt={<Inicio />} />
        <Route path="/NavBar" elemnt={<NavBar />} />
        <Route path="/grafica_Estatica" elemnt={<Grafica_Estatica />} />
      </Routes>
    </Router>
  )
}

export default App;
