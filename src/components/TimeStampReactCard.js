import React from "react";

import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { parseUrlFromModel } from "../helpers/asset";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";

import SignLanguageOutlinedIcon from "@mui/icons-material/SignLanguageOutlined";
import SignLanguageIcon from "@mui/icons-material/SignLanguage";
import { Button } from "react-bootstrap";
import { toast } from "react-toastify";

import { useDispatch, useSelector } from "react-redux";

import {
  getTimeStampsAsyncThunk,
  updateTimeStampReactAsyncThunk,
} from "../redux/pagesSlices/timeStampSlice";


const TimeStampReactCard = ({
  key,
  item,
  i,
}) => {
  const userId = JSON.parse(localStorage.getItem("user"))?.id;
  let BasePath = process.env.REACT_APP_contentBasePath;

  let user = JSON.parse(localStorage.getItem("user"));

  const d = useDispatch();

  // Calculate total counts
  const totalCounts = item.reactions.reduce((counts, reaction) => {
    counts[reaction.type] = (counts[reaction.type] || 0) + 1;
    return counts;
  }, {});

  const handleReact = async (id, reactionType, contentId) => {
    console.log("calllllllllllll", id, reactionType, contentId);
    try {
      if (!userId) {
        return;
      }

      const alreadyReacted = item?.reactions.some(
        (item) => item.type == reactionType && item.user == userId
      );
      console.log("🚀 ~ handleReact ~ alreadyReacted:", alreadyReacted);

      if (alreadyReacted) {
        await deleteContentReact(id, reactionType, contentId);
      } else {
        await d(
          updateTimeStampReactAsyncThunk({
            id,
            data: { reactionType },
            contentId,
          })
        );
      }
    } catch (error) {
      console.error("Error updating reaction:", error);
    }
  };

  async function deleteContentReact(id, data, contentId) {
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
        d(getTimeStampsAsyncThunk({ contentId: contentId, populate: "contentId", limit :60 }));
        // toast.success("Reaction Deleted Successfully!");
      }
      return await response.json();
    } catch (error) {
      console.error("Error deleting content reaction:", error);
      throw error;
    }
  }

  let ServerDomain = process.env.REACT_APP_SERVER_DOMAIN_URL;

  return (
    <div className="col-xl-3 col-lg-4 col-sm-6 mb-4" key={key}>
      <div className="Cards-box">
        <div className="Latest-tab">
          <Card style={{ boxShadow: "0px 0px 12px 6px rgba(0, 0, 0, 0.1)" }}>
            <div className="Card_img">
              <img
                // src={
                //   parseUrlFromModel(item?.thumbnail)
                //     ? parseUrlFromModel(item?.thumbnail)
                //     : "images/Card-thumbnail.png"
                // }

                src={
                  item && item?.chapterThunbnail
                    ? `${ServerDomain}${item?.chapterThunbnail
                      .split("/")
                      .pop()}`
                    : "images/Card-thumbnail.png"
                }
              />




            </div>
            <Card.Body>
              <h2>
                {item?.name ?? item?.originalName}
              </h2>

              <div className="reaction-btns">
                <button
                  onClick={() => handleReact(item.id, "heart", item.contentId.id)}
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
                  onClick={() => handleReact(item.id, "clap", item.contentId.id)}
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
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default TimeStampReactCard;
