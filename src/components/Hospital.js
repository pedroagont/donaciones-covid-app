import React, { Component } from 'react';
import {
  Card, CardTitle, CardText
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
      <Card className="my-3" body outline color="primary">
        <CardTitle className="font-weight-bold text-primary">{ this.state.nombrehospital.toUpperCase() }</CardTitle>
        <CardText className="font-weight-bold">Ciudad: <span className="font-weight-light">{ this.state.ciudad }</span></CardText>
        <CardText className="font-weight-bold">País: <span className="font-weight-light">{ this.state.pais }</span></CardText>
        <CardText className="font-weight-bold">Contacto: <span className="font-weight-light">{ this.state.nombredelcontacto }</span></CardText>
        <CardText className="font-weight-bold">Teléfono: <span className="font-weight-light">{ this.state.telefonodelcontacto }</span></CardText>
        <CardText className="font-weight-bold">Correo: <span className="font-weight-light">{ this.state.correodelcontacto }</span></CardText>
        <CardText className="font-weight-bold">Monto: <span className="font-weight-light">$ { this.state.monto } MXN</span></CardText>
      </Card>
     );
  }
}

export default Donante;
