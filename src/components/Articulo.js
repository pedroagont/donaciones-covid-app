import React, { Component } from 'react';
import {
  Card, CardTitle, CardText
} from 'reactstrap';


class Articulo extends Component {
  state = {
    nombre: this.props.nombre,
    precio: this.props.precio,
  }

  render() {
     return (
        <Card className="my-3" body outline color="primary">
          <CardTitle className="font-weight-bold text-primary">{ this.state.nombre.toUpperCase() }</CardTitle>
          <CardText className="font-weight-bold">Precio: <span className="font-weight-light">${ this.state.precio } MXN</span></CardText>
        </Card>
    );
  }
}

export default Articulo;
