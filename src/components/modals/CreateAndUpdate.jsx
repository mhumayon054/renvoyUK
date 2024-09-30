import { useState } from "react";
import { Form, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { handleModel } from "../../redux/layoutSlices/modelSlice";
import { parseUrlFromModel } from "../../helpers/asset";
import { Formik } from "formik";
import ErrorMassage from "../ErrorMassage";
import CustomButton from "../customComponents/CustomButton";
import {
  getSectionsAsyncThunk,
  getSectionsByIdsAsyncThunk,
} from "../../redux/pagesSlices/sectionSlice";
import * as Yup from "yup";
import { MdError } from "react-icons/md";

const IndexCreateAndUpdate = () => {
  const [image, setImages] = useState(null);

  const state = useSelector(
    (state) => state.model?.modelState?.CreateAndUpdate
  );

  const modelArgs = useSelector(
    (state) => state.model?.modelArgs?.CreateAndUpdate
  );
  const oldData = useSelector(
    (state) => state.model?.modelArgs?.CreateAndUpdate?.oldData
  );

  const asyncThunk = useSelector(
    (state) => state.model?.modelArgs?.CreateAndUpdate?.asyncThunk
  );
  const modelName = useSelector(
    (state) => state.model?.modelArgs?.CreateAndUpdate?.modelName
  );
  const collection_id = useSelector(
    (state) => state.model?.modelArgs?.CreateAndUpdate?.collection_id
  );
  const index_id = useSelector(
    (state) => state.model?.modelArgs?.CreateAndUpdate?.index_id
  );
  const section_id = useSelector(
    (state) => state.model?.modelArgs?.CreateAndUpdate?.section_id
  );
  const d = useDispatch();
  const onHide = () => {
    d(handleModel({ model: "CreateAndUpdate", state: false }));
    setImages();
  };
  const openContent = (setFieldValue) => {
    d(
      handleModel({
        model: "contentModel",
        state: true,
        args: {
          type: "image",
          image: null,
          callBack: (e) => {
            setImages(e);
            setFieldValue("image", e?.id);
          },
        },
      })
    );
  };
  const createIndexHandler = (data) => {
    if (oldData) {
      d(
        asyncThunk({
          data: {
            name: data.name,
            desc: data.desc,
            image: data.image,
            // collection_id: data.collection_id,
          },
          id: oldData?.id,
          callBack: () => {
            if (modelName === "updateSubSection") {
              console.log(
                "updateSubSectionupdateSubSectionupdateSubSection",
                modelArgs
              );
              d(
                getSectionsByIdsAsyncThunk({
                  section_id: oldData?.parent,
                })
              );
            } else if (modelName === "updateSection") {
              d(
                getSectionsAsyncThunk({
                  index_id: oldData?.parent,
                })
              );
            }
            onHide();
          },
        })
      );
    } else {
      d(
        asyncThunk({
          data,
          callBack: () => {
            if (modelName == "createSubSection") {
              d(getSectionsByIdsAsyncThunk({ section_id }));
            } else if (modelName == "createSection") {
              d(getSectionsAsyncThunk({ index_id }));
            }
            onHide();
          },
        })
      );
    }
  };
  const IndexSchema = Yup.object().shape({
    name: Yup.string().required("Course title is required"),
    image: Yup.string().required(<MdError />),
  });

  return (
    <>
      {/* <form onSubmit={handleSubmit(onSubmit)}> */}
      <Modal
        className="index-create-model"
        show={state}
        size="md"
        onHide={onHide}
        centered
      >
        <Modal.Body>
          <Formik
            initialValues={{
              ...(oldData?.id
                ? {
                    ...oldData,
                    image: oldData?.image?.id,
                    collection_id: oldData?.collection_id?.id,
                    id: undefined,
                  }
                : {
                    name: "",
                    desc: "",
                    image: "",
                    collection_id: collection_id,
                    section_id: section_id,
                    index_id: index_id,
                  }),
            }}
            onSubmit={createIndexHandler}
            validationSchema={IndexSchema}
            // validationSchema={IndexSchema}
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
              <>
                <div className="m-header">
                  <h3>
                    {oldData
                      ? `Edit ${
                          modelName == "updateSubSection"
                            ? "SubSection"
                            : modelName == "updateSection"
                            ? "Section"
                            : modelName == "updateIndex"
                            ? "Index"
                            : "Course"
                        }`
                      : `Create ${
                          modelName == "createSubSection"
                            ? "SubSection"
                            : modelName == "createSection"
                            ? "Section"
                            : modelName == "createIndex"
                            ? "Index"
                            : "Course"
                        }`}
                  </h3>
                  <i className="fa-solid fa-xmark" onClick={onHide}></i>
                </div>
                <div className="m-body">
                  <div className="create-course-section">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <div
                        className="add-img-card"
                        onClick={() => openContent(setFieldValue)}
                      >
                        {oldData?.image || image ? (
                          <img
                            className="u-img"
                            src={parseUrlFromModel(
                              image ? image : oldData?.image
                            )}
                          />
                        ) : (
                          <>
                            <div className="plus">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="25"
                                height="24"
                                viewBox="0 0 25 24"
                                fill="none"
                              >
                                <path
                                  d="M11.5 13H5.5V11H11.5V5H13.5V11H19.5V13H13.5V19H11.5V13Z"
                                  fill="#2181FA"
                                />
                              </svg>
                            </div>
                            <h4>Add image</h4>
                            <p>JPG, PNG. under 2MB</p>
                          </>
                        )}
                        <ErrorMassage
                          error={errors.image}
                          visible={touched.image}
                        />
                      </div>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      {/* <Form.Label>Course title</Form.Label> */}
                      <Form.Control
                        type="name"
                        placeholder="Course title"
                        onChange={handleChange("name")}
                        onBlur={handleBlur("name")}
                        value={values.name}
                        id="indexCreateName"
                        name="indexCreateName"
                      />
                      <ErrorMassage
                        error={errors.name}
                        visible={touched.name}
                      />
                    </Form.Group>
                    {/* <Form.Control type="email" placeholder="Course title" /> */}
                    {/* <Form.Control
                      type="email"
                      placeholder="Course description"
                    /> */}
                    <Form.Group className="mb-3" controlId="formBasicDesc">
                      <Form.Control
                        type="text"
                        placeholder="Course description"
                        onChange={handleChange("desc")}
                        onBlur={handleBlur("desc")}
                        value={values.desc}
                        id="indexCreateDesc"
                        name="indexCreateDesc"
                      />
                      <ErrorMassage
                        error={errors.desc}
                        visible={touched.desc}
                      />
                    </Form.Group>
                  </div>
                </div>
                <div className="m-footer">
                  <button className=" btn btn-cancel" onClick={onHide}>
                    Cancel
                  </button>
                  <CustomButton
                    loadingText={oldData ? "Updating..." : "Saving.."}
                    className={"btn btn-save"}
                    title={oldData ? "Save" : "Create"}
                    action={asyncThunk}
                    reducer={
                      modelName == "createSubSection" ||
                      modelName == "createSection" ||
                      modelName == "updateSection" ||
                      modelName == "updateSubSection"
                        ? "sections"
                        : modelName == "createIndex" ||
                          modelName == "updateIndex"
                        ? "indexes"
                        : "collections"
                    }
                    onClick={() => handleSubmit()}
                  />
                </div>
              </>
            )}
          </Formik>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default IndexCreateAndUpdate;
