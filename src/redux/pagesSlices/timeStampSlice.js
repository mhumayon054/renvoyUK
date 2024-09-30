import { createSlice, createAsyncThunk, isAnyOf } from "@reduxjs/toolkit";
import { ApiRequests } from "../../service/ApiRequests";
import {
  catchAsync,
  detectError,
  handleLoadingErrorParamsForAsycThunk,
  reduxToolKitCaseBuilder,
} from "../../helpers/detectError";
import { toast } from "react-toastify";
import { useLocation } from "react-router-dom";

// Start TimeStamp Slices
///////////////////////////////////////////////////

export const getTimeStampsAsyncThunk = createAsyncThunk(
  "timeStamp/getTimeStampsAsyncThunk",
  catchAsync(async (params, _) => {
    const response = await ApiRequests.getTimeStamps(params);
    return response?.data;
  })
);

export const getMyTimeStampsAsyncThunk = createAsyncThunk(
  "timeStamp/getMyTimeStampsAsyncThunk",
  catchAsync(async (params, _) => {
    const response = await ApiRequests.getTimeStamps(params);
    return response?.data;
  })
);

export const getTimeStampAsyncThunk = createAsyncThunk(
  "timeStamp/getTimeStampAsyncThunk",
  catchAsync(async ({ queryParams, id, _ }) => {
    console.log("🚀 ~ catchAsync2 ~ id, queryParams:", id, queryParams);

    let payload = {};
    
    if ('userId' in queryParams) {
      payload.userId = queryParams.userId;
    } else if ('ipAddress' in queryParams) {
      payload.ipAddress = queryParams.ipAddress;
    }
    
    console.log("🚀 ~ catchAsync ~ payload:", payload)
    const response = await ApiRequests.getTimeStamp(payload, id);
    return response?.data;
  })
);


export const createTimeStampAsyncThunk = createAsyncThunk(
  "timeStamp/createTimeStampAsyncThunk",
  catchAsync(async ({ data, options, callBack }, { dispatch, getState }) => {
    const response = await ApiRequests.createTimeStamp({ data, options });
    toast.success("TimeStamp Created Successfully!", { autoClose: false });
    if (callBack) callBack();
    if (response.status == 201) {
      // const location = useLocation();
      // location.reload();
      // window.location.reload();
      // let rr= window.location.pathname;
      // location.reload(rr);
      // window.location.reload(false)
      // window.parent.location.href;
      // window.location.reload(false);
      // Router.reload(window.location.pathname);
    }

    // if (response.status == 201) {
    //   toast.success("TimeStamp Created Successfully!");
    //     let params = {};
    //     let state = getState().listings;
    //     if (state.search) params.name = state.search;
    //     if (state.order) params.sortBy = `name:${state.order}`;
    //     dispatch(getTimeStampsAsyncThunk({ ...params }));
    //   } else {
    //     toast.error(response.error);
    //   }
    return response?.data;
  })
);

export const updateTimeStampAsyncThunk = createAsyncThunk(
  "timeStamp/updateTimeStampAsyncThunk",
  catchAsync(async ({ id, data, callBack }, { dispatch }) => {
    const response = await ApiRequests.updateTimeStamp({ id, data });
    if (response.status == 200) {
      // toast.success("TimeStamp Updated Successfully!");
      dispatch(getTimeStampsAsyncThunk({ contentId: data?.contentId }));
      callBack();
    } else {
      toast.error(response.error);
    }
    return response?.data;
  })
);

// export const deleteTimeStampAsyncThunk = createAsyncThunk(
//   "timeStamp/deleteTimeStampAsyncThunk",
//   catchAsync(async (id, { dispatch, getState }) => {
//     const response = await ApiRequests.deleteTimeStamp(id);
//     if (response.status == 204) {
//       toast.success("TimeStamp Deleted");
//             dispatch(getTimeStampsAsyncThunk({contentId:data?.contentId}));

//       // let params = {};
//       // let state = getState().listings;

//       // if (state.search) params.name = state.search;
//       // if (state.order) params.sortBy = `name:${state.order}`;
//       // dispatch(getTimeStampsAsyncThunk({ ...params }));
//       // dispatch(getTimeStampsAsyncThunk());
//     } else {
//       toast.error(response.error);
//     }
//     return response?.data;
//   })
// );

export const deleteTimeStampAsyncThunk = createAsyncThunk(
  "timeStamp/deleteTimeStampAsyncThunk",
  catchAsync(async ({ id, contentId }, { dispatch }) => {
    const response = await ApiRequests.deleteTimeStamp(id);
    if (response.status === 204) {
      toast.success("TimeStamp Deleted");
      dispatch(getTimeStampsAsyncThunk({ contentId }));
    } else {
      toast.error(response.error);
    }
    return response?.data;
  })
);

