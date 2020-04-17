import React, { Component } from 'react';
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from 'reactstrap';
import axios from 'axios';

class NuevoDonante extends Component {
  state = {
    name: '',
    email: '',
    city: '',
    country: '',
  }

  cambiarInput = (e) => {
    console.log(e.target.value);
    switch (e.target.name) {
      case 'name':
        this.setState({ nombre: e.target.value })
        break;

      case 'email':
        this.setState({ email: e.target.value })
        break;

      case 'city':
        this.setState({ city: e.target.value })
        break;

      case 'country':
        this.setState({ country: e.target.value })
        break;

      default:
        break;
    }
  }

  manejarSubmit = () => {
    const jsonSend = this.state;
    const URL = 'https://supermercado-devf.herokuapp.com/api/v1/articulos';
    axios.post(URL, jsonSend)
      .then(res => alert('¡Nuevo donante inscrito!'))
      .catch(err => alert('Error al registrar donante'))
  };

  render() {
    return (
      <React.Fragment>
        <h3>Inscripción para donantes</h3>

        <Form>
          <FormGroup>
            <Label>Nombre</Label>
            <Input
              value={this.state.name}
              onChange={this.cambiarInput}
              type="text"
              name="nombre" />
          </FormGroup>
          <FormGroup>
            <Label>Correo</Label>
            <Input
              value={this.state.email}
              onChange={this.cambiarInput}
              type="email"
              name="correo" />
          </FormGroup>
          <FormGroup>
            <Label>Ciudad</Label>
            <Input
              value={this.state.city}
              onChange={this.cambiarInput}
              type="text"
              name="ciudad" />
          </FormGroup>
          <FormGroup>
            <Label>País</Label>
            <Input
              value={this.state.country}
              onChange={this.cambiarInput}
              type="text"
              name="país" />
          </FormGroup>
          <Button onClick={this.manejarSubmit}>Registrarme</Button>
        </Form>

      </React.Fragment>
    );
  }
}

export default NuevoDonante;