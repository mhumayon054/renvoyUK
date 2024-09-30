import { useEffect, useRef, useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Form } from "react-bootstrap";
import axios from "axios";
import { toast } from "react-toastify";
import CustomButton from "../customComponents/CustomButton";
import { modalsError } from "../../helpers/modalsErrors";

export default function ImportCsvModal({ modalShow, setModal }) {
  const [disableBtn, setDisableBtn] = useState(false);
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState(null);
  const fileref = useRef();

  const radioValue = (e) => {
    fileref.current.value = null;
    setFileName(e.target.value);
  };
  async function submitCsv() {
    setDisableBtn(true);
    let form = new FormData();
    let name = fileName?.toLowerCase();
    form.append(`${name}Import`, file);
    const token = JSON.parse(localStorage.getItem("app-access-token"));
    await axios({
      method: "post",
      url: `${process.env.REACT_APP_contentBasePath}import${fileName}CSV`,
      headers: { Authorization: `Bearer ${token}` },
      data: form,
    })
      .then((res) => {
        if (res.status == 200) {
          setDisableBtn(false);
          toast.success("Submitted Successfully");
          setModal(false);
          // console.log("res>>", res);
        }
      })
      .catch((err) => {
        modalsError(err);
        setDisableBtn(false);
        // console.log("err>>", err);
      })
  }

  return (
    <div>
      <Modal
        show={modalShow}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        onHide={()=> setModal(false)}
        centered
      >
        <Modal.Body>
          <div className="modal_inputField">
            <Modal.Header closeButton>
              <Modal.Title
                id="contained-modal-title-vcenter"
                className="modal_title"
              >
                Import CSV
              </Modal.Title>
            </Modal.Header>
            <div className="inputField_container">
              <div className="col-6">
                <input
                  type="radio"
                  id="collection"
                  name="importFiles"
                  value="Collection"
                  onChange={(e) => radioValue(e)}
                />
                <label htmlFor="collection" className="mx-3">
                  Collection
                </label>
              </div>
              <div className="col-6">
                <input
                  type="radio"
                  id="book"
                  name="importFiles"
                  value="Book"
                  onChange={(e) => radioValue(e)}
                />
                <label htmlFor="book" className="mx-3">
                  Book
                </label>
              </div>
              <p className="mt-2">Upload File</p>
              <div className="col-lg-12 mb-2">
                <Form.Control
                  className="form-control"
                  type="file"
                  accept=".csv"
                  ref={fileref}
                  // value={formData["image"]}
                  onInput={(e) => setFile(e.target.files[0])}
                />
              </div>
              <div className="collection_btns">
                <CustomButton
                  reducer={"listings"}
                  // action={"userLogoutAsyncThunk"}
                  title={"Submit"}
                  onClick={submitCsv}
                  disabled={disableBtn}
                  // loadingText={"Loging out..."}
                  className="btn btn-primary login-btn mx-2 btn_right"
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
