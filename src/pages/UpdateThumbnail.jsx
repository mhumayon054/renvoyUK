import React, { useEffect, useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { FileUploader } from "react-drag-drop-files";
import { useDispatch, useSelector } from "react-redux";
import { getContentsAsyncThunk } from "../redux/pagesSlices/contentSlice";
import ProgressBar from "react-bootstrap/ProgressBar";
import { upContentAsyncThunk } from "../redux/pagesSlices/contentSlice";
import { imageFileTypes } from "../constants";
import { useParams, useLocation } from "react-router-dom";

function UpdateThumbnail({ closeModel }) {
  const params = useParams();
  const d = useDispatch();
  const [progress, setProgress] = useState(0);
  const [key, setKey] = useState("upload");

  const [thumbnailFile, setThumbnailFile] = useState(null);
  const handleThumbnailChange = (files) => {
    // Check if files is a FileList object
    if (files instanceof FileList) {
      // Convert FileList to an array
      const fileList = Array.from(files);
      setThumbnailFile(fileList);
    } else {
      // If files is not a FileList object, set it directly
      setThumbnailFile(files);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (thumbnailFile && thumbnailFile.length > 0) {
      const fileToUpload = Array.isArray(thumbnailFile)
        ? thumbnailFile[0]
        : thumbnailFile;
      const formData = new FormData();
      formData.append("thumbnailFile", fileToUpload);
      d(
        upContentAsyncThunk({
          id: params?.id,
          data: formData,
          callBack: () => {
            setTimeout(() => {
              setProgress(0);
            }, 1000);
            setThumbnailFile([]);
          },
          options: {
            onUploadProgress: (progressEvent) => {
              // const progress = (progressEvent.loaded / progressEvent.total) * 50;
              // console.log("progress::onUploadProgress:::", progress);
              // setProgress(progress);

              //
              const percentCompleted = Math.round(
                (progressEvent.loaded * 100) / progressEvent.total
              );
              // console.log("percentCompleted::", percentCompleted);
              setProgress(percentCompleted);

              //
            },
            onDownloadProgress: (progressEvent) => {
              const progress =
                50 + (progressEvent.loaded / progressEvent.total) * 50;
              // console.log("progress:onDownloadProgress::", progress);
              setProgress(progress);
            },
          },
        })
      );
    }
  };

  useEffect(() => {
    d(
      getContentsAsyncThunk({
        mimeType: "video",
      })
    );
  }, []);

  return (
    <div className="content-body">
      <div className="tabs-heading">
        <div>
          <div className="tabs-heading">
            <div>
              <h2
                style={
                  {
                    // fontSize: 14,
                    // fontFamily: 'sans-serif',
                    // fontWeight: 'bold',
                    // letterSpacing: 1,
                    // color: '#36454F'
                  }
                }
              >
                Media gallery
              </h2>
            </div>
          </div>
        </div>
        {closeModel && (
          <div onClick={closeModel} className="modal-close-btn">
            {/* <button style={{ paddingLeft: '25px', paddingRight: '25px', marginLeft: '-10px' }} className='btn btn-danger'>Close</button> */}
            <div className="model-icon">
              <i
                style={{ marginTop: "13px", fontWeight: 600, fontSize: 22 }}
                className="fa-thin fa-circle-xmark"
              ></i>
            </div>
          </div>
        )}
      </div>
      <div className="library-tabs">
        <form onSubmit={onSubmit}>
          <div style={{ height: 300 }} className={"uploader-drag-drop"}>
            <FileUploader
              multiple={true}
              handleChange={handleThumbnailChange}
              name="thumbnailFile"
              types={imageFileTypes}
            />
          </div>
          <p style={{ marginTop: "20px" }}>
            <ProgressBar now={progress} />
            {thumbnailFile && thumbnailFile.length
              ? `File name: ${Object.values(thumbnailFile)?.map(
                  (item, i) => `${i + 1} :  ${item?.name}`
                )}`
              : "Select or drop file to upload!"}
          </p>
          <div className="tab-content">
            <button
              style={{ padding: "5px 30px" }}
              className="btn btn-danger"
              type="submit"
            >
              Upload
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default React.memo(UpdateThumbnail);
