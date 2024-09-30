import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { Form } from "react-bootstrap";

import axios from "axios";
import { toast } from "react-toastify";
import CustomButton from "../customComponents/CustomButton";
import { modalsError } from "../../helpers/modalsErrors";
import { getCollectionsAsyncThunk } from "../../redux/pagesSlices/collectionSlice";

export default function CreateCollectionMoadal({ modalShow, setModal }) {
  const [formData, setFormData] = useState({});
  const [image, setImage] = useState();
  const [disableBtn, setDisableBtn] = useState(false);

  const d = useDispatch();
  const order = useSelector((s) => s.listings.order);
  const categories = useSelector((s) => s.listings.categories);

  function inputForm(e, key) {
    let data = formData;
    if (key == "image") {
      let img = URL.createObjectURL(e.target.files[0]);
      data[key] = e.target.files[0];
      setImage(img);
    } else {
      data[key] = e.target.value;
    }
    setFormData({ ...data });
  }
  async function createCollection() {
    setDisableBtn(true);
    let form = new FormData();
    for (var field in formData) {
      form.append(field, formData[field]);
    }
    const token = JSON.parse(localStorage.getItem("app-access-token"));
    await axios({
      method: "post",
      url: `${process.env.REACT_APP_contentBasePath}books/v2/collection`,
      headers: { Authorization: `Bearer ${token}` },
      data: form,
    })
      .then((res) => {
        if (res.status == 201) {
          toast.success("Created Successfully");
          setModal(false);
          let data = formData;
          data["name"] = "";
          data["image"] = "";
          setImage("");
          setFormData({ ...data });
          setDisableBtn(false);
          d(
            getCollectionsAsyncThunk({
              sortBy: `name:${order}`,
              populate: "image,user_id",
            })
          );
          console.log("res>>", res);
        }
      })
      .catch((err) => {
        // console.log("err>>", err);
        setDisableBtn(false);
        modalsError(err);
      });
  }

  return (
    <div>
      <Modal
        show={modalShow}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        onHide={() => setModal(false)}
        centered
      >
        <Modal.Body>
          <div className="modal_inputField">
            <Modal.Header closeButton>
              <Modal.Title
                id="contained-modal-title-vcenter"
                className="modal_title"
              >
                Create Collection
              </Modal.Title>
            </Modal.Header>
            <div className="inputField_container">
              <p>Title</p>
              <div className="col-lg-12">
                <Form.Control
                  className="form-control"
                  type="type"
                  placeholder="Name"
                  value={formData["name"]}
                  onInput={(e) => inputForm(e, "name")}
                />
              </div>
              <div className="col-lg-12">
                <p className="mt-2">Category</p>
                <Form.Select
                  className="form-control"
                  value={formData["categoryId"]}
                  onChange={(e) => inputForm(e, "categoryId")}
                >
                  {categories?.map((cat, ind) => {
                    return (
                      <option key={ind} value={cat.id}>
                        {cat.name}
                      </option>
                    );
                  })}
                </Form.Select>
              </div>
              <p className="mt-2">Upload Image</p>
              <div className="col-lg-12 mb-2">
                <Form.Control
                  className="form-control"
                  type="file"
                  accept=".png, .jpg, .jpeg"
                  // value={formData["image"]}
                  onChange={(e) => inputForm(e, "image")}
                />
              </div>
              <div>
                <img
                  src={image}
                  width={"250"}
                  height={"150"}
                  className="my-2"
                ></img>
              </div>
              <div className="collection_btns">
                <CustomButton
                  reducer={"listings"}
                  // action={"userLogoutAsyncThunk"}
                  title={"Create Collection"}
                  onClick={createCollection}
                  disabled={disableBtn}
                  // loadingText={"Loging out..."}
                  className="btn login-btn mx-2 btn_right"
                />
                <button className="btn_right" onClick={() => setModal(false)}>
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}
