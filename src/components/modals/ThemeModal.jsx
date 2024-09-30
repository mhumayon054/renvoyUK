import { useState } from "react";
import { OverlayTrigger, Spinner, Tooltip } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch } from "react-redux";
import { handleModel } from "../../redux/layoutSlices/modelSlice";
// import { parseUrlFromModel } from "../../helpers/asset";

function ThemeModal({ show, setShow, loading, handleSubmit }) {
  const d = useDispatch();
  const handleClose = () => setShow(false);
  const [name, setName] = useState(undefined);
  const [bgColor, setBgColor] = useState(undefined);
  const [questionColor, setQuestionColor] = useState(undefined);
  const [descriptionColor, setDescriptionColor] = useState(undefined);
  const [answerColor, setAnswerColor] = useState(undefined);
  const [buttonColor, setButtonColor] = useState(undefined);
  const [buttonTextColor, setButtonTextColor] = useState(undefined);
  const [fontSize, setFontSize] = useState(undefined);
  const [alignment, setAlignment] = useState("left");
  const [img, setImg] = useState(undefined);
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <>
          <Modal.Header closeButton>
            <Modal.Title>Theme Create</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div style={{ padding: "5px 10px 5px 10px " }}>
              <h5 className="model_Text">Name</h5>
              <input
                className="model_input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
              />
              {/* <hr /> */}

              <div style={{ width: "100%" }}>
                {/* <h5 className="model_Text">Color:</h5> */}


                {/* <div className="model_Select_color_container">
                  <div>
                    <label className="model_Text">Background</label>
                    <div>
                      <input
                        className="model_Color_input"
                        type="color"
                        value={bgColor}
                        onChange={(e) => setBgColor(e.target.value)}
                        style={{ width: "100%" }}
                        name=""
                        id=""
                      />
                    </div>
                  </div>

                  <div>
                    <label className="model_Text">Question</label>
                    <div>
                      <input
                        className="model_Color_input"
                        type="color"
                        value={questionColor}
                        onChange={(e) => setQuestionColor(e.target.value)}
                        style={{ width: "100%" }}
                        name=""
                        id=""
                      />
                    </div>
                  </div>

                  <div>
                    <label className="model_Text">Description</label>
                    <div>
                      <input
                        className="model_Color_input"
                        type="color"
                        value={descriptionColor}
                        onChange={(e) => setDescriptionColor(e.target.value)}
                        style={{ width: "100%" }}
                        name=""
                        id=""
                      />
                    </div>
                  </div>

                  <div>
                    <label className="model_Text">Answer</label>
                    <div>
                      <input
                        className="model_Color_input"
                        type="color"
                        value={answerColor}
                        onChange={(e) => setAnswerColor(e.target.value)}
                        style={{ width: "100%" }}
                        name=""
                        id=""
                      />
                    </div>
                  </div>

                  <div>
                    <label className="model_Text">Button</label>
                    <div>
                      <input
                        className="model_Color_input"
                        type="color"
                        value={buttonColor}
                        onChange={(e) => setButtonColor(e.target.value)}
                        style={{ width: "100%" }}
                        name=""
                        id=""
                      />
                    </div>
                  </div>

                  <div>
                    <label className="model_Text">Button Text</label>
                    <div>
                      <input
                        className="model_Color_input"
                        type="color"
                        value={buttonTextColor}
                        onChange={(e) => setButtonTextColor(e.target.value)}
                        style={{ width: "100%" }}
                        name=""
                        id=""
                      />
                    </div>
                  </div>

                </div> */}



                {/* <hr /> */}
                {/* <h5 className="model_Text">Fonts:</h5> */}
                <div>
                  {/* <div style={{marginTop:'25px'}}>
                    <h5 className="model_Text">Font Size</h5>
                    <div>
                      <input
                        className="model_input"
                        value={fontSize}
                        onChange={(e) => setFontSize(e.target.value)}
                        type="number"
                      />
                    </div>
                  </div> */}
                  {/* <div>
                    <input type="checkbox" />
                    <label>Italic</label>
                  </div> */}
                  {/* <hr style={{ marginBottom: '20px' }} /> */}

                  <div style={{ marginTop: "25px" }}>
                    {/* <div className="Model_alig_text">
                      <h5 className="model_Text">Alignment</h5>
                      <div>
                        <select
                          className="model_select_bar"
                          value={alignment}
                          onChange={(e) => setAlignment(e.target.value)}
                        >
                          <option value="left">Left</option>
                          <option value="right">Right</option>
                          <option value="center">center</option>
                        </select>
                      </div>
                    </div>
                    <div>
                    </div> */}

                    <hr />
                    <div
                      style={{ marginTop: "25px" }}
                      className="Model_alig_text"
                    >
                      <h5 className="model_Text">Background Image</h5>
                      {img ? (
                        <button
                          onClick={() => {
                            setImg("");
                          }}
                          className="btn btn-light"
                        >
                          <i
                            className="fa-solid fa-trash-can"
                            onClick={() => {
                              setImg("");
                            }}
                          ></i>
                        </button>
                      ) : (
                        <button
                          onClick={() => {
                            d(
                              handleModel({
                                model: "contentModel",
                                state: true,
                                args: {
                                  type: "image",
                                  audio: null,
                                  callBack: (e) => {
                                    //   const link = parseUrlFromModel(e);
                                    //   console.log("e::::::", e);
                                    setImg(e.id);
                                  },
                                },
                              })
                            );
                          }}
                          className="btn btn-light"
                        >
                          <i
                            className="fa-solid fa-plus"
                            onClick={() => {
                              d(
                                handleModel({
                                  model: "contentModel",
                                  state: true,
                                  args: {
                                    type: "image",
                                    audio: null,
                                    callBack: (e) => {
                                      // const link = parseUrlFromModel(e);
                                      // console.log("e::::::", e);
                                      setImg(e.id);
                                    },
                                  },
                                })
                              );
                            }}
                          ></i>
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button
              onClick={() => {
                if (!loading)
                  handleSubmit(
                    name,
                    bgColor,
                    questionColor,
                    answerColor,
                    buttonColor,
                    buttonTextColor,
                    // fontSize,
                    // alignment,
                    img,
                    descriptionColor
                  );
              }}
              variant="primary"
            >
              {loading ? (
                <Spinner size="sm" animation="border" variant="light" />
              ) : (
                "Create Theme"
              )}
            </Button>
          </Modal.Footer>
        </>
        {/* )} */}
      </Modal>
    </>
  );
}

export default ThemeModal;
