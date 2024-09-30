import React from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { handleModel } from "../../redux/layoutSlices/modelSlice";

export default function Confirmation() {
  const state = useSelector((state) => state.model?.modelState?.confirmation);
  const modelsArgs = useSelector(
    (state) => state.model?.modelArgs?.confirmation
  );
  const d = useDispatch();

  // close model
  const closeModel = () => d(handleModel({ model: "confirmation", state: false }));
  const proceed = () => {
    if (modelsArgs?.callBack) modelsArgs.callBack();
    d(handleModel({ model: "confirmation", state: false }))
  };

  return (
    <Modal
      className="popup-modal"
      backdrop="static"
      show={state}
      onHide={closeModel}
      centered
    >
      <Modal.Body>
        <div className="confirmetion-popup">
          <h2 className="text-danger">{modelsArgs?.action} {modelsArgs?.module}</h2>
          <p>Do you want to {modelsArgs?.action} {modelsArgs?.module}</p>
          <div className="model-btns">
            <Button
              variant="light"
              className="text-danger"
              onClick={closeModel}
            >
              Reject
            </Button>
            <Button
              variant="light"
              className="text-success"
              onClick={proceed}
            >
              Accept
            </Button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}
