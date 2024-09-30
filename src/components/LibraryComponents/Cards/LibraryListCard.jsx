import React from "react";
import { Dropdown } from "react-bootstrap";
import { deleteAssertAsyncThunk } from "../../../redux/pagesSlices/assertsSlice";
import { Link, useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { FaFolder, FaImage, FaMusic, FaPlay } from "react-icons/fa";
import { IoDocumentText } from "react-icons/io5";
import { parseUrlFromModel } from "../../../helpers/asset";
import { FaFilePdf } from "react-icons/fa";
import { deleteContentAsyncThunk } from "../../../redux/pagesSlices/contentSlice";

const LibraryListCard = ({ collection: data }) => {
  const createdAtDate = data?.createdAt && data.createdAt.split("T")[0];

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

  const d = useDispatch();

  const handleDelete = (id) => {
    d(deleteContentAsyncThunk(id));
  };


  return (
    <div>
      <div className="assets-table-body">
        <div className="row">
          <div className="col-lg-4 col-4">
            <div className="table-row">
              <div className="table-data">
                {
                  <>
                    {detectFileType(data?.name) === "image" ? (
                      <img
                        style={{ width: "30%" }}
                        src={parseUrlFromModel(data)}
                      />
                    ) : detectFileType(data?.name) === "audio" ? (
                      <FaMusic size={40} style={{ marginRight: "10px" }} />
                    ) : detectFileType(data?.name) === "video" ? (
                      <FaPlay size={40} style={{ marginRight: "10px" }} />
                    ) : detectFileType(data?.name) === "document" ||
                      detectFileType(data?.name) === "pdf" ? (
                      <FaFilePdf size={40} style={{ marginRight: "10px" }} />
                    ) : (
                      <IoDocumentText
                        size={40}
                        style={{ marginRight: "10px" }}
                      />
                    )}
                  </>
                }
                <h3
                  title={
                    data?.name.split("-")[data?.name.split("/").length - 1]
                  }
                >
                  {data?.name}
                  {/* {data?.name.split("-")[data?.name.split("/").length - 1]} */}
                </h3>
              </div>
            </div>
          </div>
          <div className="col-lg-8 col-8">
            <div className="table-row">
              <div className="table-data">{data?.mimeType.split("/")[1]}</div>
              <div className="table-data">
                <p>{createdAtDate}</p>
              </div>
              <div className="table-data">
                <p>{data?.size}</p>
              </div>
              <div className="table-data">
                <Dropdown>
                  <Dropdown.Toggle variant="" id="dropdown-basic">
                    <p>
                      <i className="fa-solid fa-ellipsis"></i>
                    </p>
                  </Dropdown.Toggle>
                  <Dropdown.Menu className="select-option-dropdown">
                  <div className="option">
                    <Link to={`/admin/createStamp/${data?.id}`}>
                      
                    <i className="fa-solid fa-plus"></i>
                        <span>Chapter</span>
                    </Link>
                    {/* <Link to={`/admin/updateThumbnail/${data?.id}`}>

                    <i className="fa-solid fa-pencil"></i>
                        <span>Edit Thumbnail</span>
                    </Link> */}

                      <p onClick={() => handleDelete(data?.id)}>
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
                        Delete
                      </p>
                    </div>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LibraryListCard;
