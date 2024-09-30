import axios from "axios";
import { useEffect, useState } from "react";
import Videoscard from "../components/Tabs/Videoscard";
import PaginationCompo from "../components/pagination/PaginationCompo";
import NoDataFound from "../components/NoDataFound";

const Favorite = () => {
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
              favorite: true,
              mimeType: "video",  
              sortBy: "name:asc"   // Sort by name in ascending order


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
   
      {Array.isArray(contents) ? (
        contents.map((content) => 
          <div className="col-lg-4 col-md-4 col-sm-6 mb-4">
        <Videoscard data={content} />
        </div>)
      ) : (
        // <p>No favorite content available.</p>
        <NoDataFound/>
     )} 
     {contents.length > 10 && <PaginationCompo/>}

    </div>
  );
};

export default Favorite;
