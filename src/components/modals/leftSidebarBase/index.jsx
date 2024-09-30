import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Offcanvas from "react-bootstrap/Offcanvas";
import { handleModel } from "../../../redux/layoutSlices/modelSlice.js";

import "./leftSidebarBase.scss";

import { useAuth0 } from "@auth0/auth0-react";

import { Link, useLocation } from "react-router-dom";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

function LeftSidebarBase({ name, ...props }) {
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props} key={props}>
      {props}
    </Tooltip>
  );

  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");

  const d = useDispatch();
  const state = useSelector(
    (state) => state.model?.modelState?.LeftSidebarBase
  );

  const modelsArgs = useSelector(
    (state) => state.model?.modelArgs?.LeftSidebarBase
  );

  const callBack = modelsArgs?.callBack;
  const closeModel = () => {
    if (callBack) callBack();
    d(handleModel({ model: "LeftSidebarBase", state: false }));
  };

  const { user } = useAuth0();
  console.log(
    "🚀 ~ file: index.jsx:29 ~ LeftSidebarBase ~ user:",
    user?.email.endsWith(".com")
  );

  const organizingRole = user?.["https://ilmiya.com/roles"] ?? [];

  {
    /*
"Owner"
"Viewer"
"Admin"
"Editor"
"Customer"
"User" */
  }

  {
    /*
Dashboard=>['Admin', 'Customer', 'Editor', 'Owner', 'User', 'Viewer']
LXP=>['Admin', 'Editor', 'Owner', 'User']
Author=>['Admin', 'Editor', 'Owner']
Center=>['Owner','Customer']
People=>['Owner', 'Admin'] 
*/
  }

  {
    /* organizingRole.includes("Admin") &&
  organizingRole.includes("Customer") &&
  organizingRole.includes("Editor") &&
  organizingRole.includes("Owner") &&
  organizingRole.includes("User") &&
  organizingRole.includes("Viewer") && */
  }

  const options = [
    {
      name: "Login",
      permissions: ["Admin", "Customer", "Editor", "Owner", "User", "Viewer"],
    },
    {
      name: "Accounts",
      permissions: ["Admin", "Customer", "Editor", "Owner", "User", "Viewer"],
    },
    {
      name: "Dashboard",
      permissions: ["Admin", "Customer", "Editor", "Owner", "User", "Viewer"],
    },
    { name: "Learn", permissions: ["Admin", "Editor", "Owner", "User"] },
    { name: "Studio", permissions: ["Admin", "Editor", "Owner"] },
    // { name: "Center", permissions: ["Owner", "Customer"] },
    { name: "People", permissions: ["Owner", "Admin"] },
    { name: "Admin", permissions: ["Admin"] },
    { name: "Teacher", permissions: ["Teacher"] },
    { name: "Analytics", permissions: ["Owner"] },
    // Add more options as needed
  ];

  // Filter the options based on the user's permissions
  // const filteredOptions = options.filter((option) =>
  //   option.permissions.some((permission) => organizingRole.includes(permission))
  // );

  const filteredOptions = options.filter(
    (option) =>
      option.permissions.some((permission) =>
        organizingRole.includes(permission)
      ) &&
      (option.name !== "Login" || !user?.email.endsWith(".com"))
  );

  // console.log(
  //   "🚀 ~ file: index.jsx:78 ~ LeftSidebarBase ~ filteredOptions:",
  //   filteredOptions
  // );


  const [show, setShow] = useState(state);

  useEffect(() => {
    setShow(state);
  }, [state]);

  const overlayStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    display: show ? "block" : "none",
    zIndex: 1040, // Ensure it's above Offcanvas
  };

  return (
    <>
      <div
        style={overlayStyle}
        onClick={() => {
          closeModel();
        }}
      />
      <Offcanvas
        className="left-side-menu"
        show={state}
        onHide={closeModel}
        {...props}
        backdrop={false}
        placement="start"
      >
        <Offcanvas.Body>
          {filteredOptions?.map((option) => (
            <a
              // href={redirect_uris[option.name]}
              key={option.name}
              target="_blank"
            >
              <div className="nav-item">
                {/* {icons[option.name]} */}
                <h6>{option.name}</h6>
              </div>
            </a>
          ))}
          <Link to="/collections">
              <div
                className="nav-link">
                <i className="fa-light fa-grid-2"></i>
                <h6>Collections</h6>
              </div>
          </Link>

          <Link to="/indexes">
              <div
                className={`nav-link  ${
                  splitLocation[1] === "indexes" ? "active" : ""
                }`}
              >
                <i className="fa-light fa-box"></i>
                <h6>Indexes</h6>
              </div>
          </Link>

          <Link to="/sections">
            <OverlayTrigger
              placement="right"
              delay={{ show: 250, hide: 400 }}
              overlay={renderTooltip("Sections")}
            >
              <div
                className={`nav-link  ${
                  splitLocation[1] === "sections" ? "active" : ""
                }`}
              >
                <i className="fa-light fa-image-user"></i>
                <h6>Sections</h6>
              </div>
            </OverlayTrigger>
          </Link>

          <Link to="/quiz">
            <OverlayTrigger
              placement="right"
              delay={{ show: 250, hide: 400 }}
              overlay={renderTooltip("Quiz")}
            >
              <div
                className={`nav-link  ${
                  splitLocation[1] === "quiz" ? "active" : ""
                }`}
              >
                <i className="fa-light fa-pen-to-square"></i>
                <h6>Quiz</h6>
              </div>
            </OverlayTrigger>
          </Link>

          <Link to="/admin/library">
            <OverlayTrigger
              placement="right"
              delay={{ show: 250, hide: 400 }}
              overlay={renderTooltip("Library")}
            >
              <div
                className={`nav-link  ${
                  splitLocation[1] === "library" ? "active" : ""
                }`}
              >
                <i className="fa-light fa-calendar"></i>
                <h6>Library</h6>
              </div>
            </OverlayTrigger>
          </Link>

          <Link to="/catalogs">
            <OverlayTrigger
              placement="right"
              delay={{ show: 250, hide: 400 }}
              overlay={renderTooltip("Catalogs")}
            >
              <div
                className={`nav-link  ${
                  splitLocation[1] === "catalogs" ? "active" : ""
                }`}
              >
                <i className="fa-light fa-chart-column"></i>
                <h6>Catalogs</h6>
              </div>
            </OverlayTrigger>
          </Link>

          <Link to="/resources">
            <OverlayTrigger
              placement="right"
              delay={{ show: 250, hide: 400 }}
              overlay={renderTooltip("Resources")}
            >
              <div
                className={`nav-link  ${
                  splitLocation[1] === "resources" ? "active" : ""
                }`}
              >
                <i className="fa-light fa-credit-card"></i>
                <h6>Resources</h6>
              </div>
            </OverlayTrigger>
          </Link>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
export default LeftSidebarBase;
