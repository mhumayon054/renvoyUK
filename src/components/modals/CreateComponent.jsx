import React, { useEffect, useState } from "react";
import { Formik } from "formik";

import { Button, Dropdown, Form, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { parseUrlFromModel } from "../../helpers/asset";
import { handleModel } from "../../redux/layoutSlices/modelSlice";
import Select from 'react-select'
import {
  createComponentAsyncThunk,
  updateComponentAsyncThunk,
} from "../../redux/pagesSlices/componentSlice";
import { pickFromObj } from "../../hooks";
import CustomButton from "../customComponents/CustomButton";
import ErrorMassage from "../ErrorMassage";
import { componentSchema } from "../Validation";

export default function CreateComponent() {
  const state = useSelector(
    (state) => state.model?.modelState?.CreateComponent
  );

  const modelArgs = useSelector(
    (state) => state.model?.modelArgs?.CreateComponent
  );
  const callBack = modelArgs?.callBack;
  const [image, setContent] = useState("");
  const d = useDispatch();

  const openContent = (setFieldValue) => {
    d(
      handleModel({
        model: "contentModel",
        state: true,
        args: {
          type: "image",
          image: null,
          callBack: (e) => {
            setContent(e);
            setFieldValue("image", e?.id);
          },
        },
      })
    );
  };

  useEffect(() => {
    if (modelArgs?.image?.id) {
      setContent(modelArgs?.image);
    } else {
      setContent(null);
    }
  }, [modelArgs]);

  const closeModel = () =>
    d(handleModel({ model: "CreateComponent", state: false }));

  const componentHandler = (data) => {
    // console.log("data::::::::", data);
    if (modelArgs?.id) {
      d(
        updateComponentAsyncThunk({
          data,
          id: modelArgs.id,
          callBack: () => {
            if (callBack) callBack();
            closeModel();
          },
        })
      );
    } else {
      d(
        createComponentAsyncThunk({
          data: {
            ...data,
            ...pickFromObj(modelArgs, ["section_id", "component_id", "collection_id", "index_id"]),
          },
          callBack: () => {
            if (callBack) callBack();
            closeModel();
          },
        })
      );
    }
  };
  const options = [{ value: "quiz", label: "Quiz" },
  { value: "tutorial", label: "Tutorial" },]
  return (
    <Modal
      className="popup-modal"
      backdrop="static"
      show={state}
      onHide={closeModel}
      centered
    >
      <Modal.Body>
        <Formik
          enableReinitialize
          initialValues={{
            ...(modelArgs?.id
              ? {
                ...pickFromObj(modelArgs, ["name", "image", "collection_id", "index_id"]),
                image: modelArgs?.image?.id,
              }
              : {
                name: "",
                image: "",
              }),
          }}
          onSubmit={componentHandler}
          validationSchema={componentSchema}
        >
          {({
            handleSubmit,
            handleChange,
            handleBlur,
            setFieldValue,
            values,
            errors,
            touched,
          }) => (
            <div>
              <div className="form">
                <h3>
                  {modelArgs?.id
                    ? "Update Course Component"
                    : "Create Course Component"}
                </h3>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control
                    type="name"
                    className="section-name"
                    aria-describedby="passwordHelpBlock"
                    placeholder="Compoenet Name Here"
                    onChange={handleChange("name")}
                    onBlur={handleBlur("name")}
                    value={values.name}
                  />
                  <ErrorMassage error={errors?.name} visible={touched?.name} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <div
                    className="img-uploader"
                    onClick={() => openContent(setFieldValue)}
                  >
                    {modelArgs?.image || image ? (
                      <img src={parseUrlFromModel(image)} />
                    ) : (
                      <div className="icon-box">
                        <i className="fa-regular fa-image"></i>
                      </div>
                    )}
                  </div>
                  <h6>{modelArgs?.image?.name}</h6>
                  <ErrorMassage error={errors.image} visible={touched.image} />
                </Form.Group>
              </div>

              <div className="model-btns">
                <Button className="mx-2" variant="danger" onClick={closeModel}>
                  Cancel
                </Button>
                {/* <button
                  onClick={() => handleSubmit()}
                  className="btn btn-primary"
                  type="submit"
                >
                  {modelArgs?.id ? "Update" : "Save"}
                </button> */}

                <CustomButton
                  className={"btn btn-primary"}
                  title={modelArgs?.id ? "Update" : "Save"}
                  action={modelArgs?.id ? "updateComponentAsyncThunk" : "createComponentAsyncThunk"}
                  reducer={"components"}
                  onClick={() => handleSubmit()} />
              </div>
            </div>
          )}
        </Formik>
      </Modal.Body>
    </Modal>
  );
}
