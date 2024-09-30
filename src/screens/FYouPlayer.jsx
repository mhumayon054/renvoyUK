import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import {
  parseUrlFromModel,
  parseUrlFromModelThumbnail,
} from "../helpers/asset.js";
import { useDispatch, useSelector } from "react-redux";
import {
  getTimeStampAsyncThunk,
  getTimeStampsAsyncThunk,
  updateTimeStampAsyncThunk,
} from "../redux/pagesSlices/timeStampSlice.js";
import annyang from "annyang";
import {
  getContentAsyncThunk,
  getContentsAsyncThunk,
} from "../redux/pagesSlices/contentSlice.js";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import ReactPlayer from "react-player";
import { Button } from "react-bootstrap";
import { colors } from "@primer/primitives";

// SVGS
import { FaMicrophone } from "react-icons/fa";
import { FaMicrophoneSlash } from "react-icons/fa";
import WordsAroundMic from "../assets/images/WordsAroundMic.jsx";
import { FaEye } from "react-icons/fa";

// REACTION
import ChapterReactCard from "../components/ChapterReactCard.js";
import axios from "axios";
import { Clippy, Check } from "../helpers/copy_icons.js";

import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import SignLanguageIcon from "@mui/icons-material/SignLanguage";

import { colorslist, repeatColorslist } from "../constants.js";

import "./video.css";
import Loadingdata from "../components/loadingdata.jsx";

const isSafari = () => {
  const userAgent = navigator.userAgent;
  const isChrome = userAgent.indexOf("Chrome") > -1;
  const isSafari = userAgent.indexOf("Safari") > -1;
  return isSafari && !isChrome;
};

