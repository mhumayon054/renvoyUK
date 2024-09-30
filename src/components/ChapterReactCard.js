import { React, useEffect, useRef, useState } from "react";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import SignLanguageOutlinedIcon from "@mui/icons-material/SignLanguageOutlined";
import SignLanguageIcon from "@mui/icons-material/SignLanguage";

import { FaEye, FaRepeat } from "react-icons/fa";
import RefreshIcon from "@mui/icons-material/Refresh";

import { useDispatch } from "react-redux";
import {
  getTimeStampsAsyncThunk,
  updateTimeStampReactAsyncThunk,
} from "../redux/pagesSlices/timeStampSlice";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";

const ChapterReactCard = ({
  key,
  item,
  i,
  handleChapterClick,
  data,
  active,
  handleRepeatChapter,
  repeated,
  timeStamps,
  ip,
  introUrl,
}) => {
  // console.log("IP address is", ip)
  console.log("🚀 ~ 11111111111111111111111:", timeStamps);
  // const [isActive, setIsActive] = useState(false);
  let BasePath = process.env.REACT_APP_contentBasePath;
  let params = useParams();

  const [playIntroTill, setPlayIntroTill] = useState(0);
  const [startTime, setStartTime] = useState(0);
  // const [currentTime, setCurrentTime] = useState(0);
  // const [playStateChange, setPlayStateChange] = useState(false);

  useEffect(() => {
    // console.log("start time = ", timeStringToSeconds(item.startTime))
    setPlayIntroTill(
      timeStringToSeconds(item.startTime) + Number(item.introTime)
    );
    setStartTime(timeStringToSeconds(item?.startTime) ?? 0);
  }, []);

  const d = useDispatch();

  const thumbnailRef = useRef(null);
  const playerRef = useRef(null);
  const intervalRef = useRef(null);

  // Calculate total counts
  // console.log(item);
  const totalCounts = item.reactions.reduce((counts, reaction) => {
    counts[reaction.type] = (counts[reaction.type] || 0) + 1;
    return counts;
  }, {});

  const userId = JSON.parse(localStorage.getItem("user"))?.id;
  console.log("🚀 ~ Videoscard ~ userId:", userId);
  let userIp = localStorage.getItem("userIp");
  console.log("userIp>>>>>>>", userIp);

  const handleReact = async (id, reactionType, contentId) => {
    console.log("🚀 ~ handleReact ~ id, reactionType:", id, reactionType);
    try {
      const alreadyReacted = item?.reactions.some(
        (item) =>
          item.type == reactionType &&
          (item.user == userId || item.ip == userIp)
      );
      console.log("🚀 ~ handleReact ~ alreadyReacted:", alreadyReacted);

      if (alreadyReacted) {
        console.log("ifffffff");
        const requestData = userId
          ? { reactionType, user: userId, ip: "" }
          : { reactionType, ip: userIp, user: "" };
        await deleteContentReact(id, requestData, contentId);
      } else {
        console.log("elsseeee");
        const zipCode = localStorage.getItem("userZipCode");
        const requestData = userId
          ? { reactionType, user: userId, ip: "", zipcode: zipCode }
          : { reactionType, ip: userIp, user: "", zipcode: zipCode };
        console.log("🚀 ~ handleReact ~ requestData:", requestData);
        await d(updateTimeStampReactAsyncThunk({ id, requestData, contentId }));
      }
    } catch (error) {
      console.error("Error updating reaction:", error);
    }
  };

  async function deleteContentReact(id, requestData, contentId) {
    try {
      const response = await fetch(`${BasePath}timestamp/react/${id}`, {
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
          getTimeStampsAsyncThunk({
            contentId: contentId,
            populate: "contentId",
            limit: 60,
          })
        );
      }
      return await response.json();
    } catch (error) {
      console.error("Error deleting content reaction:", error);
      throw error;
    }
  }

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     let time;
  //     if(playerRef?.current) {
  //       time = playerRef?.current?.currentTime;
  //     } else {
  //       time = startTime;
  //     }

  //     console.log(time)

  //     if (time) {
  //       setCurrentTime(time);
  //     }
  //   }, 500);

  //   return () => clearInterval(intervalId);
  // }, [playStateChange]);

  // useEffect(() => {
  //   if(playerRef?.current?.currentTime && playerRef?.current?.currentTime > playIntroTill){
  //     playerRef.current.currentTime = item.startTime;
  //   }
  //   console.log("Current Time: ", playerRef?.current?.currentTime ?? "")
  // }, [playerRef?.current?.currentTime])

  let ServerDomain = process.env.REACT_APP_SERVER_DOMAIN_URL;

  const handleMouseEnter = () => {
    console.log("call enter");
    if (playerRef.current && thumbnailRef.current) {
      // setPlayStateChange(!playStateChange);

      // if (typeof item.startTime === 'number' && isFinite(item.startTime)) {
      //   playerRef.current.currentTime = item.startTime;
      // } else {
      //   console.error("Invalid startTime value:", startTime);
      // }

      // thumbnailRef.current.style.opacity = 0;
      playerRef.current.currentTime = startTime;
      playerRef.current.play().catch((error) => {
        playerRef.current.pause();
        console.error("Error trying to play the video:", error);
      });

      intervalRef.current = setInterval(() => {
        const time = playerRef.current.currentTime;
        // setCurrentTime(time);
        if (time > playIntroTill) {
          playerRef.current.currentTime = startTime;
        }
      }, 500);
    }
  };

  const handleMouseLeave = () => {
    console.log("call leave");
    // clearInterval(intervalId);
    if (playerRef.current && thumbnailRef.current) {
      playerRef.current.pause();
      // thumbnailRef.current.style.opacity = 1;
    }

    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  function timeStringToSeconds(timeString) {
    var timeParts = timeString?.split(":");
    var hours = parseInt(timeParts?.[0]);
    var minutes = parseInt(timeParts?.[1]);
    var seconds = hours * 3600 + minutes * 60 + parseInt(timeParts?.[2]);
    return seconds;
  }

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
    <div className="col-xl-3 col-md-4 col-sm-6 " key={key}>
      <div className="f-container">
        <div className="collection-outer-body" style={{ width: "100%" }}>
          <div>
            <div
              className="assets-table-body"
              style={{
                // backgroundColor: active === item.id ? "#33FF57" : "#fff",   //previously, #e1e1e1
                backgroundColor:
                  active === item.id
                    ? item?.status == "force play"
                      ? "orange"
                      : "#33FF57"
                    : "#fff",

                padding: "12px 11px",
              }}
            >
              <div className="row">
                <div className="col-xxl-12 col-sm-12 col-12">
                  <div className="table-row">
                    <div
                      className="table-data"
                      style={{ justifyContent: "flex-start" }}
                      onClick={() => handleChapterClick(item, item.id)}
                    >
                      {/* Image pop up  */}
                      <button className="btn-image">
                        {/* <img
                          src={
                            item && item.chapterThunbnail
                              ? `${ServerDomain}${item.chapterThunbnail
                                  .split("/")
                                  .pop()}`
                              : "images/Card-thumbnail.png"
                          }
                          alt="Your Image"
                          className="me-1"
                        /> */}
                        <div
                          className="Card_img img_cards rounded-top rounded-bottom overflow-hidden"
                          onMouseEnter={handleMouseEnter}
                          onMouseLeave={handleMouseLeave}
                          style={{
                            position: "relative",
                            width: "40px",
                            height: "40px",
                          }}
                        >
                          {/* {showThumbnail == true ? ( */}
                          <img
                            ref={thumbnailRef}
                            src={
                              item && item.chapterThunbnail
                                ? `${ServerDomain}${item.chapterThunbnail
                                  .split("/")
                                  .pop()}`
                                : "images/Card-thumbnail.png"
                            }
                            alt="Your Image"
                            className="me-1 w-100 h-100 rounded-top rounded-bottom img-videos"
                            style={{
                              position: "absolute",
                              width: "100%",
                              top: 0,
                              left: 0,
                            }}
                          />
                          {/* // ) : ( */}
                          {/* <video
                  ref={playerRef}
                  src={introUrl}
                  className="me-1 w-100 h-100 rounded-top img-videos"
                  width="100%"
                  height="100%"
                  muted={true}
                  style={{ position: 'absolute', top: 0, left: 0, objectFit: 'cover', zIndex: 2 }}
                /> */}
                          {/* // )} */}
                        </div>
                      </button>
                      <div className="popup-image" style={{ zIndex: "999" }}>
                        <video
                          ref={playerRef}
                          src={introUrl}
                          className="me-1 w-100 h-100 rounded-top rounded-bottom img-videos"
                          width="100%"
                          height="100%"
                          muted={true}
                          style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            objectFit: "cover",
                            zIndex: "999",
                          }}
                        />
                      </div>

                      <h3 style={{ fontSize: "16px" }}>
                        {/* {item?.startTime} */}
                        {item?.name ?? item?.originalName}
                      </h3>

                      <h4 style={{ fontSize: "16px" }}>
                        <ul style={{ color: "black" }}>
                          {item?.performer?.map((item, i) => {
                            return <li key={i}>{item?.name} </li>;
                          })}
                        </ul>
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-12 col-md-12 col-sm-12 col-5">
                  <div className="table-row pt-2">
                    <div className="table-data">
                      <div className="reaction-btns">
                        <div className="d-flex align-items-center">
                          <button
                            onClick={() =>
                              handleReact(item.id, "heart", item.contentId.id)
                            }
                            className="Likes-btn"
                          >
                            {item.reactions &&
                              item.reactions.some(
                                (reaction) =>
                                  reaction.type === "heart" &&
                                  reaction.user === userId
                              ) ? (
                              <FavoriteOutlinedIcon />
                            ) : (
                              <FavoriteBorderOutlinedIcon />
                            )}
                          </button>
                          <div>({totalCounts.heart || 0})</div>
                        </div>
                        <div className="d-flex align-items-center">
                          <button
                            onClick={() =>
                              handleReact(item.id, "clap", item.contentId.id)
                            }
                            className="Likes-btn clap-btn"
                          >
                            {item.reactions &&
                              item.reactions.some(
                                (reaction) =>
                                  reaction.type === "clap" &&
                                  reaction.user === userId
                              ) ? (
                              <SignLanguageIcon />
                            ) : (
                              <SignLanguageOutlinedIcon />
                            )}
                          </button>
                          <div>({totalCounts.clap || 0})</div>
                        </div>
                        <div className="d-flex align-items-center">
                          <button
                            className="Likes-btn eye-icon ms-1"
                            style={{ color: "black" }}
                          >
                            <FaEye />
                          </button>
                          <div>({item?.viewsCount || 0})</div>
                        </div>
                        <div onClick={handleRepeatChapter}>
                          <RefreshIcon
                            className={
                              repeated === item.id
                                ? "repeated-repeat-icon"
                                : "normal-repeat-icon"
                            }
                          />{" "}
                          {/*sx={repeated === item.id ? { color: '#EB0000' } : {color: '#000'}}*/}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChapterReactCard;
