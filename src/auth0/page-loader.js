import React from "react";

export const PageLoader = () => {
  const loadingImg = "https://cdn.auth0.com/blog/hello-auth0/loader.svg";

  return (
    <div className="loading-div">
      {/* <img src={loadingImg} alt="Loading..." /> */}

      <div className='cube-loading-outer'>
        <div className="cube-wrapper">
          <div className="cube-folding">
            <span className="leaf1"></span>
            <span className="leaf2"></span>
            <span className="leaf3"></span>
            <span className="leaf4"></span>
          </div>
          <span className="loading" data-name="Loading">LOADING</span>
        </div>
      </div>
    </div>
  );
};
