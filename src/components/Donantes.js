import React, { Component } from 'react';
import axios from 'axios';
import Donante from './Donante';

class Donantes extends Component {
  state = {
    titulo: "Donantes",
    donantes: [],
  };

  // El componente se montó
  componentDidMount() {
    const URL = 'https://donaciones-covid-api.herokuapp.com/api/v1/donantes';
    axios.get(URL)
      .then(response => {
        console.log('🥎' , response.data);
        const donantes = response.data;
        this.setState({ donantes });
      })
      .catch(err => console.log(err));
  }

  renderizarDonantes() {
    const { donantes } = this.state;
    if (donantes.length === 0) {
      return <span>Cargando donantes...</span>
    } else if (donantes.length > 0) {
      // ¿Cómo itero y muestro cada elemento de mi arreglo de donantes?
      return (
        <React.Fragment>
          <span>Se encontraron {donantes.length} donantes</span>
          { donantes.map(donante => {
            return (
              <Donante
                nombre={donante.nombre}
                ciudad={donante.ciudad}
                pais={donante.pais}
                correo={donante.correo}
                donaciones={donante.donaciones} />
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
        { this.renderizarDonantes() }
      </React.Fragment>
    );
  }
}

export default Donantes;
