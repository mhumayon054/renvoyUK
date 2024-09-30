import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getContentsAsyncThunk } from "../redux/pagesSlices/contentSlice.js";
import Videoscard from "../components/Tabs/Videoscard.jsx";
import NoDataFound from "../components/NoDataFound";


const Random = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [shuffledContents, setShuffledContents] = useState([]);
  const dispatch = useDispatch();
  const contents = useSelector((state) => state?.contents?.contents) ?? [];

  useEffect(() => {
    dispatch(
      getContentsAsyncThunk({
        populate: "thumbnail",
        mimeType: "video",
        sortBy: "sortName:desc",
        page: 1,
        ...(searchTerm && { name: searchTerm }),
      })
    );
  }, [searchTerm, dispatch]);

  useEffect(() => {
    if (contents?.results) {
      setShuffledContents(shuffleArray([...contents.results]));
    }
  }, [contents]);

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  return (
    <div className="row">
      {Array.isArray(shuffledContents) && shuffledContents.length > 0 ? (
        shuffledContents.map((content) => (
          <div className="col-lg-4 col-md-4 col-sm-6 mb-4">
          <Videoscard key={content.id} data={content} />
          </div>
        ))
      ) : (
        <NoDataFound/>
)}
    </div>
  );
};

export default Random;
