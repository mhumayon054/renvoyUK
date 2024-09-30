import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { handleModel } from "../../../redux/layoutSlices/modelSlice";

// import ContentModelBody from "./contentModelBody";

function ContentModal({ show, closeModal }) {
  const state = useSelector((state) => state.model?.modelState?.contentModel);
  const d = useDispatch();
  const modelsArgs = useSelector(
    (state) => state.model?.modelArgs?.contentModel
  );
  const closeModel = () => {
    if (modelsArgs?.callBack && modelsArgs[modelsArgs.type]) modelsArgs.callBack(modelsArgs[modelsArgs.type])
    d(handleModel({ model: 'contentModel', state: false }))
  }
  return (
    <div>
      <Modal
        className="content-modal"
        style={{
          overflow: "hidden",
          // width: 490,
          alignItems: "center",
          justifyContent: "center",
          margin: "auto",
          // left: 400,
          // right: 400,
        }}
        backdrop="static"
        show={state}
        size="lg"
        centered
        onHide={closeModel}
      >
        <Modal.Body>
          {/* <ContentModelBody closeModel={closeModel} /> */}
        </Modal.Body>
      </Modal>
    </div>
  );
}
export default React.memo(ContentModal)