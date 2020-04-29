import React, { Component } from 'react';
import {
  Card, CardTitle, CardText
} from 'reactstrap';
import axios from 'axios';

class Donante extends Component {
  state = {
    nombre: this.props.nombre,
    ciudad: this.props.ciudad,
    pais: this.props.pais,
    correo: this.props.correo,
    donaciones: this.props.donaciones,
    foto: undefined,
  }

  // El componente se montó
  componentDidMount() {
    const URL_RANDOM_USER = 'https://randomuser.me/api/';
    axios.get(URL_RANDOM_USER)
      .then(response => {
        // console.log(response.data.results[0].picture);
        let foto = response.data.results[0].picture.large;
        this.setState({ foto });
      })
      .catch(err => console.log(err));
  }

  renderizarFoto() {
    const { foto } = this.state;

    return(
      <React.Fragment>
        <img src={ foto } alt="Random user" className="img-thumbnail rounded"/>
      </React.Fragment>
    );
  }

  render() {
    return (
        <Card className="my-3 mx-3 d-inline-block text-center" body outline color="primary">
          { this.renderizarFoto() }
          <CardTitle className="font-weight-bold text-primary">{ this.state.nombre.toUpperCase() }</CardTitle>
          <CardText className="font-weight-bold">Ciudad: <span className="font-weight-light">{ this.state.ciudad }</span></CardText>
          <CardText className="font-weight-bold">País: <span className="font-weight-light">{ this.state.pais }</span></CardText>
          <CardText className="font-weight-bold">Correo: <span className="font-weight-light">{ this.state.correo }</span></CardText>
          <CardText className="font-weight-bold">Ha donado: <span className="font-weight-light">$ { this.state.donaciones } MXN</span></CardText>
        </Card>
     );
  }
}

export default Donante;
