import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import dashjs from "dashjs";
import { useDispatch, useSelector } from "react-redux";
import { Formik } from "formik";
import {
  createTimeStampAsyncThunk,
  deleteTimeStampAsyncThunk,
  getTimeStampsAsyncThunk,
  updateTimeStampAsyncThunk,
} from "../redux/pagesSlices/timeStampSlice";
import { getContentAsyncThunk } from "../redux/pagesSlices/contentSlice";
import { handleModel } from "../redux/layoutSlices/modelSlice";
import { parseUrlFromModel } from "../helpers/asset";
import { useParams } from "react-router-dom";

const CreateStamps = () => {
  const [timeRanges, setTimeRanges] = useState([
    { startTime: "", endTime: "", name: "", status: "", description: "" },
  ]);
  const [currentIndex, setCurrentIndex] = useState(null); // Track current index

  const [selectedTime, setSelectedTime] = useState(null);
  const videoRef = useRef(null);
  const params = useParams();
  const dispatch = useDispatch();
  const modelArgs = useSelector(
    (state) => state.model?.modelArgs?.RightSidebarBase
  );
  const oldData = modelArgs?.args;
  const content = useSelector((state) => state.contents.content);
  console.log("🚀 ~ CreateStamps ~ content:", content)
  const timeStamps = useSelector((state) => state.timeStamp.timeStamps);

  useEffect(() => {
    let queryParams = {};

    dispatch(getContentAsyncThunk({id:params?.id, queryParams}));
    dispatch(getTimeStampsAsyncThunk({ contentId: params?.id, limit:60 }));
  }, [dispatch, params?.id]);

  useEffect(() => {
    if (timeStamps && timeStamps.results) {
      setTimeRanges(
        timeStamps.results.map((timeStamp) => ({
          name: timeStamp?.name,
          description: timeStamp?.description,
          status: timeStamp?.status,
          startTime: timeStamp?.startTime,
          endTime: timeStamp?.endTime,
          id: timeStamp?.id,
        }))
      );
    }
  }, [timeStamps]);

  const handleChangeTimeRange = (index, field, value) => {
    const formatTimeWithColon = (time) =>
      time
        .replace(/[^0-9]/g, "")
        .slice(0, 6)
        .replace(/(\d{2})(?=\d)/g, "$1:");

    const newTimeRanges = [...timeRanges];
    if (field === "startTime" || field === "endTime") {
      value = formatTimeWithColon(value);
    }
    newTimeRanges[index][field] = value;
    setTimeRanges(newTimeRanges);
  };

  const handleKeyPress = (event, index, field) => {
    const increment = 1; // You can change this increment as desired
    let newValue = timeRanges[index][field];
    if (event.key === "ArrowUp") {
      newValue = increaseTime(newValue, increment);
    } else if (event.key === "ArrowDown") {
      newValue = decreaseTime(newValue, increment);
    }
    handleChangeTimeRange(index, field, newValue);
  };

  const increaseTime = (timeString, increment) => {
    const timeArray = timeString.split(":");
    let [hours, minutes, seconds] = timeArray.map(Number);

    seconds += increment;
    if (seconds >= 60) {
      seconds = 0;
      minutes++;
    }
    if (minutes >= 60) {
      minutes = 0;
      hours++;
    }
    hours %= 24;

    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  const decreaseTime = (timeString, increment) => {
    const timeArray = timeString.split(":");
    let [hours, minutes, seconds] = timeArray.map(Number);

    seconds -= increment;
    if (seconds < 0) {
      seconds = 59;
      minutes--;
    }
    if (minutes < 0) {
      minutes = 59;
      hours--;
    }
    if (hours < 0) {
      hours = 23;
    }

    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  const formatTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time - hours * 3600) / 60);
    const seconds = Math.floor(time - hours * 3600 - minutes * 60);

    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  const handleProgressBarClick = (e) => {
    const progressBar = e.target;
    const rect = progressBar.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const width = rect.width;
    const clickTime = (offsetX / width) * videoRef.current.duration;

    const newTimeRange = {
      startTime:
        timeRanges.length === 0
          ? "00:00:00"
          : timeRanges[timeRanges.length - 1].endTime,
      endTime: formatTime(clickTime),
      name: `CH ${timeRanges.length + 1}`,
      description: "",
      status: "publish",
    };

    setTimeRanges([...timeRanges, newTimeRange]);
    setSelectedTime(clickTime);
  };

  const handleOverlayClick = (e) => {
    const overlay = e.currentTarget;
    const rect = overlay.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const width = rect.width;
    const clickTime = (offsetX / width) * videoRef.current.duration;

    const newTimeRange = {
      startTime: formatTime(clickTime),
      endTime: "",
      name: `CH ${timeRanges.length + 1}`,
      description: "",
      status: "publish",
    };

    setTimeRanges([...timeRanges, newTimeRange]);
  };

  const handleAddTimeRange = () => {
    setTimeRanges([
      ...timeRanges,
      { startTime: "", endTime: "", name: "", status: "", description: "" },
    ]);
  };

  const handleAddTimeRangeInNextIndex = (index) => {
    if (index !== null && index !== undefined) {
      const newTimeRanges = [...timeRanges];
      newTimeRanges.splice(index + 1, 0, {
        startTime: "",
        endTime: "",
        name: "",
        description: "",
        status: "",
      });
      setTimeRanges(newTimeRanges);
    }
  };

  const deleteTimeRange = (id) => {
    dispatch(
      deleteTimeStampAsyncThunk({
        id,
        contentId: params?.id,
        callBack: () => {
          // Callback logic if needed
        },
      })
    );
  };

  const deleteTimeRangeNewly = (index) => {
    // Filter out the time range at the specified index
    const updatedTimeRanges = timeRanges.filter((_, i) => i !== index);
    setTimeRanges(updatedTimeRanges);
  };

  // const autoGenerateChapters = async () => {
  //   if (timeRanges.length === 0) {
  //     const totalDuration = videoRef.current?.duration;
  //     if (!isNaN(totalDuration) && totalDuration !== 0) {
  //       const segmentDuration = totalDuration / 6;
  //       const chapters = [];
  //       for (let i = 0; i < 6; i++) {
  //         const startTime = formatTime(segmentDuration * i);
  //         const endTime = formatTime(segmentDuration * (i + 1));
  //         const name = `CH ${i + 1}`;
  //         const status = "publish";
  //         chapters.push({ startTime, endTime, name, status });
  //       }
  //       setTimeRanges(chapters);
  //     }
  //   }
  // };

  const autoGenerateChapters = async () => {
    if (timeRanges.length === 0) {
      const totalDuration = videoRef.current?.duration;
      console.log("🚀 ~ autoGenerateChapters ~ totalDuration:", totalDuration);
      if (!isNaN(totalDuration) && totalDuration !== 0) {
        const segmentDuration = totalDuration / 12;
        const chapters = [];

        let chapterNum = 1;
        // const step = 3;
        const step = Math.floor(Math.random() * 10) + 1;
        console.log("🚀 ~ autoGenerateChapters ~ step:", step);

        for (let i = 0; i < 12; i++) {
          const startTime = formatTime(segmentDuration * i);
          const endTime = formatTime(segmentDuration * (i + 1));
          const name = `CH0${chapterNum.toString().padStart(2, "0")}`;
          const description = "";
          const status = "publish";
          chapters.push({ startTime, endTime, name, status, description });

          chapterNum += step;
        }

        setTimeRanges(chapters);
      }
    }
  };

  // const autoGenerateChapters = async () => {
  //   if (timeRanges.length === 0) {
  //     const totalDuration = videoRef.current?.duration;
  //     if (!isNaN(totalDuration) && totalDuration !== 0) {
  //       const segmentDuration = totalDuration / 6;
  //       const chapters = [
  //         {
  //           startTime: "00:00:00",
  //           endTime: formatTime(segmentDuration),
  //           name: "CH001",
  //           status: "publish",
  //         },
  //         {
  //           startTime: formatTime(segmentDuration),
  //           endTime: formatTime(segmentDuration * 2),
  //           name: "CH010",
  //           status: "publish",
  //         },
  //         {
  //           startTime: formatTime(segmentDuration * 2),
  //           endTime: formatTime(segmentDuration * 3),
  //           name: "CH020",
  //           status: "publish",
  //         },
  //         {
  //           startTime: formatTime(segmentDuration * 3),
  //           endTime: formatTime(segmentDuration * 4),
  //           name: "CH030",
  //           status: "publish",
  //         },
  //         {
  //           startTime: formatTime(segmentDuration * 4),
  //           endTime: formatTime(segmentDuration * 5),
  //           name: "CH040",
  //           status: "publish",
  //         },
  //         {
  //           startTime: formatTime(segmentDuration * 5),
  //           endTime: formatTime(segmentDuration * 6),
  //           name: "CH050",
  //           status: "publish",
  //         },
  //       ];
  //       setTimeRanges(chapters);
  //     }
  //   }
  // };

  useEffect(() => {
    const timeout = setTimeout(autoGenerateChapters, 6000);
    return () => clearTimeout(timeout);
  }, [timeRanges.length, autoGenerateChapters]);

  const createCollectionHandler = async (data, { resetForm }) => {
    const payload = timeRanges.map(
      ({ startTime, endTime, name, status, description }) => ({
        startTime,
        endTime,
        contentId: params?.id,
        name,
        description,
        status: status ? status : "publish",
      })
    );

    try {
      if (timeStamps?.results?.length > 0) {
        const promises = payload.map((timeStamp, index) => {
          if (timeStamps?.results[index]?.id) {
            return dispatch(
              updateTimeStampAsyncThunk({
                id: timeStamps?.results[index]?.id,
                data: timeStamp,
              })
            );
          } else {
            return dispatch(
              createTimeStampAsyncThunk({
                data: timeStamp,
              })
            );
          }
        });

        await Promise.all(promises);
      } else {
        await dispatch(
          createTimeStampAsyncThunk({
            data: payload,
          })
        );
      }

      // All timestamps updated successfully
      toast.success("All TimeStamps Updated Successfully!");

      closeModel();
      setTimeRanges([
        { startTime: "", endTime: "", name: "", status: "", description: "" },
      ]);
      resetForm();
    } catch (error) {
      console.error("Error updating timestamps:", error);
      // Handle error here
    }
  };

  const closeModel = () => {
    dispatch(handleModel({ model: "RightSidebarBase", state: false }));
  };

  return (
    <div className="container">
      <h2 className="mb-4">Custom Video Playback with Chapter Control</h2>
      <Formik
        initialValues={{
          ...(oldData?.id
            ? {
                ...oldData,
                video: oldData?.video?.id,
                id: undefined,
              }
            : {
                name: "",
                description: "",
                startTime: "",
                endTime: "",
                video: "",
                status: "",
              }),
        }}
        onSubmit={createCollectionHandler}
      >
        {({
          handleSubmit,
          handleChange,
          handleBlur,
          setFieldValue,
          values,
          errors,
          touched,
        }) => (
          <div className="create-course-sibebar">
            <video
              controls
              style={{ width: "100%", margin: "auto" }}
              src={parseUrlFromModel(content)}
              ref={videoRef}
            />
            <div className="progress" onClick={handleProgressBarClick}>
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: "0%" }}
                aria-valuenow="0"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>

            {timeRanges?.map((timeRange, index) => (
              <div className="Create-box row mb-3 mt-3" key={index}>
                <div className="col-lg-3">
                  <label>
                    <h5>CH Name</h5>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Your chapter Name"
                    value={timeRange?.name}
                    onChange={(e) =>
                      handleChangeTimeRange(index, "name", e.target.value)
                    }
                  />
                </div>

                <div className="col-lg-3">
                  <label>
                    <h5>Status</h5>
                  </label>

                  <div className="checkbox-flex-box">
                    <label htmlFor={`publish_${index}`} className="mr-2">
                      Publish
                      <input
                        type="checkbox"
                        id={`publish_${index}`}
                        checked={timeRange.status === "publish"}
                        onChange={(e) =>
                          handleChangeTimeRange(
                            index,
                            "status",
                            e.target.checked ? "publish" : "hide"
                          )
                        }
                      />
                    </label>
                    <label htmlFor={`hide_${index}`} className="mr-2">
                      Hide/Play
                      <input
                        type="checkbox"
                        id={`hide_${index}`}
                        checked={timeRange.status === "hide"}
                        onChange={(e) =>
                          handleChangeTimeRange(
                            index,
                            "status",
                            e.target.checked ? "hide" : "publish"
                          )
                        }
                      />
                    </label>
                    <label htmlFor={`forcePlay_${index}`}>
                      Force Hide
                      <input
                        type="checkbox"
                        id={`forcePlay_${index}`}
                        checked={timeRange.status === "force play"}
                        onChange={(e) =>
                          handleChangeTimeRange(
                            index,
                            "status",
                            e.target.checked ? "force play" : "publish"
                          )
                        }
                      />
                    </label>
                  </div>
                </div>

                {/* Time range fields */}
                <div className="col-lg-2">
                  <label>
                    <h5>Start Time</h5>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    pattern="[0-9]{2}:[0-9]{2}:[0-9]{2}"
                    placeholder="hh:mm:ss"
                    value={timeRange.startTime}
                    onChange={(e) =>
                      handleChangeTimeRange(index, "startTime", e.target.value)
                    }
                    onKeyDown={(e) => handleKeyPress(e, index, "startTime")}
                  />
                </div>
                <div className="col-lg-2">
                  <label>
                    <h5>End Time</h5>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    pattern="[0-9]{2}:[0-9]{2}:[0-9]{2}"
                    placeholder="hh:mm:ss"
                    value={timeRange.endTime}
                    onChange={(e) =>
                      handleChangeTimeRange(index, "endTime", e.target.value)
                    }
                    onKeyDown={(e) => handleKeyPress(e, index, "endTime")}
                  />
                </div>

                {timeRange?.id ? (
                  <div
                    className="col-md-1 m-auto"
                    style={{ cursor: "pointer" }}
                    onClick={() => deleteTimeRange(timeRange?.id)}
                  >
                    <i className="fa fa-trash"></i>
                  </div>
                ) : (
                  <div
                    className="col-md-1 m-auto"
                    style={{ cursor: "pointer" }}
                    onClick={() => deleteTimeRangeNewly(index)} // Pass the index to deleteTimeRange
                  >
                    {/* new entry delete */}
                    <i className="fa fa-trash"></i>
                  </div>
                )}

                <div>
                  <label className="mt-4">
                    <h5>CH Description</h5>
                  </label>
                  <textarea
                    type="text"
                    cols={30}
                    rows={5}
                    className="form-control"
                    placeholder="Enter description here"
                    value={timeRange?.description}
                    onChange={(e) =>
                      handleChangeTimeRange(
                        index,
                        "description",
                        e.target.value
                      )
                    }
                  />
                </div>
                <button
                  onClick={() => handleAddTimeRangeInNextIndex(index)}
                  className="btn btn-secondary btn-block mt-3 me-3"
                >
                  +
                </button>
              </div>
            ))}

            {/* Button to add new time range */}
            <div className="row mb-3 btn-box">
              <div className="col-md-12">
                <button
                  onClick={handleAddTimeRange}
                  className="btn btn-secondary btn-block mt-3 me-3"
                >
                  +
                </button>

                {timeRanges.length < 1 && (
                  <button
                    type="submit"
                    onClick={handleSubmit}
                    className="btn btn-dark btn-block mt-3"
                  >
                    Create
                  </button>
                )}

                {timeRanges.length > 0 && (
                  <button
                    type="submit"
                    onClick={handleSubmit}
                    className="btn btn-dark btn-block mt-3"
                  >
                    Update
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default CreateStamps;
