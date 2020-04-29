import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavLink,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

const Navigation = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Donaciones COVID</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink>
                <Link to="/articulos">Artículos Disponibles</Link>
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Hospitales
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <Link to="/registrar-hospital">Registrar Hospital</Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to="/hospitales">Hospitales Registrados</Link>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Donaciones
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <Link to="/donar">Hacer Donación</Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to="/donantes">Ver Donantes</Link>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navigation;
