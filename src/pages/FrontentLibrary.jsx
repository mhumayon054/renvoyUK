import React, { useEffect, useState, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Button, Tab, Tabs } from "react-bootstrap"
// import NewHeader from "../components/newHeader.jsx";
// import LeftSideBar from "../components/LeftSideBar.jsx";
import ContentModelBody from "../components/modals/contentModel/contentModelBody.jsx";
import LeftSidebarBase from "../components/modals/leftSidebarBase/index.jsx";
import { Dropdown, Modal, Form } from "react-bootstrap";
import LibraryListView from "../components/LibraryComponents/Cards/LibraryListView.jsx";
import LibraryGridView from "../components/LibraryComponents/Cards/LibraryGridView.jsx";
import {
  createContentAsyncThunk,
  getContentsAsyncThunk,
} from "../redux/pagesSlices/contentSlice.js";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import FLibraryListCard from "../components/LibraryComponents/Cards/FLibraryListCard.jsx";
import FLibraryGridCards from "../components/LibraryComponents/Cards/FLibraryGridCards.jsx";
import PaginationCompo from "../components/pagination/PaginationCompo.js";
import ListHeader from "./ListHeader.jsx";
import DataHeader from "../components/DataHeader.jsx";
import Headertabs from "../components/headertabs.jsx";
import {getMyLinksAsyncThunk} from "../redux/pagesSlices/linkSlice"

import Box from "@mui/material/Box";
// import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Latest from "../components/Tabs/Latest.jsx";
import Topview from "../components/Tabs/Top-view.jsx";
import Allvideos from "../components/Tabs/Allvideos.jsx";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar-lft/Sidebar.jsx";
import Youtube from "../components/Youtube/index.js";

AOS.init();
export default function Home() {
  const [value, setValue] = React.useState("1");

  const [isListView, setIsListView] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const fileRef = useRef(null);

  const toggleView = () => {
    setIsListView(!isListView);
  };
  const contents = useSelector((s) => s?.contents?.contents) ?? {};
  const d = useDispatch();
  useEffect(() => {
    setTimeout(() => {
      d(
        getContentsAsyncThunk({
          populate: "thumbnail",
          mimeType: "video",
          // sortBy: "updatedAt:desc",
          // sortBy: "name:ase",
          sortBy: "slug:asc",
          page: 1,
          ...(searchTerm && { name: searchTerm }),
        })
      );
      d(
        getMyLinksAsyncThunk({
        page: 1,
        // ...(searchTerm && { name: searchTerm }),
      })
    );
    }, 1000);
  }, [searchTerm]);

  const onSubmit = (e) => {
    const formData = new FormData();
    const file = e.target.files;
    if (file.length) {
      for (let i = 0; i < file.length; i++) {
        formData.append("files", file[i]);
      }
    } else {
      return;
    }
    d(
      createContentAsyncThunk({
        data: formData,
        callBack: () => {
          // setTimeout(() => {
          //   setProgress(0);
          // }, 1000);
          // setFile([]);
        },
        options: {
          // headers: {
          //   "Content-Type": "multipart/form-data",
          // },
          // onUploadProgress: (progressEvent) => {
          //   const percentCompleted = Math.round(
          //     (progressEvent.loaded * 100) / progressEvent.total
          //   );
          //   setProgress(percentCompleted);
          //   //
          // },
          // onDownloadProgress: (progressEvent) => {
          //   const progress =
          //     50 + (progressEvent.loaded / progressEvent.total) * 50;
          //   console.log("progress:onDownloadProgress::", progress);
          //   setProgress(progress);
          // },
        },
      })
    );
  };
  return (
    // <div id="listner-div">
    //   <LeftSidebarBase />
    //   <div className="content-body">
    //       <div style={{padding:'0px 30px'}} className="content-modal">
    //         <ContentModelBody />
    //     </div>
    //   </div>
    // </div>
    <>
      <div className="">
        {/* <div className="Sidebar" >
          <Sidebar contents={contents} />
        </div> */}
        <div>
          <div className="Tabs p-0">
            {/* <Link to="/channel" className="flex-box-five">
              <div>
                <img src="images/Music.jpg" alt="" className="profile-img" />
              </div>
              <div className="channel-details">
                <p className="name">Channel name</p>
                <p className="subscribers">Subsribers</p>
              </div>
            </Link> */}
            <Box sx={{ width: "100%", typography: "body1" }}>
              <TabContext value={value}>
                {/* <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                  <TabList aria-label="lab API tabs example">
                    <div className="assets-header-section">
                      <div className="assets-top-filter">
                        <div className="row">
                          <div className="col-lg-12">
                            <div className="search-assets">
                              <Form.Control
                                onChange={(e) => setSearchTerm(e.target.value)}
                                type="text"
                                placeholder="Search"
                              />
                              <i className="fa-solid fa-magnifying-glass"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabList>
                </Box> */}

                <div className="bg-gradiant">
                  <div className="content-box">
                    <img src="images/Rectangle.jpeg" alt="" />
                    {/* <h1>
                      RPlayer
                    </h1>
                    <div className="flex-action">
                      <p>
                        Action
                      </p>
                      <p>
                        2023
                      </p>
                      <p>
                        2 h 20 min
                      </p>
                    </div>
                    <p className="content">In the 1820s, a frontiersman, Hugh Glass, sets out on a path of vengeance against those who left him for dead after</p>
                    <Button>
                      Watch Video
                    </Button> */}
                  </div>
                </div>
                {/* <div className="row Trending">
                  <h1>
                    Trending videos
                  </h1>
                  <PaginationCompo
                    fetchInitialData={false}
                    Card={Latest}
                    asyncThunk={getContentsAsyncThunk}
                    reducer={"contents"}
                    dataKey={"contents"}
                    limitArray={[10, 20, 30, 40, 50]}
                    dotRange={5}
                    action={"getContentsAsyncThunk"}
                  />
                </div> */}
              </TabContext>
            </Box>

            {/* NEW TABS */}
           
          </div>
        </div>
      </div>
    </>
  );
}
