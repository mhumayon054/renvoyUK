import React from "react";

const DataHeader = ({ data }) => {
  return (
    <div className="assets-table-head">
      <div className="row">
        {/* <div className="col-lg-1">
          <div className="table-row">
            <div className="table-data">
              <p>
                <i className="fa-light fa-star"></i>
              </p>
            </div>
          </div>
        </div> */}
        <div className="col-lg-4 col-4">
          <div className="table-row">
            <div className="table-data">
              <p>Name</p>
              <i className="fa-solid fa-arrow-down"></i>
            </div>
          </div>
        </div>
        <div className="col-lg-8 col-8">
          <div className="table-row">
            {data?.map((item) => (
              <div className="table-data">
                <p>{item}</p>
                <i className="fa-solid fa-arrow-down"></i>
              </div>
            ))}
            {/* <div className="table-data">
              <p>Date Added</p>
              <i className="fa-solid fa-arrow-down"></i>
            </div> */}
            {/* <div className="table-data">
                  <p>Total Question</p>
                  <i className="fa-solid fa-arrow-down"></i>
                </div> */}
            <div className="table-data">
              <p>Action</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataHeader;
