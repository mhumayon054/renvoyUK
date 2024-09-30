import React from "react";
import { Dropdown } from "react-bootstrap";
import { parseUrlFromModel } from "../../../helpers/asset";
import { FaFolder, FaImage, FaMusic, FaPlay } from "react-icons/fa";
import { IoDocumentText } from "react-icons/io5";
import { FaFilePdf } from "react-icons/fa";

const LibraryGridCards = ({ collection: data }) => {
  console.log("🚀 ~ LibraryGridCards ~ data:", data)
  function detectFileType(fileName) {
    const fileExtension = fileName.split(".").pop().toLowerCase();

    const videoExtensions = ["mp4", "webm", "avi", "mkv", "mov", "flv"];
    const imageExtensions = ["jpeg", "jpg", "png", "gif", "bmp", "tiff"];
    const audioExtensions = ["mp3", "wav", "aac", "ogg", "flac"];
    const documentExtensions = [
      "pdf",
      "doc",
      "docx",
      "ppt",
      "pptx",
      "xls",
      "xlsx",
    ];

    if (videoExtensions.includes(fileExtension)) {
      return "video";
    } else if (imageExtensions.includes(fileExtension)) {
      return "image";
    } else if (audioExtensions.includes(fileExtension)) {
      return "audio";
    } else if (documentExtensions.includes(fileExtension)) {
      return "document";
    } else if (documentExtensions.includes(fileExtension)) {
      return "pdf";
    } else {
      return "unknown";
    }
  }

  const getBackgroundColor = () => {
    const fileType = detectFileType(data?.name);

    switch (fileType) {
      case "video":
        return "#2181FA";
      case "audio":
        return "#FD405D";
      case "document":
        return "#FD405D";
      default:
        return "#ffffff";
    }
  };

  return (
    <div className="col-xl-3 col-lg-4 col-sm-6">
      <div className="assets-grid-card">
        <div
          className="banner"
          style={{ backgroundColor: getBackgroundColor(), padding: "10px 0px" }}
        >
          {
            <>
              {detectFileType(data?.name) === "image" ? (
                <img src={parseUrlFromModel(data)} />
              ) : detectFileType(data?.name) === "audio" ? (
                <FaMusic size={150} style={{ marginRight: "10px" }} />
              ) : detectFileType(data?.name) === "video" ? (
                <FaPlay size={150} style={{ marginRight: "10px" }} />
              ) : detectFileType(data?.name) === "document" ||
                detectFileType(data?.name) === "pdf" ? (
                <FaFilePdf size={150} style={{ marginRight: "10px" }} />
              ) : (
                <IoDocumentText size={150} style={{ marginRight: "10px" }} />
              )}
            </>
          }
        </div>
        <div className="content">
          <div>
            <h2
              title={
                data?.name &&
                (data?.name.includes("-")
                  ? data?.name?.split("/").pop()?.split("-")[1]?.split(".")[0]
                  : data?.name.split("/")[data?.name.split("/").length - 2])
              }
            >
              {/* {data?.name} */}
              {/* {data?.name &&
                (data?.name.includes("-")
                  ? data?.name?.split("/").pop()?.split("-")[1]?.split(".")[0]
                  : data?.name.split("/")[data?.name.split("/").length - 2])} */}
              {data?.name.split("-")[data?.name.split("/").length - 1]}
            </h2>
          </div>
          <div className="actions">
            <div className="box">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <path
                  d="M2 18C1.45 18 0.979167 17.8042 0.5875 17.4125C0.195833 17.0208 0 16.55 0 16V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H16C16.55 0 17.0208 0.195833 17.4125 0.5875C17.8042 0.979167 18 1.45 18 2V16C18 16.55 17.8042 17.0208 17.4125 17.4125C17.0208 17.8042 16.55 18 16 18H2ZM2 16H16V2H2V16ZM3 14H15L11.25 9L8.25 13L6 10L3 14Z"
                  fill="black"
                />
              </svg>
         
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default LibraryGridCards;
