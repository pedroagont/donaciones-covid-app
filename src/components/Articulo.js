import React, { Component } from 'react';
import {
  Card, CardText, CardBody, CardTitle,
} from 'reactstrap';

class Articulo extends Component {
  state = {
    nombre: this.props.nombre,
    precio: this.props.precio,
  }

  render() {
    return (
      <Card className="mt-3" style={{ backgroundColor: '#ae51f5' }}>
        <CardBody>
          <CardTitle style={{ color: 'white' }}>{ this.state.nombre }</CardTitle>
          <CardText style={{ color: 'white' }}>
            {`Precio: ${this.state.precio}`}
          </CardText>
        </CardBody>
      </Card>
     );
  }
}

export default Articulo;
