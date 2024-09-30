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

// Start Content Slices
///////////////////////////////////////////////////

export const getContentsAsyncThunk = createAsyncThunk(
  "content/getContentsAsyncThunk",
  catchAsync(async (params, _) => {
    const response = await ApiRequests.getContents(params);
    return response?.data;
  })
);

export const getMyContentsAsyncThunk = createAsyncThunk(
  "content/getMyContentsAsyncThunk",
  catchAsync(async (params, _) => {
    const response = await ApiRequests.getUserContents(params);
    return response?.data;
  })
);

export const getContentAsyncThunk = createAsyncThunk(
  "content/getContentAsyncThunk",
  catchAsync(async ({ queryParams, id, _ }) => {
    console.log("🚀 ~ catchAsync ~ id, queryParams:", id, queryParams);

    let payload = {};
    
    if ('userId' in queryParams) {
      payload.userId = queryParams.userId;
    } else if ('ipAddress' in queryParams) {
      payload.ipAddress = queryParams.ipAddress;
    }
    
    console.log("🚀 ~ catchAsync ~ payload:", payload)
    const response = await ApiRequests.getContent(payload, id);
    return response?.data;
  })
);



export const createContentAsyncThunk = createAsyncThunk(
  "content/createContentAsyncThunk",
  catchAsync(async ({ data, options, callBack }, { dispatch, getState }) => {
    const response = await ApiRequests.createContent({ data, options });
    // console.log("🚀 ~ catchAsync ~ response:", )
    if (response?.data?.message == "Files already uploaded") {
      toast.error(response?.data?.message);
    } else {
      toast.success("Content Created Successfully!");
    }
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
    //   toast.success("Content Created Successfully!");
    //     let params = {};
    //     let state = getState().listings;
    //     if (state.search) params.name = state.search;
    //     if (state.order) params.sortBy = `name:${state.order}`;
    //     dispatch(getContentsAsyncThunk({ ...params }));
    //   } else {
    //     toast.error(response.error);
    //   }
    return response?.data;
  })
);

export const updateContentAsyncThunk = createAsyncThunk(
  "content/updateContentAsyncThunk",
  catchAsync(async ({ id, data, callBack }, { dispatch }) => {
    const response = await ApiRequests.updateContent({ id, data });
    if (response.status == 200) {
      toast.success("Content Updated Successfully!");
      dispatch(getContentsAsyncThunk(
        {
          sortBy: "updatedAt:desc",
          mimeType: "video",

        }
      ));
      callBack();
    } else {
      toast.error(response.error);
    }
    return response?.data;
  })
);

export const upContentAsyncThunk = createAsyncThunk(
  "content/upContentAsyncThunk",
  catchAsync(async ({ id, data, callBack }, { dispatch }) => {
    // console.log("🚀 ~ catchAsync ~ data:", id,data)
    const response = await ApiRequests.contentUpdate({ id, data });
    if (response.status == 200) {
      toast.success("Content Updated Successfully!");
      dispatch(getContentsAsyncThunk(
        {
          sortBy: "updatedAt:desc",
          mimeType: "video",

        }
      ));
      callBack();
    } else {
      toast.error(response.error);
    }
    return response?.data;
  })
);

export const deleteContentAsyncThunk = createAsyncThunk(
  "content/deleteContentAsyncThunk",
  catchAsync(async (id, { dispatch, getState }) => {
    const response = await ApiRequests.deleteContent(id);
    if (response.status == 204) {
      toast.success("Content Deleted");
      // let params = {};
      // let state = getState().listings;

      // if (state.search) params.name = state.search;
      // if (state.order) params.sortBy = `name:${state.order}`;
      dispatch(
        getContentsAsyncThunk({
          mimeType: "video",
          sortBy: "updatedAt:desc",
        })
      );
    } else {
      toast.error(response.error);
    }
    return response?.data;
  })
);

////////////////////////reaction///////////////////////////

