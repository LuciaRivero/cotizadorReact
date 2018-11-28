import React, {Component} from 'react';

class Resumen extends Component {
    render() {
        const {marca,year,plan} = this.props.datos;
        return(
            <div className="resumen">
                <h2>Resumen</h2>
                <li>Marca: {marca}</li>
                <li>Plan: {plan}</li>
                <li>año del auto: {year}</li>

            </div>
        )
    }
}

export default Resumen;