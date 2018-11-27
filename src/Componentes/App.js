import React, { Component } from 'react';
import Header from './Header';
import Formulario from './Formulario';

class App extends Component {
  cotizarSeguros = (datos) => {
    console.log(datos);
  }
  render() {
    return (
      <div className="contenedor">
        <Header
          titulo = 'Cotizador de seguro de auto'/>
        <div className="contenedor-formulario">
          <Formulario
            cotizarSeguros={this.cotizarSeguros}/>
        </div>
      </div>
    );
  }
}

export default App;
