import React, { useEffect, useState, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
// import NewHeader from "../components/newHeader";
import Headertabs from "../components/headertabs";
// import LeftSideBar from "../components/LeftSideBar.jsx";
import ContentModelBody from "../components/modals/contentModel/contentModelBody";
import Sidebar from "../components/Sidebar-lft/Sidebar";
// import LeftSidebarBase from "../components/modals/leftSidebarBase";

AOS.init();
export default function Upload() {
  return (
    <div id="listner-div">
      {/* <div className="Sidebar" >
          <Sidebar />
        </div> */}
      {/* <LeftSidebarBase /> */}
      <div className="content-body">
        {/* <NewHeader /> */}
        {/* <Headertabs /> */}
        <div className="content-modal ">
          <ContentModelBody />
        </div>
      </div>
    </div>
  );
}
