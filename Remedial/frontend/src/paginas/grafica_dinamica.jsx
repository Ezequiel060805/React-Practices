import '../App.css';
import NavBar from './Navbar';
import GraficaMysql from '../assets/Grafica_Dinamica';

function Grafica_dinamica() {
  return(
  <>
    <div>
      <NavBar />
      <p className="page-description">grafica_dinamica</p>
      <GraficaMysql/>
    </div>
  </>
  );
}

export default Grafica_dinamica;
