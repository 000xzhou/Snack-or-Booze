import "../static/NavBar.css";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem } from "reactstrap";

function NavBar() {
  return (
    <div>
      <Navbar expand="md">
        <NavLink exact to="/" className="navbar-brand">
          Snack or Booze
        </NavLink>

        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink to="/snacks">Snacks</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/drinks">Drinks</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/snacks/new">Add Snacks</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/drinks/new">Add Drink</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
}

export default NavBar;
