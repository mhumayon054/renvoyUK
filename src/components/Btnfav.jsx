import React, { useState } from "react";
import axios from "axios";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";

const Btnfav = ({ data }) => {
  const [fav, setFav] = useState(data?.favorite);

  const contentId = data?.id;
  const apiUrl = `${process.env.REACT_APP_contentBasePath}user/contents/${contentId}`;

  const handleUpdateFavorite = async () => {
    const updatedFav = !fav;
    setFav(updatedFav);

    try {
      const response = await axios.patch(
        apiUrl,
        { favorite: String(updatedFav) },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Update successful:", response.data);
    } catch (error) {
      // Revert the favorite state if the request fails
      setFav(fav);
      console.error("There was a problem with the axios request:", error);
    }
  };

  return (
    <div>
      <button
        onClick={handleUpdateFavorite}
        style={{ background: "none", border: "none", cursor: "pointer" }}
        className="Likes-btn ps-1"
      >
        {fav ? <FavoriteOutlinedIcon /> : <FavoriteBorderOutlinedIcon />}
      </button>
    </div>
  );
};

export default Btnfav;
