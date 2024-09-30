import React, { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import { parseUrlFromModel } from "../helpers/asset";
import { useDispatch, useSelector } from "react-redux";
import {
  getTimeStampsAsyncThunk,
  updateTimeStampAsyncThunk,
} from "../redux/pagesSlices/timeStampSlice";
// import {
//   getContentAsyncThunk,
//   getContentsAsyncThunk,
// } from "../redux/pagesSlices/contentSlice";

import { getLinkAsyncThunk, getLinksAsyncThunk } from "../redux/pagesSlices/linkSlice";


import { useParams, useLocation, Link, useNavigate } from "react-router-dom";
import ReactPlayer from "react-player";
import Sidebar from "../components/Sidebar-lft/Sidebar";
import { Button } from "react-bootstrap";
import { colors } from "@primer/primitives";
import { FaMicrophone } from "react-icons/fa";
import { FaMicrophoneSlash } from "react-icons/fa";

// REACTION
import YoutubeChapterListCard from "../components/YoutubeChapterListCard.js";
import YoutubeChapterReactCard from "../components/YoutubeChapterReactCard.js";


import GoogleDriveChapterListCard from "../components/GoogleDriveChapterListCard.js";
import axios from "axios";

const YoutubePlayer = () => {
  console.log("caaaaaaaaaaaaaaaaaal")
  const [isListening, setIsListening] = useState(false);

  const location = useLocation();
  const [videoUrl, setVideoUrl] = useState("");
  let params = useParams();
  console.log("🚀 ~ YoutubePlayer ~ params:", params)
  const [currentTime, setCurrentTime] = useState(0);

  const generateShareableUrl = (currentTime) => {
    console.log("🚀 ~ generateShareableUrl ~ currentTime:", currentTime)
    const baseUrl = `${window.location.origin}/#/youtube/${params.id}`;
    const currentChapter = findCurrentChapter(currentTime, timeStamps);
    console.log("🚀 ~ generateShareableUrl ~ timeStamps:", timeStamps)
    console.log("🚀 ~ generateShareableUrl ~ currentChapter:outtt", currentChapter)
    let timeString;
    if (currentChapter) {
      console.log("🚀 ~ generateShareableUrl ~ currentChapter:", currentChapter)
      timeString = currentTime?.toFixed(0)?.padStart(6, "0");
      const formattedChapter = formatChapter(currentChapter);
      return `${baseUrl}?t=${timeString}&${formattedChapter}`;
    }
    console.log("shareeeeeeeeee")
    return `${baseUrl}`;
  };

  const findCurrentChapter = (currentTime, timeStamps) => {
    console.log("Clllllllllll")
    const currentChapter =
      timeStamps &&
      timeStamps?.find((chapter) => {
        const startTimeInSeconds = timeStringToSeconds(chapter.startTime);
        const endTimeInSeconds = timeStringToSeconds(chapter.endTime);
        return (
          currentTime >= startTimeInSeconds && currentTime <= endTimeInSeconds
        );
      });
    return currentChapter;
  };

  const formatChapter = (chapter) => {
    const { name, startTime, endTime } = chapter;
    const formattedName = name.replace(/\s+/g, "_");
    const formattedStartTime = startTime.replace(/:/g, "_");
    const formattedEndTime = endTime.replace(/:/g, "_");
    return `${content?.name}_${formattedName}_S_${formattedStartTime}_E_${formattedEndTime}`;
  };

  function timeStringToSeconds(timeString) {
    var timeParts = timeString?.split(":");
    var hours = parseInt(timeParts?.[0]);
    var minutes = parseInt(timeParts?.[1]);
    var seconds = hours * 3600 + minutes * 60 + parseInt(timeParts?.[2]);
    return seconds;
  }

  const copyToClipboard = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        toast.success("Link copied to clipboard!", { autoClose: false });
      })
      .catch((error) => {
        toast.error("Error copying link to clipboard!");
      });
  };

  // const handlePlayerReady = () => {
  //   const urlParams = new URLSearchParams(location.search);
  //   const startTime = urlParams.get("t");
  //   if (startTime) {
  //     const startTimeSeconds = parseInt(startTime, 10) || 0;
  //     playerRef.current?.seekTo(startTimeSeconds, "seconds");
  //   }
  // };

  const handlePlayerReady = () => {
    const urlParams = new URLSearchParams(location.search);
    const startTime = urlParams.get("t");
    const startTimeSeconds = parseInt(startTime, 10) || 0;

    const hash = window.location.hash;
    const startTimeMatch = hash.match(/S_(\d{2})_(\d{2})_(\d{2})/);
    const endTimeMatch = hash.match(/E_(\d{2})_(\d{2})_(\d{2})/);

    if (startTimeMatch && endTimeMatch) {
      const startTimeArray = startTimeMatch
        .slice(1)
        .map((val) => parseInt(val, 10));
      const endTimeArray = endTimeMatch
        .slice(1)
        .map((val) => parseInt(val, 10));

      const startSeconds =
        startTimeArray[0] * 3600 + startTimeArray[1] * 60 + startTimeArray[2];
      const endSeconds =
        endTimeArray[0] * 3600 + endTimeArray[1] * 60 + endTimeArray[2];
      if (startTimeSeconds) {
        playerRef.current.seekTo(startSeconds, "seconds");
      } else {
        playerRef.current.seekTo(startSeconds, "seconds");
      }
    }
  };

  const handleProgress = ({ playedSeconds }) => {
    const hash = window.location.hash;
    const endTimeMatch = hash.match(/E_(\d{2})_(\d{2})_(\d{2})/);

    if (endTimeMatch) {
      const endTimeArray = endTimeMatch
        .slice(1)
        .map((val) => parseInt(val, 10));
      const endSeconds =
        endTimeArray[0] * 3600 + endTimeArray[1] * 60 + endTimeArray[2];

      if (playedSeconds >= endSeconds) {
        playerRef.current.getInternalPlayer().pause();
      }
    }
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      const time = playerRef?.current?.getCurrentTime();
      setCurrentTime(time);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const playerRef = React.useRef();

  const d = useDispatch();
  const [ip, setIp] = useState("");
  console.log("🚀 ~ HomePlayer ~ ip:", ip)
  useEffect(() => {
    d(getTimeStampsAsyncThunk({
      linkId: params?.id,
      sortBy:"name:ase",
      limit:60

      // populate: "contentId"
    }));
    // d(getLinkAsyncThunk(params?.id));

    const fetchData = async () => {
      try {
        // Fetch IP address
        const ipResponse = await axios.get("https://api.ipify.org?format=json");
        const ipData = ipResponse.data;
        console.log("🚀 ~ checkIP ~ data:", ipData);
        setIp(ipData?.ip);
    
        let queryParams = {};
    
        if (user?.id) {
          queryParams.userId = user?.id;
        } else {
          queryParams.ipAddress = ip || ipData?.ip || "unknown";
        }
    
        console.log("🚀 ~ fetchData ~ queryParams:", queryParams,params?.id)
        await d(getLinkAsyncThunk({id:params?.id,queryParams }));
      } catch (error) {
        console.error("Error:", error);
      }
    };
  
    fetchData();
  }, [params?.id]);

  const timeStamps = useSelector((s) => s?.timeStamp?.timeStamps?.results);
  console.log("🚀 ~ YouPlayer ~ timeStamps:", timeStamps)
  let user = JSON.parse(localStorage.getItem("user"));

  // const content = useSelector((s) => s?.contents.content);

  const content = useSelector((state) => state?.links?.link);
  console.log("🚀 ~ YoutubePlayer ~ content:", content)

  useEffect(() => {
    if (currentTime) {
      const hideTimestamp = timeStamps?.find((timestamp) => {
        if (
          playerRef.current.getCurrentTime() >=
          timeStringToSeconds(timestamp?.startTime) &&
          playerRef.current.getCurrentTime() <=
          timeStringToSeconds(timestamp?.endTime) &&
          timestamp.status == "hide"
        ) {
          return timestamp;
        }
      });

      const forecePlayTimestamp = timeStamps?.find((timestamp) => {
        if (
          playerRef.current.getCurrentTime() >=
          timeStringToSeconds(timestamp?.startTime) &&
          playerRef.current.getCurrentTime() <=
          timeStringToSeconds(timestamp?.endTime) &&
          timestamp.status == "force play"
        ) {
          return timestamp;
        }
      });

      if (hideTimestamp) {
        if (
          currentTime >= timeStringToSeconds(hideTimestamp.startTime) &&
          currentTime <= timeStringToSeconds(hideTimestamp.endTime)
        ) {
          playerRef.current.seekTo(
            timeStringToSeconds(hideTimestamp?.endTime) + 1,
            "seconds"
          );
        }
      }
      if (forecePlayTimestamp) {
        if (
          currentTime.toString().split(".")[0] ==
          timeStringToSeconds(forecePlayTimestamp?.startTime)
        ) {
          playerRef.current.seekTo(
            timeStringToSeconds(forecePlayTimestamp?.endTime) + 1,
            "seconds"
          );
        }
      }
    }
  }, [currentTime]);

  useEffect(() => {
    d(
      getLinksAsyncThunk({
        // sortBy: "updatedAt:desc",
        // mimeType: "video",
      })
    );
  }, []);

  // const contents = useSelector((s) => s?.contents?.contents) ?? {};
  const contents = useSelector((s) => s?.links?.myLink) ?? {};

  //////////////////////////////////////////////////////////////////////
  const [editTimeStamps, setEditTimeStamps] = useState([]);

  const handleEditTimestamp = (index, field, value) => {
    setEditTimeStamps((prevTimestamps) => {
      const updatedTimestamps = [...prevTimestamps];
      if (!updatedTimestamps[index]) {
        updatedTimestamps[index] = {};
      }
      updatedTimestamps[index][field] = value;
      return updatedTimestamps;
    });
  };

  const handleUpdateTimestamp = (id, editedDataArray) => {
    if (editedDataArray) {
      editedDataArray.forEach((editedData) => {
        handleUpdateTimeStamps(id, editedData);
      });
    }
  };

  const handleUpdateTimeStamps = (id, updatedData) => {
    d(updateTimeStampAsyncThunk({ id, data: updatedData }));
  };

  //////////////////////
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (copied) setCopied(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, [copied]);

  // chapter AI controls
  const recognition = useRef(null);
  // console.log("🚀 ~ FYouPlayer ~ recognition:", recognition);

  useEffect(() => {
    recognition.current = new window.webkitSpeechRecognition();
    recognition.current.continuous = false;
    recognition.current.interimResults = false;
    recognition.current.lang = "en-US";
    recognition.current.onresult = handleSpeechRecognitionResult;
  }, []);

  // const handleSpeechRecognitionResult = (event) => {
  //   const transcript = event.results[0][0].transcript.toLowerCase();
  //   console.log("🚀 ~ handleSpeechRecognitionResult ~ transcript:", transcript)
  //   // Match transcript to commands
  //   if (transcript.includes("beginning")) {
  //     handleBeginning();
  //   } else if (transcript.includes("skip chapter")) {
  //     handleNextChapter();
  //   } else if (transcript.includes("previous chapter")) {
  //     handleBackChapter();
  //   } else if (transcript.includes("end chapter")) {
  //     handleEndChapter();
  //   }
  // };

  const handleSpeechRecognitionResult = (event) => {
    const transcript = event.results[0][0].transcript.toLowerCase();
    console.log("🚀 ~ handleSpeechRecognitionResult ~ transcript:", transcript);
    const commands = [
      "start",
      "next",
      "back",
      "end",
    ];

    let bestMatch = null;
    let bestScore = 0;

    commands.forEach((command) => {
      const score = similarity(transcript, command);
      if (score > bestScore) {
        bestScore = score;
        bestMatch = command;
      }
    });
    console.log("🚀 ~ handleSpeechRecognitionResult ~ commands:", commands);

    const threshold = 0.6; // Set your threshold here
    console.log("🚀 ~ handleSpeechRecognitionResult ~ threshold:", threshold);
    if (bestScore >= threshold) {
      switch (bestMatch) {
        case "start":
          handleBeginning();
          break;
        case "next":
          handleNextChapter();
          break;
        case "back":
          handleBackChapter();
          break;
        case "end":
          handleEndChapter();
          break;
        default:
          // Handle unknown command
          break;
      }
    }
  };

  // Function to calculate similarity score between two strings
  const similarity = (str1, str2) => {
    const len1 = str1.length;
    const len2 = str2.length;
    const maxLen = Math.max(len1, len2);
    if (maxLen === 0) return 1; // Both strings are empty

    const distance = levenshteinDistance(str1, str2);
    return 1 - distance / maxLen;
  };

  // Function to calculate Levenshtein distance between two strings
  const levenshteinDistance = (str1, str2) => {
    const matrix = [];
    const len1 = str1.length;
    const len2 = str2.length;

    for (let i = 0; i <= len1; i++) {
      matrix[i] = [i];
    }

    for (let j = 0; j <= len2; j++) {
      matrix[0][j] = j;
    }

    for (let i = 1; i <= len1; i++) {
      for (let j = 1; j <= len2; j++) {
        const cost = str1[i - 1] === str2[j - 1] ? 0 : 1;
        matrix[i][j] = Math.min(
          matrix[i - 1][j] + 1,
          matrix[i][j - 1] + 1,
          matrix[i - 1][j - 1] + cost
        );
      }
    }

    return matrix[len1][len2];
  };

  const startSpeechRecognition = () => {
    setIsListening(true);
    recognition.current.start();
  };

  const stopSpeechRecognition = () => {
    setIsListening(false);
    recognition.current.stop();
  };

  const handleBeginning = () => {
    // Handle Beginning button action
    playerRef.current.seekTo(0);
  };
  // Function to find the index of the current chapter
  const findCurrentChapterIndex = (currentTime, timeStamps) => {
    const currentIndex = timeStamps?.findIndex((chapter) => {
      const startTimeInSeconds = timeStringToSeconds(chapter.startTime);
      const endTimeInSeconds = timeStringToSeconds(chapter.endTime);
      return (
        currentTime >= startTimeInSeconds && currentTime <= endTimeInSeconds
      );
    });
    return currentIndex;
  };

  // Function to handle skip to the next chapter
  const handleNextChapter = () => {
    if(location?.search.length > 1){
      history(`/player/${params.id}`)
    }
    else{
    const currentIndex = findCurrentChapterIndex(currentTime, timeStamps);
    if (currentIndex !== -1) {
      const currentChapterEndTime = timeStringToSeconds(
        timeStamps[currentIndex].endTime
      );
      playerRef.current.seekTo(currentChapterEndTime);
    }
  }
  };

  // Function to handle start from the previous chapter
  const handleBackChapter = () => {
    if(location?.search.length > 1){
      history(`/player/${params.id}`)
    }
    else{
    const currentIndex = findCurrentChapterIndex(currentTime, timeStamps);
    if (currentIndex > 0) {
      const previousChapterStartTime = timeStringToSeconds(
        timeStamps[currentIndex - 1].startTime
      );
      playerRef.current.seekTo(previousChapterStartTime);
    }
  }
  };


  const handleRepeatChapter = () => {
    if (location?.search.length > 1) {
      history(`/player/${params.id}`);
    } else {
      // TODO: Implement repeat chapter logic
      const currentIndex = findCurrentChapterIndex(currentTime, timeStamps);
      if (currentIndex !== -1) {
        const currentChapterStartTime = timeStringToSeconds(
          timeStamps[currentIndex].startTime
        );  
        playerRef.current.seekTo(currentChapterStartTime);
      }
    }
  };
  
  // Function to handle starting from the end of the last chapter
  const handleEndChapter = () => {
    const lastIndex = timeStamps.length - 1;
    const lastChapterEndTime = timeStringToSeconds(
      timeStamps[lastIndex].endTime
    );
    playerRef.current.seekTo(lastChapterEndTime);
  };

  ////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////
  /////////////////////////////REACTIONS///////////////////////////////////>>>>>>>>>
  ////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////


  const history= useNavigate()

  const handleChapterClick = (chapter) => {
    console.log("🚀 ~ handleChapterClick ~ chapter:", chapter)
    console.log("ppppppppppppparms",params)
    if(params.id){
      history(`/youtube/${params.id}`)
    }
    playerRef.current.seekTo(timeStringToSeconds(chapter.startTime));
  };



  const handleEnded = () => {
    if (playerRef.current) {
      playerRef.current.seekTo(0);
    }
  };


  return (
    <div>
      {/* <div>
        <Sidebar contents={contents} />
      </div> */}

      <div className="Play">
        <div className="row">
          <div className="col-xl-12 col-lg-12" id="videosection">
          {content?.name == "youtube" ? 
            <div className="channel_details">
              <p style={{ position: "relative" }}>
                <ReactPlayer
                  ref={playerRef}
                  url={content?.link}
                  width="100%"
                  height="100%"
                  controls={true}
                  playing={true}
                  className="logo_img"
                  onPlay={handlePlayerReady}
                  onProgress={handleProgress}
                  onEnded={handleEnded}
                  autoPlay={true}
                  volume={0.1}
                />
               
                {/* Control buttons */}

                <div className="control-buttons voice-position">
                  {/* <Button onClick={() => playerRef.current.seekTo(0)}>
                  Start
                  </Button>
                  <Button onClick={handleNextChapter}>Next</Button>
                  <Button onClick={handleBackChapter}>
                    Back
                  </Button>
                  <Button onClick={handleEndChapter}>End</Button> */}
                  {isListening ? (
                    <Button onClick={stopSpeechRecognition} className="voice-btn">
                      <FaMicrophone/>
                    </Button>
                  ) : (
                    <Button onClick={startSpeechRecognition} className="voice-btn">
                      < FaMicrophoneSlash className="mute-svg"/>
                    </Button>
                  )}
                </div>
              </p>
           
              <div>
                <div className="name-btn-flex">
                  <p className="name">{content?.title ?? content?.name}</p>
                  {/* Share button */}
                  <Button
                    onClick={() => {
                      const shareableUrl = generateShareableUrl(currentTime);
                      copyToClipboard(shareableUrl);
                    }}
                  >
                    <button
                      className="btn-primary"
                      onClick={() => setCopied(true)}
                      css={{
                        appearance: "none",
                        padding: 8,
                        border: 0,
                        outline: 0,
                        cursor: "pointer",
                      }}
                    >
                      <div
                        css={{
                          position: "relative",
                          height: 16,
                          width: 16,
                        }}
                      >
                        <span>Share</span>
                        {copied == false ? (
                          <Clippy
                            css={{
                              color: colors.gray[8],
                              position: "absolute",
                              top: 0,
                              left: 0,
                              strokeDasharray: 50,
                              strokeDashoffset: copied ? -50 : 0,
                              transition: "all 300ms ease-in-out",
                            }}
                          />
                        ) : (
                          <Check
                            css={{
                              color: colors.green[5],
                              position: "absolute",
                              top: 0,
                              left: 0,
                              strokeDasharray: 50,
                              strokeDashoffset: copied ? 0 : -50,
                              transition: "all 300ms ease-in-out",
                            }}
                          />
                        )}
                      </div>
                    </button>
                  </Button>
                </div>

       

                {/* Control buttons */}
                <div className="control-buttons d-flex mt-2">
                  <Button onClick={() => playerRef.current.seekTo(0)}>
                    Start
                  </Button>
                  <Button onClick={handleBackChapter}>
                    Back
                  </Button>
                  <Button onClick={handleNextChapter}>Next</Button>
                  <Button onClick={handleRepeatChapter}>Repeat</Button>
                  <Button onClick={handleEndChapter}>End</Button>
                  {/* {isListening ? (
                    <Button onClick={stopSpeechRecognition} className="voice-btn">
                      <FaMicrophone />
                    </Button>
                  ) : (
                    <Button onClick={startSpeechRecognition} className="voice-btn">
                      <FaMicrophoneSlash className="mute-svg" />
                    </Button>
                  )} */}
                </div>

              </div>
            </div>
            :
            <div className="text-center video-size-img">
              <h1 className="google-header">Google Drive Content Not Supported </h1>
                <Link to={content?.link}>
                  Open In Google Drive
                </Link>
             </div>
          }
          </div>
       
            <div className="col-xl-12 col-lg-12" id="VideosCollection">
              <div className='Upper_portion'>
                <div className="row">
                  {timeStamps &&
                    timeStamps?.map((item, i) => (
                      <YoutubeChapterReactCard
                        i={i}
                        key={item?.id}
                        item={item}
                        editTimeStamps={editTimeStamps}
                        handleEditTimestamp={handleEditTimestamp}
                        handleUpdateTimestamp={handleUpdateTimestamp}
                        handleChapterClick={handleChapterClick}
                      />
                    ))}
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default YoutubePlayer;

function Clippy(props) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M5.75 4.75H10.25V1.75H5.75V4.75Z" />
      <path d="M3.25 2.88379C2.9511 3.05669 2.75 3.37987 2.75 3.75001V13.25C2.75 13.8023 3.19772 14.25 3.75 14.25H12.25C12.8023 14.25 13.25 13.8023 13.25 13.25V3.75001C13.25 3.37987 13.0489 3.05669 12.75 2.88379" />
    </svg>
  );
}

function Check(props) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M13.25 4.75L6 12L2.75 8.75" />
    </svg>
  );
}
