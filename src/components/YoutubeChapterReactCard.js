import { React, useState } from "react";

import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { parseUrlFromModel } from "../helpers/asset";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";

import SignLanguageOutlinedIcon from "@mui/icons-material/SignLanguageOutlined";
import SignLanguageIcon from "@mui/icons-material/SignLanguage";

import { FaEye } from "react-icons/fa";

import { Button } from "react-bootstrap";
import { toast } from "react-toastify";

import { useDispatch, useSelector } from "react-redux";

import {
  getTimeStampsAsyncThunk,
  updateYouTimeStampReactAsyncThunk,
} from "../redux/pagesSlices/timeStampSlice";

const YoutubeChapterReactCard = ({
  key,
  item,
  i,
  handleChapterClick,
  data
}) => {
  const userId = JSON.parse(localStorage.getItem("user"))?.id;
  const [isActive, setIsActive] = useState(false);
  let BasePath = process.env.REACT_APP_contentBasePath;

  let user = JSON.parse(localStorage.getItem("user"));

  const d = useDispatch();

  // Calculate total counts
  const totalCounts = item.reactions.reduce((counts, reaction) => {
    counts[reaction.type] = (counts[reaction.type] || 0) + 1;
    return counts;
  }, {});

  const handleReact = async (id, reactionType, linkId) => {
    console.log("calllllllllllll", id, reactionType, linkId);
    try {
      if (!userId) {
        return;
      }

      const alreadyReacted = item?.reactions.some(
        (item) => item.type == reactionType && item.user == userId
      );
      console.log("🚀 ~ handleReact ~ alreadyReacted:", alreadyReacted);

      if (alreadyReacted) {
        await deleteContentReact(id, reactionType, linkId);
      } else {
        await d(
          updateYouTimeStampReactAsyncThunk({
            id,
            data: { reactionType },
            linkId,
          })
        );
      }
    } catch (error) {
      console.error("Error updating reaction:", error);
    }
  };

  async function deleteContentReact(id, data, linkId) {
    try {
      const response = await fetch(`${BasePath}/timestamp/react/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${JSON.parse(
            localStorage.getItem("app-access-token")
          )}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ reactionType: data }),
      });

      if (!response.ok) {
        throw new Error("Error deleting content reaction");
      }

      if (response.status == 200) {
        d(getTimeStampsAsyncThunk({ linkId: linkId }));
        // toast.success("Reaction Deleted Successfully!");
      }
      return await response.json();
    } catch (error) {
      console.error("Error deleting content reaction:", error);
      throw error;
    }
  }

  const handleCardClick = () => {
    setIsActive(!isActive);
  };

  let ServerDomain = process.env.REACT_APP_SERVER_DOMAIN_URL;

  return (
    // <div className="col-xl-3 col-lg-4 col-sm-6 mb-4" key={key}>
    //   <div className="Cards-box">
    //     <div className="Latest-tab">
    //       <Card style={{ boxShadow: "0px 0px 12px 6px rgba(0, 0, 0, 0.1)" }}>
    //         <div className="Card_img">
    //           <img
    //             // src={
    //             //   parseUrlFromModel(item?.thumbnail)
    //             //     ? parseUrlFromModel(item?.thumbnail)
    //             //     : "images/Card-thumbnail.png"
    //             // }

    //             src={
    //               item && item?.chapterThunbnail
    //                 ? `${ServerDomain}${item?.chapterThunbnail
    //                   .split("/")
    //                   .pop()}`
    //                 : "images/Card-thumbnail.png"
    //             }
    //           />




    //         </div>
    //         <Card.Body>
    //           <h2>
    //             {item?.name ?? item?.originalName}
    //           </h2>

    // <div className="reaction-btns">
    //   <button
    //     onClick={() => handleReact(item.id, "heart", item.contentId.id)}
    //     className="Likes-btn"
    //   >
    //     {item.reactions &&
    //       item.reactions.some(
    //         (reaction) =>
    //           reaction.type === "heart" && reaction.user === userId
    //       ) ? (
    //       <FavoriteOutlinedIcon />
    //     ) : (
    //       <FavoriteBorderOutlinedIcon />
    //     )}
    //   </button>
    //   <div>({totalCounts.heart || 0})</div>
    //   <button
    //     onClick={() => handleReact(item.id, "clap", item.contentId.id)}
    //     className="Likes-btn clap-btn"
    //   >
    //     {item.reactions &&
    //       item.reactions.some(
    //         (reaction) =>
    //           reaction.type === "clap" && reaction.user === userId
    //       ) ? (
    //       <SignLanguageIcon />
    //     ) : (
    //       <SignLanguageOutlinedIcon />
    //     )}
    //   </button>
    //   <div>({totalCounts.clap || 0})</div>
    // </div>
    //         </Card.Body>
    //       </Card>
    //     </div>
    //   </div>
    // </div>
    <div className="col-xl-3 col-md-4 col-sm-6">
      <div className="f-container">
        <div className="collection-outer-body" style={{ width: "100%"}}>

          {/* <div > */}
          <div
              className="assets-table-body"
              style={{ backgroundColor: isActive ? "#e1e1e1" : "#fff", padding: "12px 11px" }}
              onClick={handleCardClick}
            >
            <div className="row">
              <div className="col-xxl-7 col-sm-5 col-7">
                <div className="table-row"
                  onClick={() => handleChapterClick(item)}
                >
                  <div className="table-data" style={{justifyContent:"flex-start"}}>

                    {/* Image pop up  */}
                    <button className="btn-image">
                      <img
                        src={
                          item && item?.chapterThunbnail
                            ? `${ServerDomain}${item?.chapterThunbnail
                              .split("/")
                              .pop()}`
                            : "images/Card-thumbnail.png"
                        }
                        alt="Your Image" className="me-1" />
                    </button>
                    <div className="popup-image">
                      <img
                        src={
                          item && item?.chapterThunbnail
                            ? `${ServerDomain}${item?.chapterThunbnail
                              .split("/")
                              .pop()}`
                            : "images/Card-thumbnail.png"
                        }
                        alt="Your Image" />
                    </div>


                    <h3 style={{ fontSize: "14px" }}>
                      {item?.name ?? item?.originalName}
                    </h3>
                  </div>
                </div>
              </div>
              <div className="col-xxl-5 col-md-7 col-sm-6 col-5 pe-2">
                <div className="table-row">
                  <div className="table-data">
                    <div className="reaction-btns">
                      <button
                        onClick={() => handleReact(item.id, "heart", item.linkId)}
                        className="Likes-btn"
                      >
                        {item.reactions &&
                          item.reactions.some(
                            (reaction) =>
                              reaction.type === "heart" && reaction.user === userId
                          ) ? (
                          <FavoriteOutlinedIcon />
                        ) : (
                          <FavoriteBorderOutlinedIcon />
                        )}
                      </button>
                      <div>({totalCounts.heart || 0})</div>
                      <button
                        onClick={() => handleReact(item.id, "clap", item.linkId)}
                        className="Likes-btn clap-btn"
                      >
                        {item.reactions &&
                          item.reactions.some(
                            (reaction) =>
                              reaction.type === "clap" && reaction.user === userId
                          ) ? (
                          <SignLanguageIcon />
                        ) : (
                          <SignLanguageOutlinedIcon />
                        )}
                      </button>
                      <div>({totalCounts.clap || 0})</div>
                      <button
                        className="Likes-btn eye-icon ms-1" style={{ color: "black" }}>
                        <FaEye />
                      </button>
                      <div>({data?.viewsCount || 0})</div>
                    </div>
                  </div>

                  {/* <div className="table-data content_box">

                  </div> */}
                </div>
              </div>
            </div>
          </div>

          {/* </div> */}




        </div>
      </div>
    </div>
  );
};

export default YoutubeChapterReactCard;
