
// import React, { useEffect, useState, useRef } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { Button, Tab, Tabs } from "react-bootstrap";
// // import NewHeader from "../components/newHeader.jsx";
// // import LeftSideBar from "../components/LeftSideBar.jsx";
// // import ContentModelBody from "../components/modals/contentModel/contentModelBody.jsx";
// import LeftSidebarBase from "../components/modals/leftSidebarBase/index.jsx";
// import { Dropdown, Modal, Form } from "react-bootstrap";
// // import LibraryListView from "../components/LibraryComponents/Cards/LibraryListView.jsx";
// // import LibraryGridView from "../components/LibraryComponents/Cards/LibraryGridView.jsx";
// import {
//   createContentAsyncThunk,
//   getContentsAsyncThunk,
// } from "../redux/pagesSlices/contentSlice.js";
// import { useDispatch } from "react-redux";
// import { useSelector } from "react-redux";
// import FLibraryListCard from "../components/LibraryComponents/Cards/FLibraryListCard.jsx";
// import FLibraryGridCards from "../components/LibraryComponents/Cards/FLibraryGridCards.jsx";
// import PaginationCompo from "../components/pagination/PaginationCompo.js";
// import ListHeader from "./ListHeader.jsx";
// import DataHeader from "../components/DataHeader.jsx";
// import Headertabs from "../components/headertabs";

// import Box from "@mui/material/Box";
// // import Tab from "@mui/material/Tab";
// import TabContext from "@mui/lab/TabContext";
// import TabList from "@mui/lab/TabList";
// import TabPanel from "@mui/lab/TabPanel";
// import Latest from "../components/Tabs/Latest.jsx";
// import Topview from "../components/Tabs/Top-view";
// import Allvideos from "../components/Tabs/Allvideos";
// import { Link } from "react-router-dom";
// import { getMyLinksAsyncThunk } from "../redux/pagesSlices/linkSlice.js";

// AOS.init();
// const RecentlyAdded = () => {
//     const [value, setValue] = React.useState("1");

//     const [isListView, setIsListView] = useState(true);
//     const [searchTerm, setSearchTerm] = useState("");
//     const fileRef = useRef(null);
  
//     const toggleView = () => {
//       setIsListView(!isListView);
//     };
//     const contents = useSelector((s) => s?.contents?.contents) ?? {};
//     const d = useDispatch();
//     useEffect(() => {
//       setTimeout(() => {
//         d(
//           getContentsAsyncThunk({
//             populate: "thumbnail",
//             mimeType: "video",
//             // sortBy: "updatedAt:desc",
//             sortBy: "createdAt:desc",
//             page: 1,
//             ...(searchTerm && { name: searchTerm }),
//           })
//         );
//         d(
//           getMyLinksAsyncThunk({
//           page: 1,
//           // ...(searchTerm && { name: searchTerm }),
//         })
//       );
//       }, 1000);
//     }, [searchTerm]);
  
//     const onSubmit = (e) => {
//       const formData = new FormData();
//       const file = e.target.files;
//       if (file.length) {
//         for (let i = 0; i < file.length; i++) {
//           formData.append("files", file[i]);
//         }
//       } else {
//         return;
//       }
//       d(
//         createContentAsyncThunk({
//           data: formData,
//           callBack: () => {
         
//           },
//           options: {
           
//           },
//         })
//       );
//     };
//     return (
     
//       <>
//         <div className="App_flex_box">
//           <div className="flex-grow-1">
//             <div className="Tabs">
            
//               <Box sx={{ width: "100%", typography: "body1" }}>
//                 <TabContext value={value}>
//                   {/* <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
//                     <TabList aria-label="lab API tabs example">
//                       <div className="assets-header-section">
//                         <div className="assets-top-filter">
//                           <div className="row">
//                             <div className="col-lg-12">
//                               <div className="search-assets">
//                                 <Form.Control
//                                   onChange={(e) => setSearchTerm(e.target.value)}
//                                   type="text"
//                                   placeholder="Search"
//                                 />
//                                 <i className="fa-solid fa-magnifying-glass"></i>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </TabList>
//                   </Box> */}
  
//                   <div className="row Trending">
//                     <PaginationCompo
//                       fetchInitialData={false}
//                       Card={Latest}
//                       asyncThunk={getContentsAsyncThunk}
//                       reducer={"contents"}
//                       dataKey={"contents"}
//                       limitArray={[10, 20, 30, 40, 50]}
//                       dotRange={5}
//                       action={"getContentsAsyncThunk"}
                     
//                     />
//                   </div>
//                 </TabContext>
//               </Box>
  
//               {/* NEW TABS */}
//               {/* <div className="Users-Tabs">
//                 <Tabs
//                   defaultActiveKey="Latest Videos"
//                   id="justify-tab-example"
//                   className="mb-3"
//                   justify
//                 >
//                   <Tab eventKey="Latest Videos" title="Latest Videos">
//                     <div className="row Trending mt-5">
//                       <PaginationCompo
//                         fetchInitialData={false}
//                         Card={Latest}
//                         asyncThunk={getContentsAsyncThunk}
//                         reducer={"contents"}
//                         dataKey={"contents"}
//                         limitArray={[10, 20, 30, 40, 50]}
//                         dotRange={5}
//                         action={"getContentsAsyncThunk"}
//                       />
//                     </div>
//                   </Tab>
//                   <Tab eventKey="See All Video" title="See All Video">
//                     <div className="row Trending mt-5">
//                       <PaginationCompo
//                         fetchInitialData={false}
//                         Card={Latest}
//                         asyncThunk={getContentsAsyncThunk}
//                         reducer={"contents"}
//                         dataKey={"contents"}
//                         limitArray={[10, 20, 30, 40, 50]}
//                         dotRange={5}
//                         action={"getContentsAsyncThunk"}
//                       />
//                     </div>
//                   </Tab>
//                 </Tabs>
//               </div> */}
//             </div>
//           </div>
//         </div>
//       </>
//     );
// }

// export default RecentlyAdded
import axios from "axios";
import { useEffect, useState } from "react";
import Videoscard from "../components/Tabs/Videoscard";
import PaginationCompo from "../components/pagination/PaginationCompo";
import NoDataFound from "../components/NoDataFound";

const RecentlyAdded = () => {
  const [contents, setContents] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_contentBasePath}contents`, {
            params: {
              mimeType: "video",  // Filter by mimeType 'video'
              sortBy: "name:asc"   // Sort by name in ascending order
            }
          }
        );
        setContents(response.data.results);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchContent();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="row">
      {Array.isArray(contents) ? (
        contents.map((content) => 
          <div className="col-lg-4 col-md-4 col-sm-6 mb-4" key={content.id}>
            <Videoscard data={content} />
          </div>
        )
      ) : (
        <NoDataFound />
      )}
      {contents.length > 10 && <PaginationCompo />}
    </div>
  );
};

export default RecentlyAdded;
