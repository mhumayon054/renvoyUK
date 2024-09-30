import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import SignLanguageOutlinedIcon from "@mui/icons-material/SignLanguageOutlined";
import SignLanguageIcon from "@mui/icons-material/SignLanguage";
import { FaEye } from "react-icons/fa";

import {
  getMyLinksAsyncThunk,
  deleteLinkAsyncThunk,
  updateLinkReactAsyncThunk,
} from "../../redux/pagesSlices/linkSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

const YoutubeCard = ({ data }) => {
  // console.log("🚀 ~ YoutubeCard ~ data:", data);
  const d = useDispatch();
  const userId = JSON.parse(localStorage.getItem("user"))?.id;
  let BasePath = process.env.REACT_APP_contentBasePath;

  // Calculate total counts
  const totalCounts = data.reactions.reduce((counts, reaction) => {
    counts[reaction.type] = (counts[reaction.type] || 0) + 1;
    return counts;
  }, {});

  const handleReact = async (id, reactionType) => {
    try {
      if (!userId) {
        return;
      }

      const alreadyReacted = data?.reactions.some(
        (item) => item.type == reactionType && item.user == userId
      );
      console.log("🚀 ~ handleReact ~ alreadyReacted:", alreadyReacted);

      if (alreadyReacted) {
        await deleteContentReact(id, reactionType);
      } else {
        await d(updateLinkReactAsyncThunk({ id, data: { reactionType } }));
      }
    } catch (error) {
      console.error("Error updating reaction:", error);
    }
  };

  async function deleteContentReact(id, data) {
    console.log("🚀 ~ deleteContentReact ~ id, data:", id, data);
    try {
      const response = await fetch(`${BasePath}/link/react/${id}`, {
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
        d(
          getMyLinksAsyncThunk({
            // sortBy: "updatedAt:desc",
            // mimeType: "video",
          })
        );
        // toast.success("Reaction Deleted Successfully!");
      }
      return await response.json();
    } catch (error) {
      console.error("Error deleting content reaction:", error);
      throw error;
    }
  }

  let ServerDomain = process.env.REACT_APP_SERVER_DOMAIN_URL;
  // console.log("🚀 ~ Videoscard ~ ServerDomain:", ServerDomain)
  // console.log(
  //     data && data?.thumbnailPath
  //       ? `${ServerDomain}${data?.thumbnailPath
  //           .split("/")
  //           .pop()}`
  //       : "images/Card-thumbnail.png"
  // )
  return (
    <div className="Cards-box">
      <div className="Latest-tab">
        <Card>

        {/* {data?.name == "google drive" ? (
              <a href={data?.link} target="_blank" rel="noopener noreferrer">
                <button className="btn play_button">Play</button>
              </a>
            ) : (
              <Link to={`/youtube/${data?.id}`} className="play_button">
                Play
              </Link>
            )} */}
              <Link to={`/youtube/${data?.id}`} className="play_button">

          <div className="Card_img">
          <img
              src={
                data && data.name === "youtube" && data.thumbnailPath
                  // ? `${ServerDomain}${data.thumbnailPath.split("/").pop()}`
                  ? `${data.thumbnailPath}`
                  : data.name === "google drive"
                  ? "images/Google_Drive_logo.png"
                  : "images/Card-thumbnail.png"
              }
              alt=""
            />
            <Card.Title>
              {data?.title ?? data?.name ?? data?.originalName}
            </Card.Title>
          </div>
          </Link>


          <Card.Body>
            
            {/* Display reaction buttons */}
            <div className="reaction-btns">
              <button
                onClick={() => handleReact(data.id, "heart")}
                className="Likes-btn"
              >
                {data.reactions &&
                data.reactions.some(
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
                onClick={() => handleReact(data.id, "clap")}
                className="Likes-btn clap-btn"
              >
                {data.reactions &&
                data.reactions.some(
                  (reaction) =>
                    reaction.type === "clap" && reaction.user === userId
                ) ? (
                  <SignLanguageIcon />
                ) : (
                  <SignLanguageOutlinedIcon />
                )}
              </button>
              <div>({totalCounts.clap || 0})</div>

              <button className="Likes-btn eye-icon ms-1">
                <FaEye />
              </button>
              <div>({data?.viewsCount || 0})</div>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default YoutubeCard;