export const getContentReactAsyncThunk = createAsyncThunk(
  "content/getContentReactAsyncThunk",
  catchAsync(async (params, _) => {
    const response = await ApiRequests.getContentReacts(params);
    return response?.data;
  })
);

export const updateContentReactAsyncThunk = createAsyncThunk(
  "content/updateContentReactAsyncThunk",
  catchAsync(async ({id, requestData}, { dispatch }) => {
    console.log("🚀 ~ catchAsync ~ id:", id)
    console.log("🚀 ~ catchAsync ~ requestData:", requestData);
    try {
      const response = await ApiRequests.updateContentReact({ id, data:requestData });
      console.log("🚀 ~ catchAsync ~ response:", response);
      // const responseData = await response.json();
      // console.log("🚀 ~ catchAsync ~ responseData:", responseData)
      // if (!response.ok) {
      //   throw new Error("Error updating content reaction");
      // }
      if (response.status == 201) {
        console.log("cllllllllll")
        dispatch(getContentsAsyncThunk({
          sortBy: "sortName:desc",
          mimeType: "video",
        }));
      } else {
        console.log(response.error);
      }
      return response;
    } catch (error) {
      console.error("Error updating content reaction:", error);
      throw error;
    }
  })
);



export const deleteContentReactAsyncThunk = createAsyncThunk(
  "content/deleteContentReactAsyncThunk",
  catchAsync(async ({ id, data, callBack }, { dispatch }) => {
    console.log("🚀 ~ catchAsync ~ datadddd", data);
    const response = await ApiRequests.deleteContentReact({ id, data });
    console.log("🚀 ~ catchAsync ~ response:", response)
    dispatch(
      getContentsAsyncThunk({
        sortBy: "updatedAt:desc",
        mimeType: "video",
      })
    );
    if (response.status == 200) {
      // toast.success("Review Deleted Successfully!");
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
  contents: {
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

  myContent: {
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
  content: "",
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

const contentSlice = createSlice({
  name: "contents",
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

      .addCase(getContentsAsyncThunk.fulfilled, (state, action) => {
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
        state.contents = action.payload;
        // console.log("action?.meta?.mimeType",action.meta)
      })

      .addCase(getMyContentsAsyncThunk.fulfilled, (state, action) => {
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
            state.myContent = {
              ...action.payload,
              results: state?.myContent?.results.concat(
                action?.payload?.results
              ),
            };
          } else {
            state.myContent = action.payload;
          }
        }
        // console.log("action?.meta?.mimeType",action)
      })

      .addCase(getContentAsyncThunk.fulfilled, (state, action) => {
        if (action.payload?.page > 1) {
          state.content = {
            ...action.payload,
            results: state?.content?.results.concat(action?.payload?.results),
          };
        } else {
          state.content = action.payload;
        }
      })
      .addCase(deleteContentAsyncThunk.fulfilled, (state, action) => {})
      .addCase(createContentAsyncThunk.fulfilled, (state, action) => {
        state.categories = action.payload?.results;
        // console.log("response>>", action.payload);
      })
      // im using addMatcher to manage the asyncthunksMehtod actions like fullfilled,pending,rejected and also to manage the errors loading and error messages and async params
      .addMatcher(
        // isAsyncThunk will run when the action is an asyncthunk exists from giver asyncthunks
        isAnyOf(
          // reduxToolKitCaseBuilder helper make fullfilled, pending, and rejected cases
          ...reduxToolKitCaseBuilder([
            getContentsAsyncThunk,
            getMyContentsAsyncThunk,
            getContentAsyncThunk,
            deleteContentAsyncThunk,
            createContentAsyncThunk,
            upContentAsyncThunk,
            // reaction
            getContentReactAsyncThunk,
            updateContentReactAsyncThunk,
            deleteContentReactAsyncThunk,
          ])
        ),
        handleLoadingErrorParamsForAsycThunk
      );
  },
});

export const { setLoading, setSearchValue, setCategoryValue, setOrderValue } =
  contentSlice.actions;

export default contentSlice.reducer;
