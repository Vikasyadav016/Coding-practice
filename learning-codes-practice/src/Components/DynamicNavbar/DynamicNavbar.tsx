import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const DynamicNavbar = ({
  brand = "MyApp",
  logo = null,
  menuItems = [],
  variant = "dark",
  bg = "dark",
}) => {
  return (
    <div className="landing-page">
    <Navbar collapseOnSelect expand="lg" bg={bg} className="shadow-sm" variant={variant} fixed="top">
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          {logo ? (
            <img
              src={logo}
              alt="logo"
              height="30"
              className="d-inline-block align-top me-2"
            />
          ) : null}
          {brand}
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            {menuItems.map((item: any, index: number) => (
              <NavLink
                key={index}
                to={item.path}
                end
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active fw-bold" : ""}`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
};

export default DynamicNavbar;
