import React from "react";
import { Dropdown } from "react-bootstrap";
import { deleteAssertAsyncThunk } from "../../../redux/pagesSlices/assertsSlice";
import { Link, useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { FaFolder, FaImage, FaMusic, FaPlay } from "react-icons/fa";
import { IoDocumentText } from "react-icons/io5";
import { parseUrlFromModel } from "../../../helpers/asset";
import { FaFilePdf } from "react-icons/fa";

const FLibraryListCard = ({ collection: data }) => {
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

  return (
    <div>
      <div className="assets-table-body">
          <Link to={`/player/${data?.id}`}>
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
                  {data?.name.split("-")[data?.name.split("/").length - 1]}
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
            </div>
          </div>

        </div>
          </Link>


      </div>
    </div>
  );
};

export default FLibraryListCard;
