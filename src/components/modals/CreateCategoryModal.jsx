import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { Form } from "react-bootstrap";
import {
  createCategorysAsyncThunk,
  deleteCategoryAsyncThunk,
  updateCategoryAsyncThunk,
} from "../../redux/pagesSlices/listingsSlice";
import CustomButton from "../customComponents/CustomButton";

export default function CreateCategoryModal({ modalShow, setModal }) {
  const [categoryValue, setCategoryValue] = useState(null);
  const [isEdit, setIsEdit] = useState(false);
  const [currentCategoryId, setCurrentCategoryId] = useState(null);

  const d = useDispatch();
  const categories = useSelector((s) => s.listings.categories);

  function createCategory() {
    if (categoryValue) {
      d(
        createCategorysAsyncThunk({
          name: categoryValue,
          callBack: () => setCategoryValue(""),
        })
      );
    }
  }
  const deleteCategory = (id) => {
    d(deleteCategoryAsyncThunk(id));
  };
  const editCategory = (cat) => {
    setCategoryValue(cat.name);
    setCurrentCategoryId(cat.id);
    setIsEdit(true);
  };
  const updateCategory = () => {
    if (categoryValue) {
      d(
        updateCategoryAsyncThunk({
          name: categoryValue,
          id: currentCategoryId,
          callBack: () => {
            setCategoryValue("");
            setIsEdit(false);
          },
        })
      );
    }
  };

  return (
    <div>
      <Modal
        show={modalShow}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        onHide={() => {setModal(false); setIsEdit(false)}}
        centered
      >
        <Modal.Body>
          <div className="modal_inputField">
            <Modal.Header closeButton>
              <Modal.Title
                id="contained-modal-title-vcenter"
                className="modal_title"
              >
                Categories
              </Modal.Title>
            </Modal.Header>
            <div className="inputField_container">
              <div className="row">
                <div className="col-12 col-md-9">
                  <Form.Control
                    className="form-control"
                    type="type"
                    placeholder="Category"
                    value={categoryValue}
                    onInput={(e) => setCategoryValue(e.target.value)}
                  />
                </div>
                <div className="col-12 col-md-3">
                  {isEdit ? (
                    <CustomButton
                      reducer={"listings"}
                      action={"updateCategorysAsyncThunk"}
                      title={"Update"}
                      onClick={updateCategory}
                      loadingText={"Updating..."}
                      className="btn btn-primary login-btn w-100"
                    />
                  ) : (
                    <CustomButton
                      reducer={"listings"}
                      action={"createCategorysAsyncThunk"}
                      title={"Create"}
                      onClick={createCategory}
                      loadingText={"Creating..."}
                      className="btn btn-primary login-btn w-100"
                    />
                  )}
                </div>
              </div>
              <div className="col-lg-12 mt-3 categories-modal">
                <ul className="ul-listing">
                  <div className="row" style={{width: '100%'}}>
                    {categories?.map((cat, ind) => {
                      return (
                        <div
                          className="col-12 col-md-6 category-list"
                          key={ind}
                        >
                          <div className="row">
                            <div className="col-8 col-md-8 py-2">
                              <li value={cat.id} className="fs-5">
                                {cat.name}
                              </li>
                            </div>
                            <div className="col-4 col-md-4 category-icons">
                              <span
                                className="btn btn-light mx-2 pen-btn"
                                onClick={() => editCategory(cat)}
                              >
                                <i className="fa-solid fa-pen"></i>
                              </span>
                              <span
                                className="btn btn-light delete-btn"
                                onClick={() => deleteCategory(cat.id)}
                              >
                                <i className="fa-solid fa-trash"></i>
                              </span>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}
