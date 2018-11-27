import React, { Component } from 'react';
import Header from './Header';
import Formulario from './Formulario';
import {obtenerDiferenciaAnio, calcularMarca, obtenerPlan} from '../Helper.js';
class App extends Component {
  cotizarSeguro = (datos) => {
    const {marca, plan, year} = datos;
    // agregar una base de 2000

    let resultado = 2000;

    //obtener la diferencia de años
    const diferencia = obtenerDiferenciaAnio(year);

    //console.log('la diferencia es ' + diferencia);
    //por cada año restar el 3% al valor del seguro
    resultado -= ((diferencia * 3) * resultado) / 100;

    //console.log(resultado);
    // americano 15% asiatico 5% y europeo 30% de incremento al valor actual

    resultado = calcularMarca(marca) * resultado;

    //el plan del auto, el basico incrementa el valor 20% y completo 50%

    let incrementoPlan = obtenerPlan(plan);

    //dependiendo del plan incrementar

    resultado = parseFloat(incrementoPlan * resultado).toFixed(2);

    console.log(resultado);
    
    
  }
  render() {
    return (
      <div className="contenedor">
        <Header
          titulo = 'Cotizador de seguro de auto'/>
        <div className="contenedor-formulario">
          <Formulario
            cotizarSeguro={this.cotizarSeguro}/>
        </div>
      </div>
    );
  }
}

export default App;
