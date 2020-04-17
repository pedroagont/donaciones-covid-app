import React from 'react';
import { Route } from 'react-router-dom';
import Articulos from './components/Articulos';
// import RegistrarHospital from './components/RegistrarHospital';
import Hospitales from './components/Hospitales';
// import Donar from './components/Donar';
import Donantes from './components/Donantes';

export default [
  <React.Fragment key={"Routes"}>
    <Route exact path="/articulos" component={ Articulos } ></Route>
    <Route exact path="/hospitales" component={ Hospitales } ></Route>
    <Route exact path="/donantes" component={ Donantes } ></Route>
  </React.Fragment>
];
