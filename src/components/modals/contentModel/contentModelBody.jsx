// import React, { useEffect, useState } from "react";
// import Tab from "react-bootstrap/Tab";
// import Tabs from "react-bootstrap/Tabs";
// import { FileUploader } from "react-drag-drop-files";
// import { useDispatch, useSelector } from "react-redux";
// import { getContentsAsyncThunk } from "../../../redux/pagesSlices/contentSlice";
// import VideosList from "./VideosList";
// import ProgressBar from "react-bootstrap/ProgressBar";
// import { createContentAsyncThunk } from "../../../redux/pagesSlices/contentSlice";
// import { fileTypes } from "../../../constants";

// function ContentModelBody({ closeModel }) {
//   const d = useDispatch();
//   const [progress, setProgress] = useState(0);
//   const [key, setKey] = useState("upload");

//   const [file, setFile] = useState([]);

//   const handleChange = (e) => {
//     setFile(e);
//   };

//   const onSubmit = (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     if (file.length) {
//       for (let i = 0; i < file.length; i++) {
//         formData.append("files", file[i]);
//       }
//     } else {
//       console.log("callll", file);
//       return;
//     }
//     d(
//       createContentAsyncThunk({
//         data: formData,
//         callBack: () => {
//           setTimeout(() => {
//             setProgress(0);
//           }, 1000);
//           setFile([]);
//         },
//         options: {
//           headers: {
//             "Content-Type": "multipart/form-data",
//           },
//           onUploadProgress: (progressEvent) => {
//             // const progress = (progressEvent.loaded / progressEvent.total) * 50;
//             // console.log("progress::onUploadProgress:::", progress);
//             // setProgress(progress);

//             //
//             const percentCompleted = Math.round(
//               (progressEvent.loaded * 100) / progressEvent.total
//             );
//             console.log("percentCompleted::", percentCompleted);
//             setProgress(percentCompleted);

//             //
//           },
//           onDownloadProgress: (progressEvent) => {
//             const progress =
//               50 + (progressEvent.loaded / progressEvent.total) * 50;
//             console.log("progress:onDownloadProgress::", progress);
//             setProgress(progress);
//           },
//         },
//       })
//     );
//   };

//   useEffect(() => {
//     d(getContentsAsyncThunk());
//   }, []);

//   return (
//     <div>
//       <div className="tabs-heading">
//         <div>
//             <div

//                 className='tabs-heading'
//             >
//                 <div>
//                     <h2
//                         style={{
//                             // fontSize: 14,
//                             // fontFamily: 'sans-serif',
//                             // fontWeight: 'bold',
//                             // letterSpacing: 1,
//                             // color: '#36454F'
//                         }}>Media gallery</h2>
//                 </div>
//             </div>
//         </div>
//         {closeModel && (
//           <div onClick={closeModel} className="modal-close-btn">
//             {/* <button style={{ paddingLeft: '25px', paddingRight: '25px', marginLeft: '-10px' }} className='btn btn-danger'>Close</button> */}
//             <div className="model-icon">
//               <i
//                 style={{ marginTop: "13px", fontWeight: 600, fontSize: 22 }}
//                 className="fa-thin fa-circle-xmark"
//               ></i>
//             </div>
//           </div>
//         )}
//       </div>
//       <div className="library-tabs">
//         <Tabs
//           id="controlled-tab-example"
//           activeKey={key}
//           onSelect={(k) => setKey(k)}
//           className="mb-3"
//         >
//           <Tab eventKey="upload" title="Upload">
//             <form onSubmit={onSubmit}>
//               <div style={{ height: 300 }} className={"uploader-drag-drop"}>
//                 <FileUploader
//                   multiple={true}
//                   handleChange={handleChange}
//                   name="file"
//                   types={fileTypes}
//                 />
//               </div>
//               <p style={{ marginTop: "20px" }}>
//                 <ProgressBar now={progress} />
//                 {file && file.length
//                   ? `File name: ${Object.values(file)?.map(
//                       (item, i) => `${i + 1} :  ${item?.name}`
//                     )}`
//                   : "Select or drop file to upload!"}
//               </p>
//               <button
//                 style={{ padding: "5px 30px" }}
//                 className="btn btn-danger"
//                 type="submit"
//               >
//                 Upload
//               </button>
//             </form>
//           </Tab>

