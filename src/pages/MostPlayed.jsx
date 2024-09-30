// /** @format */

// import React, { useEffect, useState, useRef } from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import { useDispatch, useSelector } from 'react-redux';
// import PaginationCompo from '../components/pagination/PaginationCompo.js';
// import { getContentsAsyncThunk } from '../redux/pagesSlices/contentSlice.js';
// import Box from '@mui/material/Box';
// import TabContext from '@mui/lab/TabContext';
// import Latest from '../components/Tabs/Latest.jsx';

// AOS.init();

// const MostPlayed = () => {
//   const [value, setValue] = React.useState('1');
//   const [searchTerm, setSearchTerm] = useState('');
//   const dispatch = useDispatch();

//   // Fetch contents
//   useEffect(() => {
//     dispatch(
//       getContentsAsyncThunk({
//         populate: 'thumbnail',
//         mimeType: 'video',
//         sortBy: 'sortName:desc',
//         page: 1,
//         ...(searchTerm && { name: searchTerm }),
//       })
//     );
//   }, [dispatch, searchTerm]);

//   // Get filtered contents from Redux store
//   //   const contents = useSelector((state) =>
//   //     state.contents.contents.results.filter((video) => video.viewsCount > 200)
//   //   );

//   return (
//     <div className='App_flex_box'>
//       <div className='flex-grow-1'>
//         <div className='Tabs'>
//           <Box sx={{ width: '100%', typography: 'body1' }}>
//             <TabContext value={value}>
//               <div className='row Trending'>
//                 <PaginationCompo
//                   fetchInitialData={false}
//                   Card={Latest}
//                   asyncThunk={getContentsAsyncThunk}
//                   reducer={'contents'}
//                   dataKey={'contents'}
//                   limitArray={[10, 20, 30, 40, 50]}
//                   dotRange={5}
//                   action={'getContentsAsyncThunk'}
//                   contents={true}
//                   //contents={contents} // Pass the filtered data
//                 />
//               </div>
//             </TabContext>
//           </Box>
//           {/* most played  */}

//           {/* | most played */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MostPlayed;

import axios from "axios";
import { useEffect, useState } from "react";
import Videoscard from "../components/Tabs/Videoscard";
import PaginationCompo from "../components/pagination/PaginationCompo";
import NoDataFound from "../components/NoDataFound";


const MostPlayed = () => {
  const [contents, setContents] = useState([]);
  console.log("🚀 ~ Favorite ~ contents:", contents);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_contentBasePath}contents`,
          {
            params: {
              mimeType: "video",  // Filter by mimeType 'video'
              sortBy: "viewsCount:desc",   // Sort by views in descending order

            },
          }
        );
        setContents(response?.data?.results);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchContent();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="row">
      {
      Array.isArray(contents) ? (
        contents.map((content) => 
          <div className="col-lg-4 col-md-4 col-sm-6 mb-4">
            <Videoscard key={content.id} data={content} />
            </div>
            )
      ) : (
        <NoDataFound/>
      )}
      {contents.length > 10 && <PaginationCompo />}
    </div>
  );
};

export default MostPlayed;


