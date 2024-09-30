import React from "react";
import { Dropdown } from "react-bootstrap";
import { parseUrlFromModel } from "../../../helpers/asset";
import { FaFolder, FaImage, FaMusic, FaPlay } from "react-icons/fa";
import { IoDocumentText } from "react-icons/io5";
import { FaFilePdf } from "react-icons/fa";

const FLibraryGridCards = ({ collection: data }) => {
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
    <div className="col-lg-4">
      <div className="assets-grid-card">
        <div
          className="banner"
          style={{ backgroundColor: getBackgroundColor() ,padding:"10px 0px"}}
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
              {data?.name &&
                (data?.name.includes("-")
                  ? data?.name?.split("/").pop()?.split("-")[1]?.split(".")[0]
                  : data?.name.split("/")[data?.name.split("/").length - 2])}
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
              {/* {type === "folder" && (
                <FaFolder size={40} style={{ padding: "6px" }} />
              )}
              {detectFileType(name) === "image" && (
                <FaImage size={40} style={{ padding: "6px" }} />
              )}
              {detectFileType(name) === "audio" && (
                <FaMusic size={40} style={{ padding: "6px" }} />
              )}
              {detectFileType(name) === "video" && (
                <FaPlay size={40} style={{ padding: "6px" }} />
              )} */}
            </div>
            {/* <div className="box">
              <Dropdown>
                <Dropdown.Toggle variant="link" id="dropdown-basic">
                  <p>
                    <i className="fa-solid fa-ellipsis"></i>
                  </p>
                </Dropdown.Toggle>
                <Dropdown.Menu className="select-option-dropdown">
                  <div className="heading">
                    <h4>Select option</h4>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M6.4 19L5 17.6L10.6 12L5 6.4L6.4 5L12 10.6L17.6 5L19 6.4L13.4 12L19 17.6L17.6 19L12 13.4L6.4 19Z"
                        fill="#1C1B1F"
                      />
                    </svg>
                  </div>
                  <div className="d-body">
                    <div
                      className="option"
                      // onClick={handleShow5}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M5 21.0016C4.45 21.0016 3.97917 20.8057 3.5875 20.4141C3.19583 20.0224 3 19.5516 3 19.0016V5.00156C3 4.45156 3.19583 3.98073 3.5875 3.58906C3.97917 3.1974 4.45 3.00156 5 3.00156H13.925L11.925 5.00156H5V19.0016H19V12.0516L21 10.0516V19.0016C21 19.5516 20.8042 20.0224 20.4125 20.4141C20.0208 20.8057 19.55 21.0016 19 21.0016H5ZM9 15.0016V10.7516L18.175 1.57656C18.375 1.37656 18.6 1.22656 18.85 1.12656C19.1 1.02656 19.35 0.976562 19.6 0.976562C19.8667 0.976562 20.1208 1.02656 20.3625 1.12656C20.6042 1.22656 20.825 1.37656 21.025 1.57656L22.425 3.00156C22.6083 3.20156 22.75 3.4224 22.85 3.66406C22.95 3.90573 23 4.15156 23 4.40156C23 4.65156 22.9542 4.8974 22.8625 5.13906C22.7708 5.38073 22.625 5.60156 22.425 5.80156L13.25 15.0016H9ZM11 13.0016H12.4L18.2 7.20156L17.5 6.50156L16.775 5.80156L11 11.5766V13.0016Z"
                          fill="#1C1B1F"
                        />
                      </svg>
                      <span>Rename</span>
                    </div>
                    <div className="option">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M7 21C6.45 21 5.97917 20.8042 5.5875 20.4125C5.19583 20.0208 5 19.55 5 19V6H4V4H9V3H15V4H20V6H19V19C19 19.55 18.8042 20.0208 18.4125 20.4125C18.0208 20.8042 17.55 21 17 21H7ZM17 6H7V19H17V6ZM9 17H11V8H9V17ZM13 17H15V8H13V17Z"
                          fill="#1C1B1F"
                        />
                      </svg>
                    // <span onClick={() => deleteAsserts()}>Delete</span>
                      <span>Delete</span>
                    </div>
                    <div
                      className="option"
                      // onClick={handleShow7}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M12 22L7.75 17.75L9.175 16.325L11 18.15V13H5.875L7.7 14.8L6.25 16.25L2 12L6.225 7.775L7.65 9.2L5.85 11H11V5.85L9.175 7.675L7.75 6.25L12 2L16.25 6.25L14.825 7.675L13 5.85V11H18.125L16.3 9.2L17.75 7.75L22 12L17.75 16.25L16.325 14.825L18.15 13H13V18.125L14.8 16.3L16.25 17.75L12 22Z"
                          fill="#1C1B1F"
                        />
                      </svg>
                      <span>Move</span>
                    </div>
                    <div
                      className="option"
                      //  onClick={handleShow6}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M3 21C2.45 21 1.97917 20.8042 1.5875 20.4125C1.19583 20.0208 1 19.55 1 19V6H3V19H20V21H3ZM7 17C6.45 17 5.97917 16.8042 5.5875 16.4125C5.19583 16.0208 5 15.55 5 15V4C5 3.45 5.19583 2.97917 5.5875 2.5875C5.97917 2.19583 6.45 2 7 2H12L14 4H21C21.55 4 22.0208 4.19583 22.4125 4.5875C22.8042 4.97917 23 5.45 23 6V15C23 15.55 22.8042 16.0208 22.4125 16.4125C22.0208 16.8042 21.55 17 21 17H7ZM7 15H21V6H13.175L11.175 4H7V15Z"
                          fill="#1C1B1F"
                        />
                      </svg>
                      <span>Duplicate</span>
                    </div>
                  </div>
                </Dropdown.Menu>
              </Dropdown>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FLibraryGridCards;
