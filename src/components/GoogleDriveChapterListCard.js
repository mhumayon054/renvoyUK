import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const GoogleDriveChapterListCard = ({
  key,
  item,
  editTimeStamps,
  handleEditTimestamp,
  handleUpdateTimestamp,
  content,
  i,
}) => {
  console.log("🚀 ~ content:", content);

  // Function to convert time format "HH:MM:SS" to seconds
  const timeStringToSeconds = (timeString) => {
    const [hours, minutes, seconds] = timeString.split(":").map(Number);
    return hours * 3600 + minutes * 60 + seconds;
  };

  // Calculate the new start time format in seconds
  const newStartTimeInSeconds = timeStringToSeconds(item.startTime);
  console.log("🚀 ~ newStartTimeInSeconds:", newStartTimeInSeconds);

  return (
    <div className="assets-table-body-drive" key={key}>
      <div className="row">
        <div className="col-lg-10 col-8">
          <div className="table-row">
            <div className="table-data">
              <input
                type="text"
                className="form-control drive-inputs"
                value={editTimeStamps[i]?.name || item?.name}
                onChange={(e) => handleEditTimestamp(i, "name", e.target.value)}
              />
            </div>
            <div className="table-data">
              <input
                type="text"
                className="form-control drive-inputs"
                value={editTimeStamps[i]?.startTime || item?.startTime}
                onChange={(e) =>
                  handleEditTimestamp(i, "startTime", e.target.value)
                }
              />
            </div>
            <div className="table-data">
              <input
                type="text"
                className="form-control drive-inputs"
                value={editTimeStamps[i]?.endTime || item?.endTime}
                onChange={(e) =>
                  handleEditTimestamp(i, "endTime", e.target.value)
                }
              />
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-4">
          <a href={`${content?.link}?t=${newStartTimeInSeconds}`} target="_blank">
            <Button className="btn-danger">Open Content</Button>
          </a>
        </div>
        {/* <div className="col-lg-8 col-8">
          <div className="table-row">
            <div className="table-data">
              <Button
                className="btn-danger"
                onClick={() => handleUpdateTimestamp(item?.id, editTimeStamps)}
              >
                Update
              </Button>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default GoogleDriveChapterListCard;
