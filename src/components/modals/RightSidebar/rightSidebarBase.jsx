import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import Offcanvas from "react-bootstrap/Offcanvas";
import ResourceCreateAndUpdate from "../../ResourceCreateAndUpdate.jsx";

import IndexCreateAndUpdate from "../../IndexCreateAndUpdate";
import CollectionCreateAndUpdate from "../../CollectionCreateAndUpdate.jsx";

import { handleModel } from "../../../redux/layoutSlices/modelSlice.js";
import CourseCreateOption from "../../CourseCreateOption.jsx";
import CreateAiCourse from "../../CreateAiCourse.jsx";
import PaymentSideBar from "../../PaymentSideBar.jsx";

function RightSidebarBase({ name, ...props }) {
  const state = useSelector(
    (state) => state.model?.modelState?.RightSidebarBase
  );
  console.log(
    "🚀 ~ file: rightSidebarBase.jsx:19 ~ RightSidebarBase ~ state:",
    state
  );
  const d = useDispatch();
  const modelsArgs = useSelector(
    (state) => state.model?.modelArgs?.RightSidebarBase
  );
  console.log(
    "🚀 ~ file: rightSidebarBase.jsx:24 ~ RightSidebarBase ~ modelsArgs:",
    modelsArgs
  );
  const callBack = modelsArgs?.callBack;
  const closeModel = () => {
    if (callBack) callBack();
    d(handleModel({ model: "RightSidebarBase", state: false }));
  };

  return (
    <>
      <Offcanvas show={state} onHide={closeModel} {...props} placement="end">
        <Offcanvas.Body>
          {/* index create and update */}
          {modelsArgs?.resource == "couse_options" && (
            <CourseCreateOption onHide={closeModel} />
          )}
          {/* Collection create and update */}
          {modelsArgs?.resource == "collection" && (
            <CollectionCreateAndUpdate onHide={closeModel} />
          )}
          {/* Index create and update */}
          {modelsArgs?.resource == "catalogue" && (
            <IndexCreateAndUpdate onHide={closeModel} />
          )}
          {/* Resource create and update */}
          {modelsArgs?.resource == "resource" && (
            <ResourceCreateAndUpdate onHide={closeModel} />
          )}
          {/* AI create and update */}
          {modelsArgs?.resource == "aicollection" && (
            <CreateAiCourse onHide={closeModel} />
          )}
          {/* Payment SideBar */}
          {modelsArgs?.resource == "PaymentSideBar" && (
            <PaymentSideBar onHide={closeModel} />
          )}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
export default RightSidebarBase;
