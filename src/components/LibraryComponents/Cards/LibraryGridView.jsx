import React from "react";
import LibraryGridCards from "./LibraryGridCards.jsx";

const LibraryGridView = ({ data }) => {
  return (
    <div>
      <div className="assets-grid-section">
        <div className="row">
          {data?.map((Data) => {
            return <LibraryGridCards key={Data?.name} data={Data} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default LibraryGridView;