export const deleteYouTimeStampAsyncThunk = createAsyncThunk(
  "timeStamp/deleteYouTimeStampAsyncThunk",
  catchAsync(async ({ id, linkId }, { dispatch }) => {
    const response = await ApiRequests.deleteTimeStamp(id);
    if (response.status === 204) {
      toast.success("TimeStamp Deleted");
      dispatch(getTimeStampsAsyncThunk({ linkId }));
    } else {
      toast.error(response.error);
    }
    return response?.data;
  })
);

////////////////////////reaction///////////////////////////

export const getTimeStampReactAsyncThunk = createAsyncThunk(
  "content/getTimeStampReactAsyncThunk",
  catchAsync(async (params, _) => {
    const response = await ApiRequests.getTimeStampReacts(params);
    return response?.data;
  })
);

export const updateTimeStampReactAsyncThunk = createAsyncThunk(
  "content/updateTimeStampReactAsyncThunk",
  catchAsync(async ({ id, requestData, contentId, callBack }, { dispatch }) => {
    console.log("🚀 ~ catchAsync ~ contentId:", contentId);
    console.log("🚀 ~ catchAsync ~ dataupppppp:", requestData);
    const response = await ApiRequests.updateTimeStampReact({ id, data:requestData });
    console.log("🚀 ~ catchAsync ~ response:", response);
    if (response.status == 201) {
      // toast.success("Review Updated Successfully!");
      dispatch(
        getTimeStampsAsyncThunk({
          contentId: contentId,
          populate: "contentId",
          sortBy: "name:asc",
          limit: 60,
        })
      );
      callBack();
    } else {
      // toast.error(response.error);
      console.log(response.error);
    }
    return response?.data;
  })
);

export const updateYouTimeStampReactAsyncThunk = createAsyncThunk(
  "content/updateYouTimeStampReactAsyncThunk",
  catchAsync(async ({ id, data, linkId, callBack }, { dispatch }) => {
    console.log("🚀 ~ catchAsync ~ linkId:", linkId);
    console.log("🚀 ~ catchAsync ~ dataupppppp:", data);
    const response = await ApiRequests.updateTimeStampReact({ id, data });
    console.log("🚀 ~ catchAsync ~ response:", response);
    if (response.status == 201) {
      // toast.success("Review Updated Successfully!");
      dispatch(getTimeStampsAsyncThunk({ linkId: linkId }));
      callBack();
    } else {
      // toast.error(response.error);
      console.log(response.error);
    }
    return response?.data;
  })
);

///////////////////////////////////////////////////

const initialState = {
  //news states
  timeStamps: {
    page: 0,
    results: [],
    totalPages: 1,
  },
  //
  images: {
    page: 0,
    results: [],
    totalPages: 1,
  },
  videos: {
    page: 0,
    results: [],
    totalPages: 1,
  },
  audios: {
    page: 0,
    results: [],
    totalPages: 1,
  },
  pdfs: {
    page: 0,
    results: [],
    totalPages: 1,
  },

  // for gallery data
  myImages: {
    page: 0,
    results: [],
    totalPages: 1,
  },
  myVideos: {
    page: 0,
    results: [],
    totalPages: 1,
  },
  myAudios: {
    page: 0,
    results: [],
    totalPages: 1,
  },
  myPdfs: {
    page: 0,
    results: [],
    totalPages: 1,
  },

  myTimeStamp: {
    page: 0,
    results: [],
    totalPages: 1,
  },
  // reaction
  reaction: {
    results: [],
  },
  // End gallery

  //
  timeStamp: "",
  story: null,
  assets: null,
  asset: null,
  listings: {
    page: 0,
    results: [],
    totalPages: 1,
  },
  // manager states
  errors: {},
  loadings: {},
  errorMessages: {},
  errorCodes: {},
  paramsForThunk: {},
  search: null,
  categoryId: null,
  categories: [],
  order: "asce",
};

