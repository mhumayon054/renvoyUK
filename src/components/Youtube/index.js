import React from "react";
import YoutubeCard from "./YoutubeCard.jsx";

const Youtube = ({ collection: data }) => {

  return (
    <>
      <div className="col-xxl-2 col-lg-3 col-md-4 col-sm-6 mb-3">
        <YoutubeCard data={data} />
      </div>
    </>
  );
};

export default Youtube;
