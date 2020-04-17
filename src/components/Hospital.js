import React, { Component } from 'react';
import {
  Card, CardText, CardBody, CardTitle,
} from 'reactstrap';

class Donante extends Component {
  state = {
    nombrehospital: this.props.nombrehospital,
    ciudad: this.props.ciudad,
    pais: this.props.pais,
    nombredelcontacto: this.props.nombredelcontacto,
    telefonodelcontacto: this.props.telefonodelcontacto,
    correodelcontacto: this.props.correodelcontacto,
    monto: this.props.monto,
  }

  render() {
    return (
      <Card className="mt-3" style={{ backgroundColor: '#ae51f5' }}>
        <CardBody>
          <CardTitle style={{ color: 'white' }}>{ this.state.nombrehospital }</CardTitle>
          <CardText style={{ color: 'white' }}>
            {`Ciudad: ${this.state.ciudad}
              País: ${this.state.pais}
              Contacto: ${this.state.nombredelcontacto}
              Teléfono: ${this.state.telefonodelcontacto}
              Correo: ${this.state.correodelcontacto}
              Monto: ${this.state.monto}`}
          </CardText>
        </CardBody>
      </Card>
     );
  }
}

export default Donante;