const timeStampSlice = createSlice({
  name: "timeStamps",
  initialState,
  reducers: {
    setSearchValue(state, action) {
      state.search = action.payload;
    },
    setCategoryValue(state, action) {
      state.categoryId = action.payload;
    },
    setOrderValue(state, action) {
      state.order = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      //

      .addCase(getTimeStampsAsyncThunk.fulfilled, (state, action) => {
        if (action?.meta?.arg?.mimeType === "image") {
          if (action.payload?.page > 1) {
            state.images = {
              ...action.payload,
              results: state?.images?.results.concat(action?.payload?.results),
            };
          } else {
            state.images = action.payload;
          }
        } else if (action?.meta?.arg?.mimeType === "audio") {
          if (action.payload?.page > 1) {
            state.audios = {
              ...action.payload,
              results: state?.audios?.results.concat(action?.payload?.results),
            };
          } else {
            state.audios = action.payload;
          }
        } else if (action?.meta?.arg?.mimeType === "application/pdf") {
          if (action.payload?.page > 1) {
            state.pdfs = {
              ...action.payload,
              results: state?.pdfs?.results.concat(action?.payload?.results),
            };
          } else {
            state.pdfs = action.payload;
          }
        } else if (action?.meta?.arg?.mimeType === "video") {
          if (action.payload?.page > 1) {
            state.videos = {
              ...action.payload,
              results: state?.videos?.results.concat(action?.payload?.results),
            };
          } else {
            state.videos = action.payload;
          }
        }
        state.timeStamps = action.payload;
        // console.log("action?.meta?.mimeType",action.meta)
      })

      .addCase(getMyTimeStampsAsyncThunk.fulfilled, (state, action) => {
        if (action?.meta?.arg?.mimeType === "image") {
          if (action.payload?.page > 1) {
            state.myImages = {
              ...action.payload,
              results: state?.myImages?.results.concat(
                action?.payload?.results
              ),
            };
          } else {
            state.myImages = action.payload;
          }
        } else if (action?.meta?.arg?.mimeType === "audio") {
          if (action.payload?.page > 1) {
            state.myAudios = {
              ...action.payload,
              results: state?.myAudios?.results.concat(
                action?.payload?.results
              ),
            };
          } else {
            state.myAudios = action.payload;
          }
        } else if (action?.meta?.arg?.mimeType === "application/pdf") {
          if (action.payload?.page > 1) {
            state.myPdfs = {
              ...action.payload,
              results: state?.myPdfs?.results.concat(action?.payload?.results),
            };
          } else {
            state.myPdfs = action.payload;
          }
        } else if (action?.meta?.arg?.mimeType === "video") {
          if (action.payload?.page > 1) {
            state.myVideos = {
              ...action.payload,
              results: state?.myVideos?.results.concat(
                action?.payload?.results
              ),
            };
          } else {
            state.myVideos = action.payload;
          }
        } else {
          if (action.payload?.page > 1) {
            state.myTimeStamp = {
              ...action.payload,
              results: state?.myTimeStamp?.results.concat(
                action?.payload?.results
              ),
            };
          } else {
            state.myTimeStamp = action.payload;
          }
        }
        // console.log("action?.meta?.mimeType",action)
      })

      .addCase(getTimeStampAsyncThunk.fulfilled, (state, action) => {
        if (action.payload?.page > 1) {
          state.timeStamp = {
            ...action.payload,
            results: state?.timeStamp?.results.concat(action?.payload?.results),
          };
        } else {
          state.timeStamp = action.payload;
        }
      })
      .addCase(deleteTimeStampAsyncThunk.fulfilled, (state, action) => {
        // console.log("response>>", action.payload);
      })
      .addCase(deleteYouTimeStampAsyncThunk.fulfilled, (state, action) => {
        // console.log("response>>", action.payload);
      })
      .addCase(createTimeStampAsyncThunk.fulfilled, (state, action) => {
        state.categories = action.payload?.results;
        // console.log("response>>", action.payload);
      })
      // im using addMatcher to manage the asyncthunksMehtod actions like fullfilled,pending,rejected and also to manage the errors loading and error messages and async params
      .addMatcher(
        // isAsyncThunk will run when the action is an asyncthunk exists from giver asyncthunks
        isAnyOf(
          // reduxToolKitCaseBuilder helper make fullfilled, pending, and rejected cases
          ...reduxToolKitCaseBuilder([
            getTimeStampsAsyncThunk,
            getMyTimeStampsAsyncThunk,
            getTimeStampAsyncThunk,
            deleteTimeStampAsyncThunk,
            deleteYouTimeStampAsyncThunk,
            createTimeStampAsyncThunk,
            // reaction
            getTimeStampReactAsyncThunk,
            updateTimeStampReactAsyncThunk,
            updateYouTimeStampReactAsyncThunk,
          ])
        ),
        handleLoadingErrorParamsForAsycThunk
      );
  },
});

export const { setLoading, setSearchValue, setCategoryValue, setOrderValue } =
  timeStampSlice.actions;

export default timeStampSlice.reducer;
