import React from "react";
import { Button } from "react-bootstrap";

const TimeStampListCard = ({
  key,
  item,
  editTimeStamps,
  handleEditTimestamp,
  handleUpdateTimestamp,
  i,
}) => {
  return (
    <div className="collection-outer-body">
      <div key={key}>
        <div>
          <div className="assets-table-body">
            <div className="row">
              <div className="col-lg-4 col-4">
                <div className="table-row">
                  <div className="table-data">
                    <input
                      type="text"
                      className="form-control"
                      value={editTimeStamps[i]?.name || item?.name}
                      onChange={(e) =>
                        handleEditTimestamp(i, "name", e.target.value)
                      }
                    />
                  </div>
                  <div className="table-data">
                    <input
                      type="text"
                      className="form-control"
                      value={editTimeStamps[i]?.startTime || item?.startTime}
                      onChange={(e) =>
                        handleEditTimestamp(i, "startTime", e.target.value)
                      }
                    />
                  </div>
                  <div className="table-data">
                    <input
                      type="text"
                      className="form-control"
                      value={editTimeStamps[i]?.endTime || item?.endTime}
                      onChange={(e) =>
                        handleEditTimestamp(i, "endTime", e.target.value)
                      }
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-8 col-8">
                <div className="table-row">
                  <div className="table-data" style={{ position: "relative" }}>
                    <select
                      className="form-control"
                      value={editTimeStamps[i]?.status || item?.status}
                      onChange={(e) =>
                        handleEditTimestamp(i, "status", e.target.value)
                      }
                    >
                      <option value="publish">Publish</option>
                      <option value="force play">Hide/Play</option>
                      <option value="hide">Force Hide</option>
                    </select>
                    <i className="fa fa-angle-down"></i>
                  </div>

                  <div className="table-data">
                    <p>Per 1</p>
                  </div>
                  <div className="table-data">
                    <p>Per 2</p>
                  </div>
                  <div className="table-data">
                    <p>Per 3</p>
                  </div>

                  <div className="table-data">
                    <p>{item?.id}</p>
                  </div>
                  <div className="table-data">
                    <Button
                      className="btn-danger"
                      onClick={() =>
                        handleUpdateTimestamp(item?.id, editTimeStamps)
                      }
                    >
                      Update
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeStampListCard;
