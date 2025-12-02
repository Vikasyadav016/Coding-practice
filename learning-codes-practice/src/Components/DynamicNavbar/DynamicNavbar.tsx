import { Navbar, Nav, Container, Button, OverlayTrigger, Popover } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import useLogout from "../../CommonLogout";
import { AuthService } from "../../Services/authServices";
import { useState } from "react";
import { getRoleName } from "../../Utilities/helperFunction";

const DynamicNavbar = ({
  brand = "MyApp",
  logo = null,
  menuItems = [],
  variant = "dark",
  bg = "dark",
}) => {
  const { Logout } = useLogout();
  const userDetails = AuthService.getUser();

  const [showProfile, setShowProfile] = useState(false);
  const [target, setTarget] = useState<any>(null);

  const handleProfileClick = (e: any) => {
    setShowProfile(!showProfile);
    setTarget(e.target);
  };

  const avatarLetter = userDetails?.name
    ? userDetails.name.charAt(0).toUpperCase()
    : "?";

  return (
    <div className="landing-page">
      <Navbar
        collapseOnSelect
        expand="lg"
        bg={bg}
        className="shadow-sm"
        variant={variant}
        fixed="top"
      >
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

            {userDetails && (
              <OverlayTrigger
                trigger="click"
                placement="bottom"
                show={showProfile}
                target={target}
                overlay={
                  <Popover id="profile-popover" style={{ minWidth: "200px" }}>
                    <Popover.Header as="h6">Login as Role: - <strong>{getRoleName(userDetails.role)}</strong></Popover.Header>
                    <Popover.Body>
                      <div className="text-center">
                        <div
                          style={{
                            width: "70px",
                            height: "70px",
                            borderRadius: "50%",
                            backgroundColor: "#0d6efd",
                            color: "white",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            fontSize: "24px",
                            margin: "0 auto 10px auto",
                          }}
                        >
                          {avatarLetter}
                        </div>

                        <strong>{userDetails.name}</strong>
                        <br />
                        <small className="text-muted">{userDetails.email}</small>

                        <hr />
                        <Button variant="danger" size="sm" onClick={Logout} className="w-100">
                          Logout
                        </Button>
                      </div>
                    </Popover.Body>
                  </Popover>
                }
              >
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    backgroundColor: "#fff",
                    color: "#0d6efd",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontWeight: "bold",
                    cursor: "pointer",
                    marginLeft: "15px",
                  }}
                  onClick={handleProfileClick}
                >
                  {avatarLetter}
                </div>
              </OverlayTrigger>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default DynamicNavbar;
