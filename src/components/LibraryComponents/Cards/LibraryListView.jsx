import React from "react";
import LibraryListCard from "./LibraryListCard.jsx";
import LibraryGridCards from "./LibraryGridCards";
import DataHeader from "../../DataHeader";

const LibraryListView = ({ data }) => {
  return (
    // <div>
    <div className="assets-list-table">
       <DataHeader data={["File Type", "Date Added"]} />

      {data?.map((Data) => {
        return <LibraryListCard key={Data?.name} data={Data} />;
      })}
    </div>
    // </div>
  );
};

export default LibraryListView;