//           <Tab eventKey="video" title="Video" className="video-tab">
//             <VideosList _key={key} />
//           </Tab>
//         </Tabs>
//       </div>
//     </div>
//   );
// }
// export default React.memo(ContentModelBody);

import React, { useEffect, useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { FileUploader } from "react-drag-drop-files";
import { useDispatch, useSelector } from "react-redux";
import { getContentsAsyncThunk } from "../../../redux/pagesSlices/contentSlice";
import VideosList from "./VideosList";
import ProgressBar from "react-bootstrap/ProgressBar";
import { createContentAsyncThunk } from "../../../redux/pagesSlices/contentSlice";
import { fileTypes, imageFileTypes } from "../../../constants";

function ContentModelBody({ closeModel }) {
  const d = useDispatch();
  const [progress, setProgress] = useState(0);
  const [key, setKey] = useState("upload");

  // const [file, setFile] = useState([]);
  const [thumbnailFile, setThumbnailFile] = useState(null);
  const [videoFile, setVideoFile] = useState([]);

  // const handleChange = (e) => {
  //   setFile(e);
  // };

  const handleThumbnailChange = (file) => {
    setThumbnailFile(file);
  };

  const handleVideoChange = (file) => {
    setVideoFile(file);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();

    if (videoFile.length) {
      for (let i = 0; i < videoFile.length; i++) {
        formData.append("videoFile", videoFile[i]);
      }
    } else {
      console.log("callll", videoFile);
      return;
    }

    formData.append("videoFile", videoFile);
    if (thumbnailFile) {
      formData.append("thumbnailFile", thumbnailFile);
    }

    d(
      createContentAsyncThunk({
        data: formData,
        callBack: () => {
          setTimeout(() => {
            setProgress(0);
            setVideoFile(null);
            setThumbnailFile(null);
          }, 1000);
          // setFile([]);
        },
        options: {
          headers: {
            "Content-Type": "multipart/form-data",
          },
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
            setProgress(progress);
          },
        },
      })
    );
  };

  useEffect(() => {
    d(
      getContentsAsyncThunk({
        mimeType: "video",
      })
    );
  }, []);

  return (
    <div>
      <div className="tabs-heading">
        <div>
          <div className="tabs-heading">
            <div>
              <h2 style={{}}>Media gallerys</h2>
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
        <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={(k) => setKey(k)}
          className="mb-3"
        >
          <Tab eventKey="upload" title="Upload">
            <form onSubmit={onSubmit}>
              <div className="form_flex">
                <div
                  // style={{ height: 150, border: "1px dashed" }}
                  className={"uploader-drag-drop card"}
                >
                  <h3>Select Thumbnail to upload</h3>
                  <p>Or drag and drop images files</p>
                  <FileUploader
                    multiple={false}
                    handleChange={handleThumbnailChange}
                    name="thumbnail"
                    types={imageFileTypes}
                  />
                </div>

                <div className={"uploader-drag-drop card"}>
                  <h3>Select Videos to upload</h3>
                  <p>Or drag and drop video files</p>
                  <FileUploader
                    multiple={true}
                    handleChange={handleVideoChange}
                    name="video"
                    types={fileTypes}
                  />
                </div>
              </div>
              <p style={{ marginTop: "20px" }}>
                <ProgressBar now={progress} />
                <p>
                  {thumbnailFile
                    ? thumbnailFile.name
                    : "Select or drop image to upload!"}
                </p>
                {/* <br/>
                {videoFile ? videoFile.name :"Select or drop video to upload!"} */}
                {videoFile && videoFile.length ? (
                  <>
                    <span>File name:</span>
                    {Object.values(videoFile)?.map((item, i) => (
                      <span key={i}>
                        <br />
                        {`${i + 1} : ${item?.name}`}
                      </span>
                    ))}
                  </>
                ) : (
                  "Select or drop file to upload!"
                )}
              </p>
              <button
                style={{ padding: "5px 30px" }}
                className="btn btn-danger"
                type="submit"
              >
                Upload
              </button>
            </form>
          </Tab>

          <Tab eventKey="video" title="Video" className="video-tab">
            <VideosList _key={key} />
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}
export default React.memo(ContentModelBody);
