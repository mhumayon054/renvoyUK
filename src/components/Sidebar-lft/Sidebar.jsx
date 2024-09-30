/** @format */

import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";
import { useSelector, useDispatch } from "react-redux";
import { getContentsAsyncThunk } from "../../redux/pagesSlices/contentSlice";

const Sidebar = () => {
  const dispatch = useDispatch();
  const getYoutubeVideos = useSelector((s) => s?.links?.myLink?.totalResults);
  const getContentsVideos = useSelector((s) => s?.contents?.contents);

  const location = useLocation();

  let user = JSON.parse(localStorage.getItem("user"));

  // .........................................................................>
  const paginationParams = useSelector((s) => s?.contents?.contents);

  const serverParams = useSelector((state) => state?.contents?.contents);
  const [currentPage, setCurrentPage] = useState(paginationParams?.page || 1);

  useEffect(() => {
    setCurrentPage(paginationParams.page);
  }, [paginationParams]);

  // Pagination Functions
  const handleClickPage = (pageNumber) => {
    setCurrentPage(pageNumber);
    dispatch(
      getContentsAsyncThunk({
        limit: 10,
        page: pageNumber,
        mimeType: "video",
      })
    );
  };

  let dotRange = 5;

  const renderPagination = () => {
    const pages = [];
    const startPage = Math.max(1, currentPage - Math.floor(dotRange / 2));
    const endPage = Math.min(
      paginationParams?.totalPages,
      startPage + dotRange - 1
    );

    // Add First Page button
    if (startPage > 1) {
      pages.push(
        <button
          key={1}
          onClick={() => {
            handleClickPage(1);
          }}
        >
          1
        </button>
      );
      if (startPage > 2) {
        pages.push(<span>...</span>);
      }
    }

    // Add pages within the range
    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => {
            handleClickPage(i);
          }}
          className={currentPage === i ? "active" : ""}
          style={{
            margin: "0 5px",
            border: "none",
            padding: "5px 10px",
            cursor: "pointer",
          }}
        >
          {i}
        </button>
      );
    }

    // Add Last Page button
    if (endPage < paginationParams?.totalPages) {
      if (endPage < paginationParams?.totalPages - 1) {
        pages.push(
          <button disabled style={{ cursor: "default" }}>
            ...
          </button>
        );
      }
      pages.push(
        <button
          key={paginationParams?.totalPages}
          onClick={() => {
            handleClickPage(paginationParams?.totalPages);
          }}
        >
          {paginationParams?.totalPages}
        </button>
      );
    }

    return pages;
  };

  const renderPaginationDropdown = () => {
    const pages = [];
    const startPage = Math.max(1, currentPage - Math.floor(dotRange / 2));
    const endPage = Math.min(
      paginationParams?.totalPages,
      startPage + dotRange - 1
    );

    for (let i = 1; i <= paginationParams?.totalPages; i++) {
      pages.push(
        <option key={i} value={i}>
          {i}
        </option>
      );
    }

    return (
      <select
        value={currentPage}
        onChange={(e) => handleClickPage(Number(e.target.value))}
        style={{
          padding: "5px 10px",
          border: "1px solid #ccc",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        {pages}
      </select>
    );
  };

  return (
    <div style={{ height: "100%" }}>
      <div
        className="d-lg-flex d-none"
        style={{ height: "100%", overflow: "hidden initial", zIndex: "-1" }}
      >
        <CDBSidebar textColor="#fff" backgroundColor="#333">
          <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
            {/* <img src="/images/Logo.png" alt="Logo" className="sidebar-imgs"/> */}
          </CDBSidebarHeader>

          <CDBSidebarContent className="sidebar-content">
            <CDBSidebarMenu>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "activeClicked" : "")}
              >
                <CDBSidebarMenuItem icon="house">Home</CDBSidebarMenuItem>
              </NavLink>
              <NavLink
                to="/mostplayed"
                className={({ isActive }) => (isActive ? "activeClicked" : "")}
              >
                <CDBSidebarMenuItem icon="repeat">
                  {/* Videos ({getContentsVideos?.totalResults || 0}) */}
                  Most Played
                </CDBSidebarMenuItem>
              </NavLink>
              <NavLink
                to="/favorites"
                className={({ isActive }) => (isActive ? "activeClicked" : "")}
              >
                <CDBSidebarMenuItem icon="heart">
                  {/* Videos ({getContentsVideos?.totalResults || 0}) */}
                  Favorites
                </CDBSidebarMenuItem>
              </NavLink>
              <NavLink
                to="/youtube"
                className={({ isActive }) => (isActive ? "activeClicked" : "")}
              >
                <CDBSidebarMenuItem icon="play">
                  Youtube ({getYoutubeVideos || 0})
                </CDBSidebarMenuItem>
              </NavLink>
              <NavLink
                to="/videos"
                className={({ isActive }) => (isActive ? "activeClicked" : "")}
              >
                <CDBSidebarMenuItem icon="video">
                  Videos ({getContentsVideos?.totalResults || 0})
                </CDBSidebarMenuItem>
              </NavLink>

              <NavLink
                to="/toprated"
                className={({ isActive }) => (isActive ? "activeClicked" : "")}
              >
                <CDBSidebarMenuItem icon="star">
                  {/* Videos ({getContentsVideos?.totalResults || 0}) */}
                  Top Rated
                </CDBSidebarMenuItem>
              </NavLink>

              <NavLink
                to="/recentlyadded"
                className={({ isActive }) => (isActive ? "activeClicked" : "")}
              >
                <CDBSidebarMenuItem icon="clock">
                  {/* Videos ({getContentsVideos?.totalResults || 0}) */}
                  Recently Added
                </CDBSidebarMenuItem>
              </NavLink>

              <NavLink
                to="/random"
                className={({ isActive }) => (isActive ? "activeClicked" : "")}
              >
                <CDBSidebarMenuItem icon="random">
                  {/* Videos ({getContentsVideos?.totalResults || 0}) */}
                  Random
                </CDBSidebarMenuItem>
              </NavLink>

              <NavLink
                to="/perfomer"
                className={({ isActive }) => (isActive ? "activeClicked" : "")}
              >
                {user && user?.googleId && (
                  <CDBSidebarMenuItem icon="microphone">
                    Performer
                  </CDBSidebarMenuItem>
                )}
              </NavLink>

              {/* Pagination Controls */}
              {/* {location?.pathname === "/videos" ? (
                <>
                  <div className='sidebar_pagination'>
                    {renderPaginationDropdown()}
                  </div>
                </>
              ) : (
                <></>
              )} */}
            </CDBSidebarMenu>
          </CDBSidebarContent>

          <CDBSidebarFooter style={{ textAlign: "start" }}>
            {/* <div className="Login-portion">
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                <FaUser />
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {user && <Button>{user?.name || user?.username}</Button>}
                {user ? (
                  <Button>Logout</Button>
                ) : (
                  <Link to="/login">
                    <Button>Login</Button>
                  </Link>
                )}
              </Dropdown.Menu>
            </Dropdown>
          </div> */}
          </CDBSidebarFooter>
        </CDBSidebar>
      </div>
    </div>
  );
};

export default Sidebar;
