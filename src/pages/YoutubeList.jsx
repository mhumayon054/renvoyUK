import React, { useEffect, useState } from "react";
import PaginationCompo from '../components/pagination/PaginationCompo'

import {getMyLinksAsyncThunk} from "../redux/pagesSlices/linkSlice"
import { useSelector,useDispatch } from "react-redux";
import Youtube from "../components/Youtube";
const YoutubeList = () => {

    const [searchTerm, setSearchTerm] = useState("");

    const links = useSelector((s) => s?.links?.myLink) ?? {};
    const d = useDispatch();
    useEffect(() => {
      setTimeout(() => {
        d(
            getMyLinksAsyncThunk({
            page: 1,
            // ...(searchTerm && { name: searchTerm }),
          })
        );
      }, 1000);
    }, []);



  return (
   
    <div className="row Trending mt-5 px-3">
    <PaginationCompo
      fetchInitialData={false}
      Card={Youtube}
      asyncThunk={getMyLinksAsyncThunk}
      reducer={"links"}
      dataKey={"myLink"}
      limitArray={[10, 20, 30, 40, 50]}
      dotRange={5}
      action={"getMyLinksAsyncThunk"}
      
    />
    </div>


  )
}

export default YoutubeList
