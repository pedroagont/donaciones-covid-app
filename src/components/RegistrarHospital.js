import React, { Component } from 'react';
import {
  Col, Row, Button, Form, FormGroup, Label, Input,
} from 'reactstrap';
import axios from 'axios';


class RegistrarHospital extends Component {
  state = {
    titulo: 'Formulario para registro de hospital',
    nombrehospital: '',
    pais: '',
    ciudad: '',
    nombredelcontacto: '',
    telefonodelcontacto: '',
    correodelcontacto: '',
    cantidadGel: 0,
    cantidadJabon: 0,
    cantidadGuantes: 0,
    cantidadCubrebocas: 0,
  }

  cambiarInput = (e) => {
    console.log(e.target.value);
    switch (e.target.name) {
      case 'nombrehospital':
        this.setState({ nombrehospital: e.target.value })
        break;

      case 'pais':
        this.setState({ pais: e.target.value })
        break;

      case 'ciudad':
        this.setState({ ciudad: e.target.value })
        break;

      case 'nombredelcontacto':
        this.setState({ nombredelcontacto: e.target.value })
        break;

      case 'telefonodelcontacto':
        this.setState({ telefonodelcontacto: e.target.value })
        break;

      case 'correodelcontacto':
        this.setState({ correodelcontacto: e.target.value })
        break;

      case 'cantidadGel':
        this.setState({ cantidadGel: e.target.value })
        break;

      case 'cantidadJabon':
        this.setState({ cantidadJabon: e.target.value })
        break;

      case 'cantidadGuantes':
        this.setState({ cantidadGuantes: e.target.value })
        break;

      case 'cantidadCubrebocas':
        this.setState({ cantidadCubrebocas: e.target.value })
        break;

      default:
        break;
    }
  }

  manejarSubmit = () => {
    const jsonSend = this.state;
    const URL = 'https://donaciones-covid-api.herokuapp.com/api/v1/hospitales';
    axios.post(URL, jsonSend)
      .then(res => {
        alert('¡Hospital creado!');
        this.setState({
          nombrehospital: '',
          pais: '',
          ciudad: '',
          nombredelcontacto: '',
          telefonodelcontacto: '',
          correodelcontacto: '',
          cantidadGel: 0,
          cantidadJabon: 0,
          cantidadGuantes: 0,
          cantidadCubrebocas: 0,
        });
      })
      .catch(err => alert('Error al crear hospital'))
  };

  render() {
    return (
      <React.Fragment>
      <h3 className="mb-5">{ this.state.titulo }</h3>
      <Form>
        <Row form>
          <Col md={4}>
            <FormGroup>
              <Label for="nombrehospital">Nombre del hospital</Label>
              <Input
              value={this.state.nombrehospital}
              onChange={this.cambiarInput}
              type="text" name="nombrehospital"/>
            </FormGroup>
          </Col>
          <Col md={4}>
          <FormGroup>
            <Label for="pais">País</Label>
            <Input
            value={this.state.pais}
            onChange={this.cambiarInput}
            type="text" name="pais"/>
          </FormGroup>
          </Col>
          <Col md={4}>
          <FormGroup>
            <Label for="ciudad">Ciudad</Label>
            <Input
            value={this.state.ciudad}
            onChange={this.cambiarInput}
            type="text" name="ciudad"/>
          </FormGroup>
          </Col>
        </Row>
        <Row form>
          <Col md={4}>
            <FormGroup>
              <Label for="nombredelcontacto">Nombre del contacto</Label>
              <Input
              value={this.state.nombredelcontacto}
              onChange={this.cambiarInput}
              type="text" name="nombredelcontacto"/>
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
            <Label for="telefonodelcontacto">Teléfono del contacto</Label>
            <Input
            value={this.state.telefonodelcontacto}
            onChange={this.cambiarInput}
            type="text" name="telefonodelcontacto"/>
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for="correodelcontacto">Correo electrónico</Label>
              <Input
              value={this.state.correodelcontacto}
              onChange={this.cambiarInput}
              type="email" name="correodelcontacto"/>
            </FormGroup>
          </Col>
        </Row>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="cantidadGel">¿Cuántos galones de gel necesitas?</Label>
              <Input
              value={this.state.cantidadGel}
              onChange={this.cambiarInput}
              type="number" name="cantidadGel"/>
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="cantidadJabon">¿Cuántas cajas de jabón necesitas?</Label>
              <Input
              value={this.state.cantidadJabon}
              onChange={this.cambiarInput}
              type="number" name="cantidadJabon"/>
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="cantidadGuantes">¿Cuántas cajas de guantes necesitas?</Label>
              <Input
              value={this.state.cantidadGuantes}
              onChange={this.cambiarInput}
              type="number" name="cantidadGuantes"/>
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
            <Label for="cantidadCubrebocas">¿Cuántas cajas de cubrebocas necesitas?</Label>
            <Input
            value={this.state.cantidadCubrebocas}
            onChange={this.cambiarInput}
            type="number" name="cantidadCubrebocas"/>
            </FormGroup>
          </Col>
        </Row>
        <Button onClick={this.manejarSubmit}>Registrar</Button>
      </Form>
      </React.Fragment>

    );
  }

}

export default RegistrarHospital;
