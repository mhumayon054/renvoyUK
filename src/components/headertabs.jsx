import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";

AOS.init();
export default function HeaderTabs() {
  const d = useDispatch();
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");

  return (
    <div className="top-tabs">
      <div className="">
        <Link to="/">
          <button
            className={`btn tabs-links  ${
              splitLocation[1] === "" ? "active" : ""
            }`}
          >
            Upload
          </button>
        </Link>

        <Link to="/admin/library">
          <button
            className={`btn tabs-links  ${
              splitLocation[1] === "library" ? "active" : ""
            }`}
          >
            Library
          </button>
        </Link>

        <Link to="/admin/reports">
          <button
            className={`btn tabs-links  ${
              splitLocation[1] === "reports" ? "active" : ""
            }`}
          >
            Reports
          </button>
        </Link>

        <Link to="/">
          <button
            className={`btn tabs-links  ${
              splitLocation[1] === "f-library" ? "active" : ""
            }`}
          >
            User
          </button>
        </Link>
      </div>
    </div>
  );
}
