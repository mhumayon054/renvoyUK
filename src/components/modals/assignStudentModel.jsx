import React, { useEffect, useState } from "react";
import { Button, Form, Modal, Nav, Tab } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { handleModel } from "../../redux/layoutSlices/modelSlice";
import { coursesAssignAsyncThunk } from "../../redux/pagesSlices/userSlice";
import { getUsersAsyncThunk } from "../../redux/pagesSlices/userSlice";
import ImageLazyLoader from "../imageLoader/ImageLazyLoader";
import ActionDropdownForAssignClass from "../ActionDropdownForAssignClass";
import Moment from "moment";

export default function AssignStudentModel() {
  const state = useSelector(
    (state) => state.model?.modelState?.AssignStudentModel
  );
  const modelArgs = useSelector(
    (state) => state.model?.modelArgs?.AssignStudentModel?.args
  );
  const d = useDispatch();

  const [searchValue, setSearchValue] = useState(null);
  const [users, setUsers] = useState([]);

  const getUsers = async (params) => {
    const response = await d(getUsersAsyncThunk({ ...params }));
    return response?.payload?.users;
  };

  const handleSearch = (q) => {
    setSearchValue(q);
  };

  useEffect(() => {
    let params = { role: "User" };
    if (searchValue && searchValue.length > 2) {
      params.name = searchValue;
    } else {
      setUsers([]);
      return;
    }

    getUsers(params).then((data) => {
      setUsers(data);
    });
  }, [searchValue]);

  // close model
  // const closeModel = () =>
  //   d(handleModel({ model: "AssignModel", state: false }));

  const closeModel = () => {
    d(handleModel({ model: "AssignStudentModel", state: false }));
    setSelectedUsers([]);
    setUsers([]);
  };


  const [selectedUsers, setSelectedUsers] = useState([]);

  // ... (other code)

  // Function to handle user selection
  const handleUserSelect = (user) => {
    setSelectedUsers((prevSelectedUsers) => {
      const isSelected = prevSelectedUsers.some(
        (selectedUser) => selectedUser.user_id === user.user_id
      );
      if (isSelected) {
        // If user is already selected, remove from selected users
        return prevSelectedUsers.filter(
          (selectedUser) => selectedUser.user_id !== user.user_id
        );
      } else {
        // If user is not selected, add to selected users
        return [...prevSelectedUsers, user];
      }
    });
  };

  // Function to handle the "assign" action for selected users
  const handleAssignSelectedUsers = () => {
    selectedUsers.forEach((user) => {
      d(
        coursesAssignAsyncThunk({
          data: {
            studentId: user.user_id,
            courseId: modelArgs?.id,
          },
          callBack: () => {
            closeModel();
          },
        })
      );
    });
    // After the assign action is complete, clear the selected users array
    setSelectedUsers([]);
  };

  return (
    <Modal
      animation={false}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={state}
      onHide={closeModel}
    >
      <Modal.Body className="invite-model">
        <div className="confirmation-popup" style={{ width: "100%" }}>
          <h3>Students</h3>
          <input
            type="text"
            className="hide-feild"
            style={{width:"100%", border:"1px solid #cccaca ", padding:"0px 18px" , marginBottom:"20px", borderRadius:"7PX", height:"44px"}}
            placeholder="Search Here"
            onInput={(e) => handleSearch(e.target.value)}
            multiple
          />
          <div className="row">
            {users?.length > 0 ? (
              users?.map((user, index) => (
                <div className="col-lg-6">

                  <>
                    <div
                      className="cole-book-list-card"
                      key={index}
                      onClick={() => handleUserSelect(user)}
                    >
                      <div className="book-detail">
                        <input
                          type="checkbox"
                          checked={selectedUsers.some(
                            (selectedUser) => selectedUser.user_id === user.user_id
                          )}
                          onChange={() => handleUserSelect(user)}
                        />
                      </div>

                      <div className="book-detail">
                        <div className="book-img">
                          {user?.picture && <ImageLazyLoader src={user?.picture} />}
                          {!user?.picture && (
                            <ImageLazyLoader src={"~images/i1.png"} />
                          )}
                        </div>
                      </div>
                      <div className="book-detail">
                        <h5>
                          {user?.username
                            ? user?.username.length >= 10
                              ? user?.username.substring(0, 10) + "..."
                              : user?.username
                            : user?.name.length >= 10
                              ? user?.name.substring(0, 10) + "..."
                              : user?.name}
                        </h5>
                      </div>

                      {/* <div className="book-detail">
                    <h5>
                      {user?.email.length >= 15
                        ? user?.email.substring(0, 15) + "..."
                        : user?.email}
                    </h5>
                  </div> */}

                      {/* <div className="book-detail">
                    <h5>
                      {Moment(user?.created_at).format("MMM, D, YYYY")
                        ? Moment(user?.created_at).format("MMM, D, YYYY")
                        : "13,jun 2023"}
                    </h5>
                  </div>

                  <div className="book-detail role">
                    {user?.app_metadata?.roles.map((role, index) => {
                      return (
                        <div key={index}>
                          <h5>{role},</h5>
                        </div>
                      );
                    })}
                  </div> */}

                      {/* <Button onClick={() => assignStudentHandler(user)}>
                    Assign
                  </Button> */}
                      {/* {selectedUsers.length > 0 && (
            <Button onClick={handleAssignSelectedUsers}>Assign Selected</Button>
          )} */}
                    </div>
                  </>
                  </div>
                  ))
                  ) : (
                  <p>Search Student Here!</p>
              )}
                </div>


          {
                  selectedUsers.length > 0 && (
                    <div style={{display:"flex", justifyContent:"center", flexDirection:"column" , alignItems:"center", marginTop:"25px"}}>
                      <h2>Selected Users:</h2>
                      <ol>
                        {selectedUsers.map((user, index) => (
                          <li key={user.user_id}>
                            {user.username || user.name || user.email}
                          </li>
                        ))}
                      </ol>
                      <Button onClick={handleAssignSelectedUsers}>
                        Assign All Selected
                      </Button>
                    </div>
                  )
                }
        </div>
      </Modal.Body>
    </Modal>
  );
}
