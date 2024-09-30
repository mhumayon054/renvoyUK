import React, { useEffect } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { handleModel } from "../../redux/layoutSlices/modelSlice";
import { getEdifyResultCompletedAsyncThunk } from '../../redux/pagesSlices/edifySlice';


export default function EdifyResultModel() {
    const state = useSelector((state) => state.model?.modelState?.EdifyResultModel);
    const modelsArgs = useSelector(
        (state) => state.model?.modelArgs?.EdifyResultModel
    );
    const d = useDispatch();

    // close model
    const closeModel = () => d(handleModel({ model: "EdifyResultModel", state: false }));

    const elements = useSelector(s => s.element?.elements?.results)
    const componentId = useSelector(s => s.element?.selectedElement?.component_id)

    useEffect(() => {
        // d(getEdifyResultCompletedAsyncThunk({ component_id: componentId }))
    }, [componentId])

    const edifyComplete = useSelector(s => s?.edify?.edifysResultCompleted?.results?.[0])

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

                    <Button className='close-btn' onClick={closeModel}>
                        <i className="fa-solid fa-xmark"></i>
                    </Button>
                    <div className='row'>


                        <div className='col-lg-6 col-6'>
                            <div className='qustion-option-box'>
                                <h3 className='t-success'>
                                    {edifyComplete?.score}
                                </h3>
                                <p>
                                    Quiz Score
                                </p>
                            </div>
                        </div>

                        <div className='col-lg-6 col-6'>
                            <div className='qustion-option-box'>
                                <h3 className='t-success'>
                                    {edifyComplete?.status}
                                </h3>
                                <p>
                                    Quiz Status
                                </p>
                            </div>
                        </div>
                    </div>


                    <h3 style={{ borderBottom: "1px solid black" }}>Attempt Questions </h3>

                    {edifyComplete && edifyComplete.answers?.map((element, index1) => (
                        <div className='qustion-detail-box' key={element.id} style={{ borderBottom: "1px solid black" }}>

                            <h5>{`Q ${index1 + 1}`}:</h5>

                            <div className='options question-option'>
                                {elements?.map((item, index) => (
                                    <>
                                        {item?.id == element?.element_id &&
                                            <p key={element?.id}>
                                                Question Statement : {item.question_statement}
                                                <p>Type : {item?.type}</p>
                                            </p>


                                        }
                                    </>
                                )
                                )}

                                <div>
                                    correct_answer :
                                    {element?.correct_answer}
                                </div>



                            </div>
                        </div>
                    ))}
                </div>
            </Modal.Body >
        </Modal >
    );
}
