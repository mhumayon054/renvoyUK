import Accordion from "react-bootstrap/Accordion";
import React, { useEffect, useRef, useState } from "react";
import {
  createPerformerAsyncThunk,
  deletePerformerAsyncThunk,
  getPerformersAsyncThunk,
  updatePerformerAsyncThunk,
} from "../redux/pagesSlices/performerSlice.jsx";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import "./perfomer.css";
import { FileUploader } from "react-drag-drop-files";
import { imageFileTypes } from "../constants.js";
import { ProgressBar } from "react-bootstrap";
import { parseUrlFromModel } from "../helpers/asset.js";

const Performer = () => {
  const dispatch = useDispatch();

  let email = JSON.parse(localStorage.getItem("user"))?.email;

  const [newPerformer, setNewPerformer] = useState({
    name: "",
    description: "",
    email: email,
    fb: "",
    instagram: "",
    youtube: "",
    bio: "",
  });

  console.log("🚀 ~ Performer ~ newPerformer:", newPerformer);

  const [contentFiles, setContentFiles] = useState([]);
  console.log("🚀 ~ Perfomer ~ contentFiles:", contentFiles);

  const performer = useSelector(
    (state) => state?.performer?.performer?.results[0]
  );

  console.log("The performers is:", performer);

  console.log("🚀 ~ handleUpdatePerformer ~ email:", email);

  useEffect(() => {
    if (performer) setNewPerformer(performer);
  }, [performer]);

  useEffect(() => {
    dispatch(getPerformersAsyncThunk({ email, populate: "content" }));
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPerformer((prev) => ({ ...prev, [name]: value }));
  };

  const handleContentChange = (files) => {
    const fileArray = Array.from(files); // Convert FileList to Array
    setContentFiles(fileArray);
  };

  const handleUpdatePerformer = (event) => {
    event.preventDefault();
    const formData = new FormData();
    contentFiles.forEach((file, index) => {
      formData.append(`content`, file);
    });

    formData.append("name", newPerformer.name);
    formData.append("description", newPerformer.description);
    formData.append("email", newPerformer.email);
    formData.append("fb", newPerformer.fb);
    formData.append("instagram", newPerformer.instagram);
    formData.append("youtube", newPerformer.youtube);
    formData.append("bio", newPerformer.bio);

    // Log FormData content
    for (const pair of formData.entries()) {
      console.log(`${pair[0]}: ${pair[1]}`);
    }

    dispatch(
      updatePerformerAsyncThunk({
        data: formData,
        id: email,
      })
    )
      .then(() => {
        console.log("newPerformer>>>>>>>", newPerformer);
        toast.success("Performer updated successfully!");
        setNewPerformer({
          name: "",
          description: "",
          email: "",
          fb: "",
          instagram: "",
          youtube: "",
          bio: "",
        });
        setContentFiles([]);
        // setNewPerformer(performer)
      })
      .catch((error) => {
        toast.error(
          newPerformer.id
            ? "Error updating Performer details."
            : "Error creating Performer."
        );
      });
  };

  return (
    <div className="performers-page">
      <div className="performers-list-container">
        <>
          <div className="assets-table-body py-4">
            <div>
              <h2 className="text-center">Update Performer</h2>

              {performer?.content && (
                <div
                  style={{
                    margin: "auto",
                    justifyContent: "center",
                    display: "flex",
                  }}
                >
                  <img
                    style={{
                      width: "100px",
                      height: "100px",
                      borderRadius: "100px",
                    }}
                    src={parseUrlFromModel(performer?.content)}
                    alt="content"
                  />
                </div>
              )}
              <form
                onSubmit={handleUpdatePerformer}
                className="create-performer"
              >
                <FileUploader
                  multiple={true}
                  handleChange={handleContentChange}
                  name="content"
                  types={imageFileTypes}
                />

                <input
                  type="text"
                  value={newPerformer.name}
                  name="name"
                  id="create-performer-name"
                  placeholder="Enter Performer's Name"
                  onChange={handleInputChange}
                  required
                />
                <input
                  type="text"
                  value={newPerformer.description}
                  name="description"
                  id="create-performer-description"
                  placeholder="Enter Performer's Description"
                  onChange={handleInputChange}
                  required
                />

                <input
                  type="email"
                  value={newPerformer.email}
                  name="email"
                  id="create-performer-email"
                  placeholder="Enter Performer's Email"
                  onChange={handleInputChange}
                  disabled
                />
                <input
                  type="url"
                  value={newPerformer.fb}
                  name="fb"
                  id="create-performer-fbLink"
                  placeholder="Enter Performer's Facebook Link"
                  onChange={handleInputChange}
                  required
                />
                <input
                  type="url"
                  value={newPerformer.youtube}
                  name="youtube"
                  id="create-performer-youtube"
                  placeholder="Enter Performer's YouTube Link"
                  onChange={handleInputChange}
                  required
                />
                <input
                  type="url"
                  value={newPerformer.instagram}
                  name="instagram"
                  id="create-performer-instagram"
                  placeholder="Enter Performer's instagramgram Link"
                  onChange={handleInputChange}
                  required
                />
                <textarea
                  value={newPerformer.bio}
                  name="bio"
                  id="create-performer-bio"
                  placeholder="Enter Performer's Bio"
                  onChange={handleInputChange}
                  required
                />
                {/* <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  required
                /> */}
                <button
                  type="submit"
                  className="btn btn-secondary btn-block mt-3"
                >
                  Update
                </button>
              </form>
            </div>
          </div>
        </>
      </div>
    </div>
  );
};

export default Performer;
