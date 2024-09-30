// ** Reducers Imports
import auth from "./pagesSlices/authSlice";
import model from "./layoutSlices/modelSlice";
import user from "./pagesSlices/userSlice";
import contents from "./pagesSlices/contentSlice";
import timeStamp from "./pagesSlices/timeStampSlice";
import links from "./pagesSlices/linkSlice";

import error from "./errors/handleErrorsAndPayloads";
import { combineReducers } from "@reduxjs/toolkit";
import performer from "./pagesSlices/performerSlice";

const rootReducer = combineReducers({
  user,
  error,
  auth,
  model,
  contents,
  timeStamp,
  links,
  performer
});

export default rootReducer;
