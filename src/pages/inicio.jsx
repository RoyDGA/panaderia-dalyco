import React from 'react';
import '../styles/inicio.css';
import logo from '../assets/dalyco-logo-negro-nobg.png';
import fondoPan from '../assets/fondo1.png';


function Inicio() {
  return (
    <div className="navegacion-arriba">
      <div className="fondo-deg"></div>

      {/* Main */}
        <main 
      style={{
        backgroundImage: `url(${fondoPan})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "50vh",
      }}
    >
        <div className="texto">
          <p>
            “En Dalyco más que un pan, una <br />
            forma de cuidarte – ahora al alcance <br />
            de un clic con nuestra web rápida, <br />
            fácil y hecha para ti. Integral, natural <br />
            y hecho con propósito.”
          </p>
          <div className="linea"></div>
        </div>
      </main>
      
    </div>
  );
}

export default Inicio;