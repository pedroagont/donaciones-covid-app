import React from 'react';
import { Route } from 'react-router-dom';
import NuevoDonante from './components/NuevoDonante.js';
import Donantes from './components/Donantes.js';

export default [
  <React.Fragment key={"Routes"}>
      <Route exact path="/nuevo-donante" component={ NuevoDonante } ></Route>
      <Route exact path="/donantes" component={ Donantes } ></Route>
  </React.Fragment>
];