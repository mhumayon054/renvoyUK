import { React, useState } from "react";
import {
  Button,
  Container,
  Navbar,
  Dropdown,
  Offcanvas,
  Form,
} from "react-bootstrap";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { userLogoutAsyncThunk } from "../../redux/pagesSlices/authSlice";
import { useDispatch } from "react-redux";
import SearchIcon from "@mui/icons-material/Search";

const Topbar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleLinkClick = () => {
    handleClose();
  };

  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");

  const dispatch = useDispatch();
  const router = useNavigate();

  let user = JSON.parse(localStorage?.getItem("user"));
  console.log("🚀 ~ Topbar ~ user:", user);
  const handleLogout = () => {
    console.log("callllllllllllllllllllllllllll");
    dispatch(
      userLogoutAsyncThunk({
        cb: () => {
          router("/login");
        },
      })
    );
  };
  return (
    <div className="Topbar d-lg-none">
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          {/* <div className="Responsive-flex"> */}
          <Button
            variant="light"
            onClick={handleShow}
            className="Offcanvas-btn"
          >
            <img src="/images/toggle.png" alt="" />
          </Button>

          <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>
                <img src="/images/Logo.png" alt="Logo" />
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <div className="offcanvas-flex">
                <>
                  <Link to="/" onClick={handleLinkClick}>
                    <button className="btn Nav-link">Home</button>
                  </Link>

                  <Link to="/mostplayed" onClick={handleLinkClick}>
                    <button className="btn Nav-link">Most Played</button>
                  </Link>

                  <Link to="/favorites" onClick={handleLinkClick}>
                    <button className="btn Nav-link">Favorites</button>
                  </Link>

                  <Link to="/youtube" onClick={handleLinkClick}>
                    <button className="btn Nav-link">Youtube</button>
                  </Link>

                  <Link to="/videos" onClick={handleLinkClick}>
                    <button className="btn Nav-link">Videos</button>
                  </Link>
                  <Link to="/toprated" onClick={handleLinkClick}>
                    <button className="btn Nav-link">Top Rated</button>
                  </Link>
                  <Link to="/recentlyadded" onClick={handleLinkClick}>
                    <button className="btn Nav-link">Recently Added</button>
                  </Link>
                  <Link to="/random" onClick={handleLinkClick}>
                    <button className="btn Nav-link">Random</button>
                  </Link>
                </>
              </div>
            </Offcanvas.Body>
          </Offcanvas>

          <Navbar.Brand href="" className="Navbar-logo">
            <Link to="/">
              <img src="/images/Logo.png" alt="Logo" /> <p>RPlayer</p>
            </Link>
          </Navbar.Brand>
          {/* </div> */}

          <div className="Login-portion">
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                <AccountCircleIcon />
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {user && <Button>{user?.name || user?.username}</Button>}
                {user ? (
                  <Button onClick={handleLogout}>Logout</Button>
                ) : (
                  <Link to="/login">
                    <Button>Login</Button>
                  </Link>
                )}
              </Dropdown.Menu>
            </Dropdown>
          </div>

          <Form className="flex-box">
            <Form.Control type="search" placeholder="Search" className="" />
            <Button className="icon-btn">
              <SearchIcon />
            </Button>
          </Form>
        </Container>
      </Navbar>
    </div>
  );
};

export default Topbar;
