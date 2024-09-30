import React, { useEffect, useState, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Button, Tab, Tabs } from "react-bootstrap";
// import NewHeader from "../components/newHeader.jsx";
// import LeftSideBar from "../components/LeftSideBar.jsx";
// import ContentModelBody from "../components/modals/contentModel/contentModelBody.jsx";
import LeftSidebarBase from "../components/modals/leftSidebarBase/index.jsx";
import { Dropdown, Modal, Form } from "react-bootstrap";
// import LibraryListView from "../components/LibraryComponents/Cards/LibraryListView.jsx";
// import LibraryGridView from "../components/LibraryComponents/Cards/LibraryGridView.jsx";
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
import Headertabs from "../components/headertabs";

import Box from "@mui/material/Box";
// import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Latest from "../components/Tabs/Latest.jsx";
import Topview from "../components/Tabs/Top-view";
import Allvideos from "../components/Tabs/Allvideos";
import { Link } from "react-router-dom";
import { getMyLinksAsyncThunk } from "../redux/pagesSlices/linkSlice.js";

AOS.init();
export default function Library() {
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
          sortBy: "sortName:desc",
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
      <div className="App_flex_box">
        <div className="flex-grow-1">
          <div className="Tabs">
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

                <div className="row Trending">
                  <PaginationCompo
                    fetchInitialData={false}
                    Card={Latest}
                    asyncThunk={getContentsAsyncThunk}
                    reducer={"contents"}
                    dataKey={"contents"}
                    limitArray={[10, 20, 30, 40, 50]}
                    dotRange={5}
                    action={"getContentsAsyncThunk"}
                    contents = {false}
                  />
                </div>
              </TabContext>
            </Box>

            {/* NEW TABS */}
            {/* <div className="Users-Tabs">
              <Tabs
                defaultActiveKey="Latest Videos"
                id="justify-tab-example"
                className="mb-3"
                justify
              >
                <Tab eventKey="Latest Videos" title="Latest Videos">
                  <div className="row Trending mt-5">
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
                  </div>
                </Tab>
                <Tab eventKey="See All Video" title="See All Video">
                  <div className="row Trending mt-5">
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
                  </div>
                </Tab>
              </Tabs>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}
