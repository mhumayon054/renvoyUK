import React from "react";
import Videoscard from "./Videoscard";

const Latest = ({ collection: data }) => {
console.log("🚀 ~ Latest ~ data:", data)

  // if status is private i don't want to show this
  // let filterData = data.filter(item => item.status !== 'private');
  // console.log("🚀 ~ Latest ~ filterData:", filterData)
  return (
    <>
      <div className="col-lg-4 col-md-4 col-sm-6 mb-4 gap-3">
        <Videoscard data={data} />
      </div>
    </>
  );
};

export default Latest;
