import React from "react";
import { useSelector } from "react-redux";
// import Confirmation from "./Confirmation";
import ContentModal from "./contentModel";
// import CreateComponent from "./CreateComponent";
// import CreateSection from "./CreateSection";
// import RightSidebarBase from "./RightSidebar/rightSidebarBase";
// import EdifyResultModel from "./EdifyResultModel.jsx";
// import AssignStudentModel from "./assignStudentModel";
// import AssignClassModel from "./assignClassModel";
// import CopyCourseModel from "./copyCourseModel.jsx";
// import CreateCourse from "./CreateCourse.jsx";
// import IndexCreateAndUpdate from "./CreateAndUpdate.jsx";
// import DeleteModel from "./DeleteModel.jsx";

export default function Index() {
  const user = useSelector((s) => s.auth.user);

  return (
    <>
      {/* <CreateCourse /> */}
      <ContentModal />
      {/* <DeleteModel /> */}
      {/* <CreateSection /> */}
      {/* <CreateComponent /> */}
      {/* <IndexCreateAndUpdate /> */}
      {/* <Confirmation /> */}
      {/* {user ?  */}
      {/* <RightSidebarBase /> */}
      {/* <EdifyResultModel /> */}
      {/* <AssignStudentModel /> */}
      {/* <AssignClassModel /> */}
      {/* <CopyCourseModel /> */}
      {/* : ""} */}
    </>
  );
}
