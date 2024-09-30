import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import SearchIcon from "@mui/icons-material/Search";
import Dropdown from "react-bootstrap/Dropdown";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  userLogoutAsyncThunk,
} from "../../redux/pagesSlices/authSlice";
import { useDispatch } from "react-redux";
import { FaUser } from "react-icons/fa";

const Topbar = () => {
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
    <div className="Topbar d-lg-block d-none">
      <Navbar expand="lg" className="bg-body-tertiary">
      
          {/* <img src="/images/Sidebar.png" alt="" className="Toggle-img"/> */}
          <Navbar.Brand href="" className="Navbar-logo">
            <Link to="/">
              <img src="/images/Logo.png" alt="Logo" /> <p>RPlayer</p>
            </Link>
          </Navbar.Brand>
          {/* <Form className="flex-box">
            <Form.Control type="search" placeholder="Search" className="" />
            <Button className="icon-btn">
              <SearchIcon />
            </Button>
          </Form> */}
          {/* <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="ms-auto my-2 my-lg-0" navbarScroll>

              {user?.role == "admin" && (
                <>
                  <Link to="/">
                    <button
                      className={`btn Nav-link  ${splitLocation[1] === "" ? "active" : ""
                        }`}
                    >
                      User
                    </button>
                  </Link>

                  <Link to="/admin/upload">
                    <button
                      className={`btn Nav-link  ${splitLocation[1] === "/admin/upload" ? "active" : ""
                        }`}
                    >
                      Upload
                    </button>
                  </Link>

                  <Link to="/admin/library">
                    <button
                      className={`btn Nav-link  ${splitLocation[1] === "/admin/library" ? "active" : ""
                        }`}
                    >
                      Library
                    </button>
                  </Link>

                  <Link to="/admin/reports">
                    <button
                      className={`btn Nav-link  ${splitLocation[1] === "/admin/reports" ? "active" : ""
                        }`}
                    >
                      Reports
                    </button>
                  </Link>
                </>
              )}
            </Nav>
            
          </Navbar.Collapse> */}

          <div className="Login-portion">
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                <FaUser />
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
      
      </Navbar>
    </div>
  );
};

export default Topbar;
