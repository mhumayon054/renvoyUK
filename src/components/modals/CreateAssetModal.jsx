import { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Form } from "react-bootstrap";
import axios from "axios";
import { toast } from "react-toastify";
import CustomButton from "../customComponents/CustomButton";
import { modalsError } from "../../helpers/modalsErrors";

export default function CreateAssetModal(
  { modalShow, setModal, data },
) {
  const [formData, setFormData] = useState({});
  const [image, setImage] = useState();
  const [disableBtn, setDisableBtn] = useState(false);

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
  async function createAsset() {
    setDisableBtn(true);
    let form = new FormData();
    for (var field in formData) {
      form.append(field, formData[field]);
    }
    const token = JSON.parse(localStorage.getItem("app-access-token"));
    await axios({
      method: "post",
      url: `${process.env.REACT_APP_contentBasePath}books/v2/asset`,
      headers: { Authorization: `Bearer ${token}` },
      data: form,
    })
      .then((res) => {
        if (res.status == 201) {
          toast.success("Created Successfully");
          let data = formData;
          data["title"] = "";
          data["image"] = "";
          data["contant"] = "";
          setDisableBtn(false);
          setImage("");
          setModal(false);
          setFormData({ ...data });
          // console.log("res>>", res);
        }
      })
      .catch((err) => {
        modalsError(err);
        setDisableBtn(false);
        // console.log("err>>", err);
      });
  }
  useEffect(() => {
    setFormData({ ...data });
  }, [data]);

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
                Create Asset
              </Modal.Title>
            </Modal.Header>
            <div className="inputField_container">
              <p>Title</p>
              <Form.Control
                className="form-control"
                type="type"
                placeholder="Title"
                value={formData["title"]}
                onInput={(e) => inputForm(e, "title")}
              />
              <p className="mt-2">Content</p>
              <div className="col-lg-12 mb-2">
                <Form.Control
                  className="form-control"
                  as="textarea"
                  rows={3}
                  placeholder="Content"
                  value={formData["contant"]}
                  onInput={(e) => inputForm(e, "contant")}
                />
              </div>
              <p className="mt-2">Upload Image</p>
              <div className="col-lg-12 mb-2">
                <Form.Control
                  className="form-control"
                  type="file"
                  accept=".png, .jpg, .jpeg"
                  // value={formData["image"]}
                  onInput={(e) => inputForm(e, "image")}
                />
              </div>
              <div>
                <img src={image} height={"150"} className="my-2"></img>
              </div>
              <div className="collection_btns">
                <CustomButton
                  reducer={"listings"}
                  // action={"userLogoutAsyncThunk"}
                  title={"Create Asset"}
                  onClick={createAsset}
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
