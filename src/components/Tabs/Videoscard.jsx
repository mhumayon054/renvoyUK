/** @format */

import React, { useEffect, useRef, useState } from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import SignLanguageOutlinedIcon from "@mui/icons-material/SignLanguageOutlined";
import SignLanguageIcon from "@mui/icons-material/SignLanguage";
import { FaEye } from "react-icons/fa";
import { FaRegThumbsUp } from "react-icons/fa";
import { FaThumbsUp } from "react-icons/fa";
import { HiDocumentDuplicate } from "react-icons/hi";

import {
  updateContentReactAsyncThunk,
  getContentsAsyncThunk,
  setLoading,
} from "../../redux/pagesSlices/contentSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  parseUrlFromModel,
  parseUrlFromModelThumbnail,
} from "../../helpers/asset";
import axios from "axios";
import { getTimeStampsAsyncThunk } from "../../redux/pagesSlices/timeStampSlice";
import { ApiRequests } from "../../service/ApiRequests";
import { Breathing, Shimmer } from "react-shimmer";
import Btnfav from "../Btnfav";

const Videoscard = ({ data }) => {
  console.log("🚀 ~ Videoscard ~ data:", data);
  const d = useDispatch();

  const userId = JSON.parse(localStorage.getItem("user"))?.id;
  let BasePath = process.env.REACT_APP_contentBasePath;
  const [timeStamps, setTimeStamps] = useState([]);
  let userIp = localStorage.getItem("userIp");

  const [isLoading, setIsLoading] = useState(true);
  const [isSafari, setIsSafari] = useState(false);
  console.log(isSafari, "Check the browser is it safari");
  const location = useLocation();

  const currentUrl = `${window.location.origin}${location.pathname}${location.search}${location.hash}`;

  useEffect(() => {
    const getTimeStampsAsync = async () => {
      try {
        const response = await ApiRequests.getTimeStamps({
          contentId: data?.id,
          populate: "contentId",
          sortBy: "name:asc",
          limit: 60,
        });
        setIsLoading(false);
        if (response.status != 200) return [];

        return await response?.data?.results;
      } catch (error) {
        console.log(error);
      }
    };

    const fetchData = async () => {
      const results = await getTimeStampsAsync();
      setTimeStamps(results);
      setIsLoading(false);
    };

    fetchData();

    const isSafariBrowser = /^((?!chrome|android).)*safari/i.test(
      navigator.userAgent
    );
    setIsSafari(isSafariBrowser);
    console.log("Safari browser " + isSafariBrowser);
  }, []);

  const videoReactionsCounts = data.reactions.reduce((counts, reaction) => {
    counts[reaction.type] = (counts[reaction.type] || 0) + 1;
    return counts;
  }, {});

  const handleReact = async (id, reactionType) => {
    try {
      const alreadyReacted = data?.reactions.some(
        (item) =>
          item.type == reactionType &&
          (item.user == userId || item.ip == userIp)
      );

      if (alreadyReacted) {
        const requestData = userId
          ? { reactionType, user: userId, ip: "" }
          : { reactionType, ip: userIp, user: "" };
        await deleteContentReact(id, requestData);
        await d(
          getTimeStampsAsyncThunk({
            contentId: data?.id,
            populate: "contentId",
            sortBy: "name:asc",
            limit: 60,
          })
        );
      } else {
        const requestData = userId
          ? { reactionType, user: userId, ip: "" }
          : { reactionType, ip: userIp, user: "" };
        await d(updateContentReactAsyncThunk({ id, requestData }));
        await d(
          Breathing,
          Image,
          getTimeStampsAsyncThunk({
            contentId: data?.id,
            populate: "contentId",
            sortBy: "name:asc",
            limit: 60,
          })
        );
      }
    } catch (error) {
      console.error("Error updating reaction:", error);
    }
  };

  async function deleteContentReact(id, requestData) {
    try {
      const response = await fetch(`${BasePath}user/contents/react/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${JSON.parse(
            localStorage.getItem("app-access-token")
          )}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          reactionType: requestData?.reactionType,
          user: requestData?.user,
          ip: requestData?.ip,
        }),
      });

      if (!response.ok) {
        throw new Error("Error deleting content reaction");
      }

      if (response.status == 200) {
        d(
          getContentsAsyncThunk({
            sortBy: "sortName:desc",
            mimeType: "video",
          })
        );
      }
      return await response.json();
    } catch (error) {
      console.error("Error deleting content reaction:", error);
      throw error;
    }
  }

  const playerRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);
  const [timePoint, setTimePoint] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [thumbnailUrl, setThumbnailUrl] = useState("");

  useEffect(() => {
    if (playerRef.current) {
      if (data?.prevStartTime && data?.prevStartTime !== "0") {
        setTimePoint(timeStringToSeconds(data?.prevStartTime));
      }
    }
  }, [data]);

  const timeStringToSeconds = (timeString) => {
    const parts = timeString.split(":");
    return (
      parseInt(parts[0], 10) * 3600 +
      parseInt(parts[1], 10) * 60 +
      parseInt(parts[2], 10)
    );
  };

  const handleLoadedMetadata = () => {
    if (playerRef.current) {
      setDuration(playerRef.current.duration);
    }
  };
  const getDefaultStartTime = () => {
    if (timeStamps && timeStamps.length >= 3) {
      return timeStringToSeconds(timeStamps[2].startTime) + 30;
    } else {
      return duration / 2;
    }
  };

  useEffect(() => {
    const startTime = getDefaultStartTime();
    if (playerRef.current) {
      playerRef.current.currentTime = startTime;
      playerRef.current.onloadeddata = () => {
        captureThumbnail(startTime);
      };
    }
  }, [timeStamps]);

  const captureThumbnail = () => {
    try {
      const canvas = document.createElement("canvas");
      canvas.width = playerRef.current.videoWidth;
      canvas.height = playerRef.current.videoHeight;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(playerRef.current, 0, 0, canvas.width, canvas.height);
      setThumbnailUrl(canvas.toDataURL());
      console.log("thumb" + thumbnailUrl);
    } catch (error) {
      return error;
    }
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (playerRef.current) {
      const startTime = getDefaultStartTime();
      playerRef.current.currentTime = startTime;

      playerRef.current.play().catch((error) => {
        playerRef.current.pause();
        console.error("Error trying to play the video:", error);
      });
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (playerRef.current) {
      playerRef.current.pause();
      const startTime = getDefaultStartTime();
      playerRef.current.currentTime = startTime;
    }
  };

  return (
    // <div className="Cards-box">
    //   <div className="Latest-tab">
    //     <Card className="p-0">
    //       <Link to={`/player/${data?.id}`} className="play_button">
    //         <div
    //           className="Card_img img_cards rounded-top overflow-hidden"
    //           onMouseEnter={handleMouseEnter}
    //           onMouseLeave={handleMouseLeave}
    //           style={{
    //             position: "relative",
    //             backgroundImage: `url(${thumbnailUrl})`,
    //             backgroundSize: "cover",
    //           }}
    //         >
    // {isLoading ? (
    //   <Shimmer width={400} height={400} />
    // ) : (
    //   <>
    //     {isSafari ? (
    //       <video
    //         ref={playerRef}
    //         playsInline={false}
    //         muted={true}
    //         autoPlay={false}
    //         loop={false}
    //         controls={false}
    //         preload="metadata"
    //         width="100%"
    //         height="100%"
    //         className="pointer-events-none h-full w-full select-none overflow-hidden object-cover"
    //       >
    //         <source
    //           src={`${parseUrlFromModel(data)}#t=0.001`}
    //           type="video/mp4"
    //         />
    //         {/* <source src={parseUrlFromModel(data)} type='video/webm' /> */}
    //       </video>
    //     ) : (
    //       <video
    //         ref={playerRef}
    //         src={parseUrlFromModel(data)}
    //         width="100%"
    //         height="100%"
    //         preload="metadata"
    //         //onLoadedMetadata={handleLoadedMetadata}
    //         muted={isMuted}
    //         style={{
    //           position: "absolute",
    //           top: 0,
    //           left: 0,
    //           objectFit: "cover",
    //         }}
    //       />
    //     )}
    //   </>
    // )}
    //         </div>
    //       </Link>

    //       <div className="px-2 card_body">
    //         <Card.Title style={{ fontSize: "18px", fontWeight: "600" }}>
    //           {data?.name ?? data?.originalName}
    //         </Card.Title>
    //         <div className="reaction-btns">
    //           <button
    //             onClick={() => handleReact(data.id, "heart")}
    //             className="Likes-btn"
    //           >
    // {data.reactions &&
    // data.reactions.some(
    //   (reaction) =>
    //     reaction.type == "heart" &&
    //     (reaction.user == userId || reaction.ip == userIp)
    // ) ? (
    //   <FaThumbsUp/>
    // ) : (
    //   <FaRegThumbsUp />
    // )}
    //           </button>
    //           <div>({videoReactionsCounts.heart || 0})</div>
    //           <button
    //             onClick={() => handleReact(data.id, "clap")}
    //             className="Likes-btn clap-btn"
    //           >
    // {data.reactions &&
    // data.reactions.some(
    //   (reaction) =>
    //     reaction.type == "clap" && reaction.user == userId
    // ) ? (
    //   <SignLanguageIcon />
    // ) : (
    //   <SignLanguageOutlinedIcon />
    // )}
    //           </button>
    //           <div>({videoReactionsCounts.clap || 0})</div>
    //           <button className="Likes-btn eye-icon ms-1">
    //             <FaEye color={`${data?.viewsCount > 0 ? "red" : "black"}`} />
    //           </button>
    //           <div>({data?.viewsCount || 0})</div>
    //           {/* {currentUrl === "http://localhost:3040/videos" ? ( */}
    //           <Btnfav data={data} />
    //           {/* ) : null} */}
    //         </div>
    //       </div>
    //     </Card>
    //   </div>
    // </div>

    <div className="videos_card">
      <Link to={`/player/${data?.id}`}>
        <div
          className="videos_card_flex"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
          }}
        >
          <div className="card_img" style={{ position: "relative" }}>
            {/* First show the image */}
            {/* {!isHovered && ( */}
            <img
              // src={parseUrlFromModelThumbnail(data)}
              src={
                `${process.env.REACT_APP_SERVER_DOMAIN_URL}${data?.thumbnailPath}` ||
                parseUrlFromModelThumbnail(data)
              }
              alt="thumbnail"
              width="100%"
              height="100%"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                objectFit: "cover",
              }}
            />
            {/* )} */}

            {/* On hover, display the video */}
            {isHovered && (
              <video
                ref={playerRef}
                playsInline={false}
                muted={true}
                autoPlay={true}
                loop={false}
                controls={false}
                preload="metadata"
                width="100%"
                height="100%"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  objectFit: "cover",
                }}
              >
                <source
                  src={`${parseUrlFromModel(data)}#t=0.001`}
                  type="video/mp4"
                />
              </video>
            )}
          </div>
        </div>
      </Link>
      <div className="heading_box">
        {/* <div className="heading_btn ">
          <HiDocumentDuplicate />
        </div> */}
        <div className="card_content">
          <h2>{data?.name ?? data?.originalName}</h2>
        </div>
      </div>
      <>
        <div className="reaction_cards">
          <div
            className="social-icons"
            onClick={() => handleReact(data.id, "heart")}
          >
            <p>{videoReactionsCounts.heart || 0}</p>
            <span>
              {data.reactions &&
              data.reactions.some(
                (reaction) =>
                  reaction.type == "heart" &&
                  (reaction.user == userId || reaction.ip == userIp)
              ) ? (
                <FaThumbsUp />
              ) : (
                <FaRegThumbsUp />
              )}
            </span>
            Likes
          </div>
          <div
            className="social-icons"
            onClick={() => handleReact(data.id, "clap")}
          >
            <p>{videoReactionsCounts.clap || 0}</p>
            <span>
              {data.reactions &&
              data.reactions.some(
                (reaction) => reaction.type == "clap" && reaction.user == userId
              ) ? (
                <SignLanguageIcon />
              ) : (
                <SignLanguageOutlinedIcon />
              )}
            </span>
            Claps
          </div>
          <div className="social-icons">
            <p>{data?.viewsCount || 0}</p>
            <span>
              <FaEye />
            </span>
            Seen
          </div>
          <div className="social-icons">
            {/* <p>5</p> */}
            <span>
              <Btnfav data={data} />
            </span>
            Favorites
          </div>
        </div>
      </>
    </div>
  );
};

export default Videoscard;

// const userAgent = navigator.userAgent.toLowerCase();
// console.log(userAgent , "user agent here")
// const isSafari = userAgent.includes("safari") && !userAgent.includes("chrome") && !userAgent.includes("android");
// setIsSafari(isSafari);
// console.log("Safari browser: " + isSafari);
