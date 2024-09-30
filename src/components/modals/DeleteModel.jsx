import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { handleModel } from "../../redux/layoutSlices/modelSlice";
import { parseUrlFromModel } from "../../helpers/asset";

export default function DeleteModel() {
  const state = useSelector((state) => state.model?.modelState?.DeleteModel);
  const [inputName, setInputName] = React.useState("");
  const modelsArgs = useSelector(
    (state) => state.model?.modelArgs?.DeleteModel
  );
  const d = useDispatch();
  const [error, setError] = React.useState(false);

  // close model
  const closeModel = () =>
    d(handleModel({ model: "DeleteModel", state: false }));
  const proceed = () => {
    if (inputName === modelsArgs?.data?.name) {
      if (modelsArgs?.callBack) modelsArgs.callBack();
      d(handleModel({ model: "DeleteModel", state: false }));
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <Modal
      className="index-create-model"
      show={state}
      size="md"
      onHide={closeModel}
      centered
    >
      <Modal.Body>
        <div className="m-header">
          <h3>Delete {modelsArgs?.module}</h3>
          <i className="fa-solid fa-xmark" onClick={closeModel}></i>
        </div>
        <div className="m-body">
          <div className="delete-folder-section">
            <div className="icon">
              <img src={parseUrlFromModel(modelsArgs?.data?.image)} />
            </div>
            <h4>{modelsArgs?.data?.name}</h4>
            {/* <div className="detail">
              <h6>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M6 16C5.45 16 4.97917 15.8042 4.5875 15.4125C4.19583 15.0208 4 14.55 4 14V2C4 1.45 4.19583 0.979167 4.5875 0.5875C4.97917 0.195833 5.45 0 6 0H18C18.55 0 19.0208 0.195833 19.4125 0.5875C19.8042 0.979167 20 1.45 20 2V14C20 14.55 19.8042 15.0208 19.4125 15.4125C19.0208 15.8042 18.55 16 18 16H6ZM6 14H18V6H11V2H6V14ZM4 20V18H6V20H4ZM2 4H0C0 3.45 0.195833 2.97917 0.5875 2.5875C0.979167 2.19583 1.45 2 2 2V4ZM8 20V18H10V20H8ZM12 20V18H14V20H12ZM2 18V20C1.45 20 0.979167 19.8042 0.5875 19.4125C0.195833 19.0208 0 18.55 0 18H2ZM0 16V14H2V16H0ZM0 12V10H2V12H0ZM0 8V6H2V8H0ZM16 18H18C18 18.55 17.8042 19.0208 17.4125 19.4125C17.0208 19.8042 16.55 20 16 20V18Z"
                    fill="#2D2F31"
                  />
                </svg>
                3 Sections
              </h6>
              <h6>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M10 17H19V11H10V17ZM4 20C3.45 20 2.97917 19.8042 2.5875 19.4125C2.19583 19.0208 2 18.55 2 18V6C2 5.45 2.19583 4.97917 2.5875 4.5875C2.97917 4.19583 3.45 4 4 4H20C20.55 4 21.0208 4.19583 21.4125 4.5875C21.8042 4.97917 22 5.45 22 6V18C22 18.55 21.8042 19.0208 21.4125 19.4125C21.0208 19.8042 20.55 20 20 20H4ZM4 18H20V6H4V18Z"
                    fill="#2D2F31"
                  />
                </svg>
                10 Components
              </h6>
            </div> */}
            <p>
              Confirm your choice to proceed with the farewell party for your
              file.
            </p>
            <Form.Control
              type="email"
              onChange={(e) => setInputName(e.target.value)}
              placeholder={`To confirm, type in ${modelsArgs?.data?.name} the box`}
            />
            {error && <p className="text-danger">Enter the correct name</p>}
          </div>
        </div>
        <div className="m-footer">
          <button className=" btn btn-cancel" onClick={closeModel}>
            Cancel
          </button>
          <button className=" btn btn-save" onClick={proceed}>
            Delete
          </button>
        </div>
      </Modal.Body>
    </Modal>
  );
}
