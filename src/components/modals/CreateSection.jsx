import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { parseUrlFromModel } from "../../helpers/asset";
import { handleModel } from "../../redux/layoutSlices/modelSlice";
import {
  createSectionAsyncThunk,
  updateSectionAsyncThunk,
} from "../../redux/pagesSlices/sectionSlice";
import { pickFromObj } from "../../hooks";
import CustomButton from "../customComponents/CustomButton";
import ErrorMassage from "../ErrorMassage";
import { sectionSchema } from "../Validation";

export default function CreateSection(props) {
  const state = useSelector((state) => state.model?.modelState?.createSection);
  const modelArgs = useSelector(
    (state) => state.model?.modelArgs?.createSection
  );
  console.log("modelArgsmodelArgsmodelArgs", modelArgs)
  // const modelArgs = modelArgs?.args;
  // console.log("modelArgs", modelArgs);

  const callBack = modelArgs?.callBack;
  const [image, setContent] = useState(null);
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
      setContent(modelArgs.image)
    } else {
      setContent(null)
    }
  }, [modelArgs]);

  const closeModel = () =>
    d(handleModel({ model: "createSection", state: false }));

  const sectionHandler = (data) => {
    // console.log("data::::::::", data);
    if (modelArgs?.id) {
      d(
        updateSectionAsyncThunk({
          data,
          id: modelArgs.id,
          callBack: () => {
            if (callBack) callBack()
            closeModel();
          },
        })
      );
    } else {
      d(
        createSectionAsyncThunk({
          data: {
            ...data,
            ...pickFromObj(modelArgs, ["section_id", "index_id", "collection_id"]),
            // ...pickFromObj(modelArgs, ["section_id", "index_id"]),
          },
          callBack: () => {
            if (callBack) callBack()
            closeModel();
          },
        })
      );
    }
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
        <Formik
          initialValues={{
            ...(modelArgs?.id
              ? {
                ...pickFromObj(modelArgs, ["name", "image", "collection_id"]),
                image: modelArgs?.image?.id
              }
              : {
                name: "",
                image: "",
              }),
          }}
          onSubmit={sectionHandler}
          validationSchema={sectionSchema}
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
                    ? "Update Course Section"
                    : "Create Course Section"}
                </h3>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control
                    type="name"
                    placeholder="Section Name Here"
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
                      <img
                        src={parseUrlFromModel(image)}
                      />
                    ) : (
                      <div className="icon-box">
                        <i className="fa-regular fa-image"></i>
                      </div>
                    )}
                  </div>
                  <h6 style={{ color: "gray" }}>{modelArgs?.image?.originalName}</h6>
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
                  action={modelArgs?.id ? "updateSectionAsyncThunk" : "createSectionAsyncThunk"}
                  reducer={"sections"}
                  onClick={() => handleSubmit()} />
              </div>
            </div>
          )}
        </Formik>
      </Modal.Body>
    </Modal>
  );
}