const HomePlayer = () => {
  const playerRef = useRef(null);
  const playerRef2 = useRef(null);
  const hoverDetailsRef = useRef(null);
  const [isListening, setIsListening] = useState(false);
  const [selectedChapter, setSelectedChapter] = useState("");
  console.log("HomePlayer is re-rendered", selectedChapter);
  const [repeatedChapter, setRepeatedChapter] = useState("");
  // const [isFullscreen, setIsFullscreen] = useState(false);
  const [isBrowserSafari, setIsBrowserSafari] = useState(false);
  const [shouldRepeat, setShouldRepeat] = useState(false);
  const [shouldContinue, setshouldContinue] = useState(true);
  const [firstTimeRedirectPlay, setFirstTimeRedirectPlay] = useState(true);
  const [isMuted , setIsMuted] = useState(false)
  const [isPlay , setIsPlay] = useState(true)

  const location = useLocation();
  let params = useParams();
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    setIsBrowserSafari(isSafari());
  }, []);

  useEffect(() => {
    const currentChapter = findCurrentChapter(currentTime, timeStamps);
    const repeatChapter = timeStamps.find(
      (timestamp) => timestamp.id === repeatedChapter
    );
    // console.log('Current Time is', currentTime)

    // console.log("The updated Repeated Chapter is", repeatedChapter)
    // console.log(currentChapter)
    if (currentChapter && currentChapter.id !== selectedChapter) {
      console.log("setSelectedChapter is updated");
      setSelectedChapter(currentChapter.id);
    }

    if (
      repeatChapter &&
      currentTime >= parseTime(repeatChapter.endTime) &&
      shouldRepeat
    ) {
      playerRef.current?.seekTo(timeStringToSeconds(repeatChapter.startTime));
    } else if (
      repeatChapter &&
      currentTime <= parseTime(repeatChapter.startTime) &&
      shouldRepeat
    ) {
      playerRef.current?.seekTo(timeStringToSeconds(repeatChapter.startTime));
    }
  }, [currentTime]);

  const [volume, setVolume] = useState(0.1); // Initialize volume to 80%

  const convertToSeconds = (time) => {
    const [hours, minutes, seconds] = time.split(":").map(Number);
    return hours * 3600 + minutes * 60 + seconds;
  };

  const handleKeyDown = (event) => {
    if (playerRef.current) {
      const isCtrlOrCmd = event.ctrlKey || event.metaKey;
      const currentTime = playerRef.current.getCurrentTime();
      console.log(`Current Time: ${currentTime}`);

      if (isCtrlOrCmd && event.key === "ArrowRight") {
        // Go to the next chapter
        const nextChapter = timeStamps.find(
          (time) => convertToSeconds(time.startTime) > currentTime
        );
        if (nextChapter !== undefined) {
          const nextTime = convertToSeconds(nextChapter.startTime);
          console.log(`Seeking to next chapter at: ${nextTime}`);
          playerRef.current.seekTo(nextTime, "seconds");
        }
      } else if (isCtrlOrCmd && event.key === "ArrowLeft") {
        // Go to the previous chapter
        const previousChapters = timeStamps.filter(
          (time) => convertToSeconds(time.startTime) < currentTime
        );
        if (previousChapters.length > 0) {
          const previousTime = convertToSeconds(
            previousChapters[previousChapters.length - 1].startTime
          );
          console.log(`Seeking to previous chapter at: ${previousTime}`);
          playerRef.current.seekTo(previousTime, "seconds");
        }
      } else if (event.key === "ArrowRight") {
        // Progress the video forward by 2 seconds
        const newTime = currentTime + 5;
        console.log(`Seeking forward by 2 seconds to: ${newTime}`);
        playerRef.current.seekTo(newTime, "seconds");
      } else if (event.key === "ArrowLeft") {
        // Progress the video backward by 2 seconds
        const newTime = currentTime - 5;
        console.log(`Seeking backward by 2 seconds to: ${newTime}`);
        playerRef.current.seekTo(newTime, "seconds");
      } else if (event.key === "ArrowUp") {
        // Increase the volume
        console.log("Increasing volume");
        setVolume((prevVolume) => Math.min(prevVolume + 0.1, 1));
      } else if (event.key === "ArrowDown") {
        // Decrease the volume
        console.log("Decreasing volume");
        setVolume((prevVolume) => Math.max(prevVolume - 0.1, 0));
      }
    }
  };

  const generateShareableUrl = (currentTime) => {
    const baseUrl = `${window.location.origin}/#/player/${params.id}`;
    const currentChapter = findCurrentChapter(currentTime, timeStamps);
    let timeString;
    timeString = currentTime?.toFixed(0)?.padStart(6, "0");
    if (currentChapter) {
      const formattedChapter = formatChapter(currentChapter);
      return `${baseUrl}?t=${timeString}&${formattedChapter}`;
    }
    return `${baseUrl}?t=${timeString}`;
  };

  const findCurrentChapter = (currentTime, timeStamps) => {
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

  const handlePlayerReady = () => {
    const urlParams = new URLSearchParams(location.search);
    var startTime = urlParams.get("t");
    const startTimeSeconds = parseInt(startTime, 10) || 0;
    console.log(startTimeSeconds, "start time from shared url");

    let startTimeMatch;
    let endTimeMatch;

    console.log("Player is playing!!!");
    if (firstTimeRedirectPlay) {
      const hash = window.location.hash;
      startTimeMatch = hash.match(/S_(\d{2})_(\d{2})_(\d{2})/);
      endTimeMatch = hash.match(/E_(\d{2})_(\d{2})_(\d{2})/);
    }

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
        console.log(startTime , "Start time here")
      if (startTime) {
        playerRef.current.seekTo(startTime, "seconds");
        setIsMuted(true)
        setIsPlay(true)
      } else {
        playerRef.current.seekTo(startSeconds, "seconds");
        setIsPlay(true)
        setIsMuted(true)
      }
    }
    if (startTime) {
      setIsMuted(true)
      playerRef.current.seekTo(startTime, "seconds");
      setIsPlay(true)
    }
    setFirstTimeRedirectPlay(false);
  };


  const handleProgress = (param) => {
    const { playedSeconds } = param;

    console.log("Here are the progress params", param);
    const hash = window.location.hash;
    // const endTimeMatch = hash.match(/E_(\d{2})_(\d{2})_(\d{2})/);
    let endTimeMatch;

    if (endTimeMatch) {
      const endTimeArray = endTimeMatch
        .slice(1)
        .map((val) => parseInt(val, 10));
      const endSeconds =
        endTimeArray[0] * 3600 + endTimeArray[1] * 60 + endTimeArray[2];

      // if (!playedSeconds) {
      if (playedSeconds >= endSeconds) {
        playerRef.current.getInternalPlayer().pause();
      }
    }
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      const time = playerRef?.current?.getCurrentTime();
      console.log(time, "here is the current time of player");

      if (time) {
        setCurrentTime(time);
      }
    }, 500);

    return () => clearInterval(intervalId);
  }, []);

  const d = useDispatch();

  const [ip, setIp] = useState("");
  const fetchData = async () => {
    try {
      const ipResponse = await axios.get("https://api.ipify.org?format=json");
      const ipData = ipResponse.data;
      setIp(ipData?.ip);
      let queryParams = {};
      if (user?.id) {
        queryParams.userId = user?.id;
      } else {
        queryParams.ipAddress = ip || ipData?.ip || "unknown";
      }
      console.log("queryparams", queryParams);
      await d(getContentAsyncThunk({ id: params?.id, queryParams }));
    } catch (error) {
      console.error("Error:", error);
    }
  };
  useEffect(() => {
    d(
      getTimeStampsAsyncThunk({
        contentId: params?.id,
        populate: "contentId performer",
        sortBy: "name:asc",
        limit: 60,
      })
    );
    fetchData();
  }, [params?.id]);

  const timeStamps = useSelector((s) => s?.timeStamp?.timeStamps?.results);
  // console.log("🚀 ~ HomePlayer ~ timeStamps:", timeStamps)
  let user = JSON.parse(localStorage.getItem("user")); //http://localhost:3038/#/player/66ebf29c49411a44a6b1b7b7

  const content = useSelector((s) => s?.contents.content);
  // console.log("🚀 ~ HomePlayer ~ content:", content)

  useEffect(() => {
    // const intervalId = setInterval(
    const chapterView = async () => {
      const getMyCurrentTime = playerRef.current.getCurrentTime();
      console.log("🚀 ~ useEffect ~ getMyCurrentTime:", getMyCurrentTime);

      timeStamps.forEach(async (timeStamp) => {
        const { startTime, endTime, id } = timeStamp;
        const startSeconds = convertTimeToSeconds(startTime);
        const endSeconds = convertTimeToSeconds(endTime);
        if (
          getMyCurrentTime >= startSeconds &&
          getMyCurrentTime <= endSeconds
        ) {
          try {
            const ipResponse = await axios.get(
              "https://api.ipify.org?format=json"
            );
            const ipData = ipResponse.data;
            let queryParams = {};
            if (user?.id) {
              queryParams.userId = user.id;
            } else {
              queryParams.ipAddress = ip || ipData?.ip || "unknown";
            }
            await d(getTimeStampAsyncThunk({ id, queryParams }));
          } catch (error) {
            console.error(
              "Error fetching IP address or dispatching getTimeStampAsyncThunk:",
              error
            );
          }
        }
      });
    };
    // }, 1000); // Adjust the interval as needed

    chapterView();
    console.log("Bhai chapter view count ho raha hai");

    // return () => clearInterval(intervalId);
  }, [selectedChapter]);
  // }, [playerRef, timeStamps, user, ip, d]);

  function convertTimeToSeconds(time) {
    const [hours, minutes, seconds] = time.split(":").map(parseFloat);
    return hours * 3600 + minutes * 60 + seconds;
  }

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
  }, [currentTime, timeStamps]);

  useEffect(() => {
    d(
      getContentsAsyncThunk({
        // sortBy: "updatedAt:desc",
        mimeType: "video",
      })
    );
  }, [d]);

  // const contents = useSelector((s) => s?.contents?.contents) ?? {};

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
  // const recognition = useRef(null);
  // console.log("🚀 ~ HomePlayer ~ recognition:", recognition);

  const [startRecognition, setStartRecognition] = useState(false);
  const currentTimeRef = useRef();
  const timeStampsRef = useRef();

  useEffect(() => {
    currentTimeRef.current = currentTime;
  }, [currentTime]);

  useEffect(() => {
    timeStampsRef.current = timeStamps;
  }, [timeStamps]);

  useEffect(() => {
    if (annyang) {
      console.log("Annyang is available.");

      // Define the commands with synonyms
      const commands = {
        start: () => {
          console.log("Command recognized: start");
          handleBeginning();
        },
        begin: () => {
          console.log("Command recognized: begin");
          handleBeginning();
        },
        commence: () => {
          console.log("Command recognized: commence");
          handleBeginning();
        },
        initiate: () => {
          console.log("Command recognized: initiate");
          handleBeginning();
        },
        next: () => {
          console.log("Command recognized: next");
          handleNextChapter();
        },
        forward: () => {
          console.log("Command recognized: forward");
          handleNextChapter();
        },
        proceed: () => {
          console.log("Command recognized: proceed");
          handleNextChapter();
        },
        back: () => {
          console.log("Command recognized: back");
          handleBackChapter();
        },
        previous: () => {
          console.log("Command recognized: previous");
          handleBackChapter();
        },
        reverse: () => {
          console.log("Command recognized: reverse");
          handleBackChapter();
        },
        end: () => {
          console.log("Command recognized: end");
          handleEndChapter();
        },
        finish: () => {
          console.log("Command recognized: finish");
          handleEndChapter();
        },
        terminate: () => {
          console.log("Command recognized: terminate");
          handleEndChapter();
        },
        conclude: () => {
          console.log("Command recognized: conclude");
          handleEndChapter();
        },
        stop: () => {
          console.log("Command recognized: stop");
          handleEndChapter();
        },
      };

      // Add the commands to annyang
      annyang.addCommands(commands);
      console.log("Commands added to Annyang:", commands);

      // Add callback for the result event
      annyang.addCallback("result", handleSpeechRecognitionResult);
      annyang.addCallback("start", () => console.log("Annyang started"));
      annyang.addCallback("end", () => console.log("Annyang ended"));
      annyang.addCallback("error", (err) =>
        console.error("Annyang error:", err)
      );
      annyang.addCallback("resultNoMatch", (phrases) =>
        console.log("No match for phrases:", phrases)
      );
      console.log("Callbacks for Annyang events added.");
    } else {
      console.error("Annyang is not available in this browser.");
    }
  }, []);

  const startSpeechRecognition = () => {
    setIsListening(true);
    if (annyang) {
      console.log("Starting speech recognition...");
      annyang.start({ autoRestart: false, continuous: false });
    }

    // Automatically stop listening after 5 seconds
    setTimeout(() => {
      stopSpeechRecognition();
    }, 5000);
  };

  const stopSpeechRecognition = () => {
    setIsListening(false);
    if (annyang) {
      // console.log('Stopping speech recognition...');
      // annyang.abort();
      console.log("Pausing speech recognition...");
      annyang.pause();
    }
  };

  const handleSpeechRecognitionResult = (userSaid) => {
    const transcript = userSaid[0].toLowerCase();
    console.log("🚀 ~ handleSpeechRecognitionResult ~ transcript:", transcript);

    // Process the transcript to determine the best matching command
    const command = processTranscript(transcript);
    console.log(`Recognized command: ${command}`);

    switch (command) {
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
        console.log(`Unknown command: ${transcript}`);
        break;
    }
  };

  const processTranscript = (transcript) => {
    const commands = {
      start: [
        "start",
        "begin",
        "commence",
        "initiate",
        "commencement",
        "initiation",
        "go to start",
      ],
      next: ["next", "forward", "proceed", "proceeding", "following"],
      back: ["back", "previous", "reverse", "return", "go back", "backward"],
      end: [
        "end",
        "finish",
        "terminate",
        "conclude",
        "conclusion",
        "stop",
        "go to end",
      ],
    };

    let bestMatch = null;
    let bestScore = 0;

    for (const [command, keywords] of Object.entries(commands)) {
      keywords.forEach((keyword) => {
        const score = similarity(transcript, keyword);
        console.log(
          `Comparing "${transcript}" with "${keyword}", similarity score: ${score}`
        );
        if (score > bestScore) {
          bestScore = score;
          bestMatch = command;
        }
      });
    }

    // Set a similarity threshold
    const threshold = 0.6;
    if (bestScore >= threshold) {
      return bestMatch;
    } else {
      console.log(
        `No command found matching "${transcript}" with sufficient confidence.`
      );
      return null;
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

  const handleBeginning = () => {
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
    if (location?.search.length > 1) {
      console.log("inside search.length > 1 check");
      history(`/player/${params.id}`);
    } else {
      // console.log("currentTime and timestamps", currentTimeRef.current, timeStampsRef.current)
      const currentIndex = findCurrentChapterIndex(
        currentTimeRef.current,
        timeStampsRef.current
      );
      console.log("🚀 ~ handleNextChapter ~ currentIndex:", currentIndex);
      if (currentIndex !== -1) {
        const currentChapterEndTime = timeStringToSeconds(
          timeStampsRef.current[currentIndex]?.endTime
        );
        console.log("current Chapter end time: ", currentChapterEndTime);
        playerRef.current.seekTo(currentChapterEndTime);
      }
    }
  };

  // Function to handle start from the Back chapter
  const handleBackChapter = () => {
    if (location?.search.length > 1) {
      history(`/player/${params.id}`);
    } else {
      const currentIndex = findCurrentChapterIndex(
        currentTimeRef.current,
        timeStampsRef.current
      );
      if (currentIndex > 0) {
        const previousChapterStartTime = timeStringToSeconds(
          timeStampsRef.current[currentIndex - 1].startTime
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
        if (!shouldRepeat && !repeatedChapter.length > 0) {
          playerRef.current.seekTo(currentChapterStartTime);
          // console.log("Player Repeating")
        }
        if (!repeatedChapter.length > 0) {
          setRepeatedChapter(timeStamps[currentIndex].id);
          setShouldRepeat(true);
          console.log("set the repeated chapter to true");
          setshouldContinue(false);
        } else {
          setRepeatedChapter("");
          setShouldRepeat(false);
          console.log("set the repeated chapter to false");
          setshouldContinue(true);
        }
        console.log("The updated Repeated Chapter is", repeatedChapter);
      }
    }
  };

  // Function to handle starting from the end of the last chapter
  const handleEndChapter = () => {
    // const lastIndex = timeStamps.length - 1;
    // const lastChapterEndTime = timeStringToSeconds(
    //   timeStampsRef.current[lastIndex].endTime
    // );
    playerRef.current.seekTo(playerRef.current.getDuration());
  };

  ////////////////////////////////////////////////////////////////
  const history = useNavigate();

  const handleChapterClick = (chapter, chapterID) => {
    if (params.id) {
      history(`/player/${params.id}`);
    }

    // if(!chapterID === selectedChapter){
    // if(shouldContinue){
    //   playerRef.current.seekTo(timeStringToSeconds(chapter.startTime));
    // }

    if (chapterID !== repeatedChapter && chapterID !== selectedChapter) {
      setRepeatedChapter("");
      setShouldRepeat(false);
      console.log("set the repeated chapter to false");
      setshouldContinue(true);
      playerRef.current.seekTo(timeStringToSeconds(chapter.startTime));
    }

    // window scroll and move on top of the screen
    window.scrollTo(0, 0);
    setSelectedChapter(chapterID);
  };

  //////////////////////////////////////
  //////////////////////////////////////
  //////////////////////////////////////
  //////////////////////////////////////
  // a

  const [widthOFBar, setWidthOFBar] = useState(0);
  // const [seekTime, setSeekTime] = useState(null);
  const [showHoverInfo, setShowHoverInfo] = useState(false);

  useEffect(() => {
    if (playerRef.current) {
      setWidthOFBar(
        (playerRef.current.getCurrentTime() / playerRef.current.getDuration()) *
          100
      );
    }
    // }, [playerRef]);
  }, [currentTime]);

  const progressBarRef = useRef(null);

  const [isMobile, setIsMobile] = useState(false);

  useLayoutEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 500); // Adjust the width according to your mobile breakpoint
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleBlackBarClick = (e) => {
    // console.log("seeking is starting based on the black bar!")
    const progressBarContainer = progressBarRef.current;
    const rect = progressBarContainer.getBoundingClientRect();
    const clickPosition = e.clientX - rect.left;
    const clickRatio = clickPosition / rect.width;
    const newTime = clickRatio * playerRef.current.getDuration();

    // console.log("seeking is starting based on the black bar!", newTime);
    const currentChapter = findCurrentChapter(newTime, timeStamps);
    if (currentChapter?.id !== repeatedChapter) {
      setRepeatedChapter("");
      setShouldRepeat(false);
      setshouldContinue(true);
    }

    playerRef.current.seekTo(newTime);
  };

  const handleMouseMove = (e) => {
    // const rect = e.target.getBoundingClientRect();
    // const x = e.clientX - rect.left;
    // const duration = playerRef.current.getDuration();
    // let position;

    const progressBarContainer = progressBarRef.current;
    const rect = progressBarContainer.getBoundingClientRect();
    const clickPosition = e.clientX - rect.left;
    const clickRatio = clickPosition / rect.width;
    const newTime = clickRatio * playerRef.current.getDuration();

    // Check if the mouse is over the red progress bar
    // if (e.target.style.background == "#000") {
    //   position = ((x / rect.width) * widthOFBar) / 100; // Calculate position relative to red bar width
    // } else {
    // position = x / rect.width;
    // }

    // playerRef.current.currentTime(duration * position);

    // const time = duration * position;
    setHoverTime(newTime);
    if(!isMobile){
      setShowHoverInfo(true);
    }else{
      setShowHoverInfo(false)
    }
  };

  const handleMouseLeave = () => {
    if(!isMobile){
      setShowHoverInfo(true);
    }else{
      setShowHoverInfo(false)
    }
  };
  // Function to parse time from "HH:MM:SS" format to seconds
  const parseTime = (timeString) => {
    const parts = timeString.split(":");
    return +parts[0] * 3600 + +parts[1] * 60 + +parts[2];
  };

  const formatTime = (timeInSeconds) => {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = Math.floor(timeInSeconds % 60);

    const formattedHours = hours.toString().padStart(2, "0");
    const formattedMinutes = minutes.toString().padStart(2, "0");
    const formattedSeconds = seconds.toString().padStart(2, "0");

    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
  };

  let ServerDomain = process.env.REACT_APP_SERVER_DOMAIN_URL;

  // get thumbnaillllllllllllllllllllllllllL
  const canvasRef = useRef(null);
  const [hoverTime, setHoverTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [thumbnailStyle, setThumbnailStyle] = useState({
    display: "none",
    left: 0,
  });

  // useEffect(() => {
  //   // if (playerRef?.current) {
  //     if (playerRef?.current || playerRef?.current?.getInternalPlayer() == null) {
  //     const player = playerRef.current.getInternalPlayer();
  //     console.log("🚀 ~ useEffect ~ player:", player)
  //     player?.addEventListener("loadedmetadata", () => {
  //       setDuration(player.duration);
  //     });
  //   }
  // }, [hoverTime]);
  useEffect(() => {
    const checkPlayer = () => {
      console.log("cccccccccccccccccccccccclll");
      if (playerRef.current) {
        const player = playerRef.current.getInternalPlayer();
        console.log("🚀 ~ checkPlayer ~ player:", player);
        if (player) {
          player.addEventListener("loadedmetadata", () => {
            setDuration(player.duration);
          });
        }
      }
    };

    checkPlayer();

    // Re-check if the player is still null after a short delay, as a fallback.
    const timer = setTimeout(checkPlayer, 3000);

    return () => clearTimeout(timer); // Clean up the timer on component unmount
  }, [playerRef]);

  const handleMouseMoveThumbnail = (event) => {
    if (playerRef.current) {
      // const player = playerRef.current.getInternalPlayer();
      // const progressBar = player.getBoundingClientRect();
      // const time =
      //   ((event.clientX - progressBar.left) / progressBar.width) * duration;
      const progressBarContainer = playerRef.current.getInternalPlayer();
      const rect = progressBarContainer.getBoundingClientRect();
      const clickPosition = event.clientX - rect.left;
      const clickRatio = clickPosition / rect.width;
      const newTime = clickRatio * playerRef.current.getDuration();
      setHoverTime(newTime);
      console.log("The time is: ", newTime);
      updateThumbnail(newTime);
      if(!isMobile){
        setShowHoverInfo(true)
      }else{
        setShowHoverInfo(false);
      }
      // setThumbnailStyle({
      //   display: "block",
      //   left: `${
      //     (newTime / playerRef.current.getDuration()) *
      //     95
      //   }%`,
      //   bottom:"-70px"
      // });
      // hoverDetailsRef.current.style.left = `${event.clientX - progressBar.left - 80}px`
      // if (hoverDetailsRef.current) {
      //   hoverDetailsRef.current.style.left = `${newTime / playerRef.current.getDuration() * 95}%`;
      // }
    }
  };

  const handleMouseLeaveThumbnail = () => {
    setShowHoverInfo(false);
    // setThumbnailStyle({ display: "none", left: 0 });
    // if(hoverDetailsRef.current)
    //   hoverDetailsRef.current.style.left = '0'
  };

  // video is played, when user hover on video for thumbnail and click this point.
  // const handleClickThumbnail = (event) => {
  //   if (playerRef.current) {
  //     const player = playerRef.current.getInternalPlayer();
  //     const progressBar = player.getBoundingClientRect();
  //     const time =
  //       ((event.clientX - progressBar.left) / progressBar.width) * duration;
  //     playerRef.current.seekTo(time, "seconds");
  //   }
  // };

  const handleClickThumbnail = async (event) => {
    if (playerRef.current) {
      // const playeer = playerRef.current.getInternalPlayer();
      // const progressBar = playeer.getBoundingClientRect();
      // const time =
      //   ((event.clientX - progressBar.left) / progressBar.width) * duration;

      const player = playerRef.current.getInternalPlayer();
      const rect = player.getBoundingClientRect();
      const clickPosition = event.clientX - rect.left;
      const clickRatio = clickPosition / rect.width;
      const newTime = clickRatio * playerRef.current.getDuration();
      player.currentTime = newTime;

      // console.log("Time is ", time, "newTime is ", newTime);

      // Seek to the clicked position
      // playerRef.current.seekTo(time, "seconds")

      // Toggle play/pause state after seeking
      setTimeout(() => {
        const html5Player = playerRef.current.getInternalPlayer("html5");
        if (html5Player) {
          if (html5Player.paused) {
            html5Player.play();
          } else {
            html5Player.pause();
          }
        } else {
          if (player.paused) {
            player.play();
          } else {
            player.pause();
          }
        }
      }, 100);
    }
  };

  const updateThumbnail = (time) => {
    if (playerRef2.current && canvasRef.current) {
      const player = playerRef2.current.getInternalPlayer();
      console.log("🚀 ~ updateThumbnail ~ player:", player);
      player.currentTime = time;
      player.addEventListener("seeked", function captureFrame() {
        const context = canvasRef?.current?.getContext("2d");
        if (!context) return;
        context.drawImage(player, 0, 0, 160, 90);
        player.removeEventListener("seeked", captureFrame);
      });
    }
  };

  //Reactions Specific Functions

  const getClapCount = (timestamp) => {
    if (!timeStamps) return 0;
    return timestamp?.reactions?.reduce((count, reaction) => {
      if (reaction.type === "clap") {
        return count + 1;
      }
      return count;
    }, 0);
  };

  const getHeartCount = (timestamp) => {
    if (!timeStamps) return 0;
    return timestamp?.reactions?.reduce((count, reaction) => {
      if (reaction.type === "heart") {
        return count + 1;
      }
      return count;
    }, 0);
  };

  const currentHoverTimeStamp = findCurrentChapter(hoverTime, timeStamps);

  const hearts = getHeartCount(currentHoverTimeStamp);

  const claps = getClapCount(currentHoverTimeStamp);

  return (
    <div onKeyDown={handleKeyDown}>
      <div className="Play">
        <div className="row">
          <div className="col-xl-12 col-lg-12" id="videosection">
            <div className="channel_details">
              <p style={{ position: "relative" }}>
                  
                <div
                  className="video-container"
                  onMouseMove={handleMouseMoveThumbnail}
                  onMouseLeave={handleMouseLeaveThumbnail}
                  onClick={handleClickThumbnail}
                >
                  <ReactPlayer
                    ref={playerRef}
                    url={parseUrlFromModel(content)}
                    width="100%"
                    muted= {isMuted}
                    height="100%"
                    controls={true}
                    playing={isPlay}
                    className="logo_img"
                    onPlay={handlePlayerReady}
                    onProgress={handleProgress}
                    autoPlay={isPlay}
                    // volume={0.1}
                    volume={volume}
                    pip={true}
                  />


                  <ReactPlayer
                    ref={playerRef2}
                    url={parseUrlFromModel(content)}
                    width="100%"
                    height="100%"
                    controls={true}
                    playing={true}
                    className="logo_img"
                    onPlay={handlePlayerReady}
                    onProgress={handleProgress}
                    autoPlay={false}
                    volume={0}
                    muted={true}
                    pip={true}
                    style={{ display: "none" }}
                  />

                  {/* <div
                    id="thumbnail-container"
                    className="thumbnail-container"
                    style={thumbnailStyle}
                  >
                    <canvas ref={canvasRef} width="160" height="90"></canvas>
                  </div> */}
                </div>

                {/* Chunks based on startTime */}
                <div
                  className={isBrowserSafari ? "black-bar-safari" : "black-bar"}
                  ref={progressBarRef}
                  onClick={handleBlackBarClick}
                  onMouseMove={!isMobile ? handleMouseMove : undefined}
                  onMouseLeave={!isMobile ? handleMouseLeave : undefined}
                  style={{
                    // width: `${isBrowserSafari ? "60%" : "97.55%"}`,
                    // left: `${isBrowserSafari ? "5%" : '1.25%'}`,
                    position: "relative",
                    // left: "16px",
                    bottom: `clamp(1.85rem, 1.87rem, 1.95rem)`,
                    // background: "black",
                    background:
                      timeStamps?.length > 0 ? "black" : "transparent",
                    height: "8px",
                    cursor: "pointer",
                  }}
                >
                  <div
                    // onMouseMove={handleMouseMove}
                    // onMouseLeave={handleMouseLeave}
                    className="red-bar"
                    style={{
                      background: `white`,
                      // width: `${widthOFBar}%`,
                      width: `15px`,
                      height: `15px`,
                      borderRadius: `50%`,
                      marginLeft: `${
                        widthOFBar > 90
                          ? `${widthOFBar - 0.8}`
                          : `${
                              widthOFBar > 60 ? widthOFBar - 0.45 : widthOFBar
                            }`
                      }%`,
                      maxWidth: "97.55%",
                      left: "0%",
                      position: "absolute",
                      bottom: "0.4px",
                      zIndex: "999",
                    }}
                  ></div>
                  {showHoverInfo && hoverTime != null && (
                    <div
                      ref={hoverDetailsRef}
                      style={{
                        position: "absolute",
                        top: "20px",
                        left: `${
                          (hoverTime / playerRef.current.getDuration()) * 90
                        }%`,
                        color: "black",
                        display: "flex",
                        alignItems: "center",
                        gap: "5px",
                        flexDirection: "column",
                      }}
                    >
                      {formatTime(Math.floor(hoverTime))}
                      <br />
                      {findCurrentChapter(hoverTime, timeStamps)?.name ?? ""}
                      {
                        <div
                          id="thumbnail-container"
                          className="thumbnail-container"
                          style={{
                            position: "absolute",
                            top: "-145px",
                            // left: `${
                            //   (hoverTime / playerRef.current.getDuration()) *
                            //   -40
                            // }%`,
                            left: "-40px",
                            display: "block",
                          }}
                        >
                          <canvas
                            ref={canvasRef}
                            width="160"
                            height="90"
                          ></canvas>
                        </div>
                      }

                      {currentHoverTimeStamp && (
                        <div className="tooltip-video">
                          <div className="flex-tooltip">
                            <div className="icon-flex-box">
                              <FavoriteOutlinedIcon
                                style={{
                                  color: hearts > 0 ? "red" : "#f2dcdc",
                                }}
                              />{" "}
                              {hearts || 0}{" "}
                            </div>
                            <div className="icon-flex-box">
                              <SignLanguageIcon
                                style={{
                                  color: claps > 0 ? "yellow" : "#fff",
                                }}
                              />{" "}
                              {claps || 0}{" "}
                            </div>
                            <div className="icon-flex-box">
                              <FaEye
                                color={
                                  currentHoverTimeStamp?.viewsCount > 0
                                    ? "blue"
                                    : "white"
                                }
                              />{" "}
                              {currentHoverTimeStamp?.viewsCount || 0}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                  {timeStamps.map((timestamp, index) => {
                    const clapCount = timestamp?.reactions?.reduce(
                      (count, reaction) => {
                        if (reaction.type === "clap") {
                          return count + 1;
                        }
                        return count;
                      },
                      0
                    );

                    const heartCount = timestamp?.reactions?.reduce(
                      (count, reaction) => {
                        if (reaction.type === "heart") {
                          return count + 1;
                        }
                        return count;
                      },
                      0
                    );

                    //${repeatedChapter.length > 0 ? `${timestamp.id === repeatedChapter ? `#33FF57` : repeatColorslist[index % repeatColorslist.length] }` : colorslist[index % colorslist.length]}`
                    //colorslist[index % colorslist.length]
                    return (
                      <div
                        className="tooltip-container-video"
                        key={index}
                        style={{
                          position: "absolute",
                          bottom: "1px",
                          background: `${
                            repeatedChapter === timestamp.id
                              ? `#EB0000`
                              : `${
                                  selectedChapter === timestamp.id
                                    ? `#33FF57`
                                    : colorslist[index % colorslist.length]
                                }`
                          }`,
                          left: `${
                            (parseTime(timestamp.startTime) /
                              playerRef?.current?.getDuration()) *
                            100
                          }%`,
                          width: `${
                            ((parseTime(timestamp.endTime) -
                              parseTime(timestamp.startTime)) /
                              playerRef?.current?.getDuration()) *
                            100
                          }%`,
                          height: `${
                            currentTime >= parseTime(timestamp.startTime) &&
                            currentTime <= parseTime(timestamp.endTime)
                              ? "12px"
                              : "7px"
                          }`,
                          cursor: "pointer",
                          borderRadius: "2px",
                          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                        }}
                        aria-label={`Hearts: ${heartCount}, Claps: ${clapCount}, Views: ${timestamp?.viewsCount}`}
                      >
                        {/* <div className="tooltip-video">
                          <div className="flex-tooltip">
                            <div className="icon-flex-box">
                              <FavoriteOutlinedIcon
                                style={{
                                  color:
                                    heartCount > 0
                                      ? "red"
                                      : "#f2dcdc",
                                }}
                              />{" "}
                              {heartCount || 0}{" "}
                            </div>
                            <div className="icon-flex-box">
                              <SignLanguageIcon
                                style={{
                                  color:
                                    clapCount > 0
                                      ? "yellow"
                                      : "rgb(211, 243, 125)",
                                }}
                              />{" "}
                              {clapCount || 0}{" "}
                            </div>
                            <div className="icon-flex-box">
                              <FaEye
                                color={
                                  timestamp?.viewsCount > 0 ? "blue" : "white"
                                }
                              />{" "}
                              {timestamp?.viewsCount || 0}
                            </div>
                          </div>
                        </div> */}
                      </div>
                    );
                  })}
                </div>

                {/* Control buttons */}
                <div className="control-buttons voice-position">
                  {isListening ? (
                    <Button
                      onClick={stopSpeechRecognition}
                      className="voice-btn"
                    >
                      <FaMicrophone />
                      <WordsAroundMic color={"white"} />
                    </Button>
                  ) : (
                    <Button
                      onClick={startSpeechRecognition}
                      className="voice-btn"
                    >
                      <FaMicrophoneSlash className="mute-svg" />
                      <WordsAroundMic color={"white"} />
                    </Button>
                  )}
                </div>
              </p>
              <div>
                <div className="name-btn-flex">
                  <p className="name">
                    {content?.name ?? content?.originalName}
                    {content && (
                      <span className="views-by-name-side">
                        <span className="views-eye-container">
                          <FaEye
                            size={23}
                            color={`${
                              content?.viewsCount > 0 ? "red" : "black"
                            }`}
                          />
                        </span>
                        ({content.viewsCount})
                      </span>
                    )}
                  </p>
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
                  <Button onClick={handleBackChapter}>Back</Button>
                  <Button onClick={handleNextChapter}>Next</Button>
                  {/* <Button onClick={handleRepeatChapter}>Repeat</Button> */}
                  <Button onClick={handleEndChapter}>End</Button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-12 col-lg-12" id="VideosCollection">
            <div className="Upper_portion">
              <div className="row">
                {timeStamps &&
                  timeStamps
                    .filter((item) => item?.status !== "hide")
                    .map((item, i) => (
                      <ChapterReactCard
                        introUrl={parseUrlFromModel(content)}
                        key={i}
                        item={item}
                        ip={ip}
                        timeStamps={timeStamps}
                        editTimeStamps={editTimeStamps}
                        handleEditTimestamp={handleEditTimestamp}
                        handleUpdateTimestamp={handleUpdateTimestamp}
                        handleChapterClick={handleChapterClick} // child to parent props
                        active={selectedChapter}
                        repeated={repeatedChapter}
                        handleRepeatChapter={handleRepeatChapter}
                      />
                    ))}
                {/* {
                    colorslist.map((item, index) => {
                      return <h3 style={{backgroundColor: colorslist[index]}}>{item}</h3>
                    })
                  } */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePlayer;
