import React, { Component } from 'react';
import axios from 'axios';
import Hospital from './Hospital';

class Hospitales extends Component {
  state = {
    titulo: "Hospitales",
    hospitales: [],
  };

  // El componente se montó
  componentDidMount() {
    const URL = 'https://donaciones-covid-api.herokuapp.com/api/v1/hospitales';
    axios.get(URL)
      .then(response => {
        console.log('🥎' , response.data);
        const hospitales = response.data;
        this.setState({ hospitales });
      })
      .catch(err => console.log(err));
  }

  renderizarHospitales() {
    const { hospitales } = this.state;
    if (hospitales.length === 0) {
      return <span>Cargando hospitales...</span>
    } else if (hospitales.length > 0) {
      // ¿Cómo itero y muestro cada elemento de mi arreglo de hospitales?
      return (
        <React.Fragment>
          <span>Se encontraron {hospitales.length} hospitales</span>
          { hospitales.map(hospital => {
            return (
              <Hospital
                nombrehospital={hospital.nombrehospital}
                ciudad={hospital.ciudad}
                pais={hospital.pais}
                nombredelcontacto={hospital.nombredelcontacto}
                telefonodelcontacto={hospital.telefonodelcontacto}
                correodelcontacto={hospital.correodelcontacto}
                monto={hospital.monto} />
            )
          })}
        </React.Fragment>
      )
    }
  }

  render() {
    return (
      <React.Fragment>
        <h3>{ this.state.titulo }</h3>
        { this.renderizarHospitales() }
      </React.Fragment>
    );
  }
}

export default Hospitales;
