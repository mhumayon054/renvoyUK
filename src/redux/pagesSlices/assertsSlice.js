import { createSlice, createAsyncThunk, isAnyOf } from "@reduxjs/toolkit";
import { ApiRequests } from "../../service/ApiRequests";
import {
  catchAsync,
  handleLoadingErrorParamsForAsycThunk,
  reduxToolKitCaseBuilder,
} from "../../helpers/detectError";
import { toast } from "react-toastify";



// Start Content Slices
///////////////////////////////////////////////////

export const getAssertsAsyncThunk = createAsyncThunk(
  "asserts/getAssertsAsyncThunk",
  catchAsync(async (params, _) => {
    const response = await ApiRequests.getAsserts(params);
    return response?.data;
  })
);

export const getAssertAsyncThunk = createAsyncThunk(
  "asserts/getAssertAsyncThunk",
  catchAsync(async (params, _) => {
    const response = await ApiRequests.getAssert(params);
    return response?.data;
  })
);

export const createAssertAsyncThunk = createAsyncThunk(
  "asserts/createAssertAsyncThunk",
  catchAsync(async ({ data, options, params, callBack }, { dispatch, getState }) => {
    const response = await ApiRequests.createAssert({ data, options, params });
    if (callBack) callBack(response.data)
    toast.success("Content Created Successfully!");
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
    const state = getState();
    dispatch(getAssertsAsyncThunk({ ...state.asserts.paramsForThunk.getAssertsAsyncThunk, NextContinuationToken: null }));


    // if (response.status == 201) {
    //   toast.success("Content Created Successfully!");
    //     let params = {};
    //     let state = getState().listings;
    //     if (state.search) params.name = state.search;
    //     if (state.order) params.sortBy = `name:${state.order}`;
    //     dispatch(getAssertsAsyncThunk({ ...params }));
    //   } else {
    //     toast.error(response.error);
    //   }
    return response?.data;
  })
);

export const createDirAsyncThunk = createAsyncThunk(
  "asserts/createDirAsyncThunk",
  catchAsync(async ({ data, options, callBack }, { dispatch, getState }) => {
    const response = await ApiRequests.createDir({ data, options });
    if (callBack) callBack(response.data)
    toast.success("Content Created Successfully!");
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
    const state = getState();

    dispatch(getAssertsAsyncThunk({ ...state.asserts.paramsForThunk.getAssertsAsyncThunk, NextContinuationToken: null }));


    // if (response.status == 201) {
    //   toast.success("Content Created Successfully!");
    //     let params = {};
    //     let state = getState().listings;
    //     if (state.search) params.name = state.search;
    //     if (state.order) params.sortBy = `name:${state.order}`;
    //     dispatch(getAssertsAsyncThunk({ ...params }));
    //   } else {
    //     toast.error(response.error);
    //   }
    return response?.data;
  })
);

export const updateAssertAsyncThunk = createAsyncThunk(
  "asserts/updateAssertAsyncThunk",
  catchAsync(async ({ id, data, callBack }, { dispatch, getState }) => {
    const response = await ApiRequests.updateAssert({ id, data });
    if (response.status == 200) {
      toast.success("Content Updated Successfully!");
      const state = getState();

      dispatch(getAssertsAsyncThunk({ ...state.asserts.paramsForThunk.getAssertsAsyncThunk, NextContinuationToken: null }));

      callBack();
    } else {
      toast.error(response.error);
    }
    return response?.data;
  })
);
export const updateDirAsyncThunk = createAsyncThunk(
  "asserts/updateAssertAsyncThunk",
  catchAsync(async ({ id, data, callBack }, { dispatch, getState }) => {
    const response = await ApiRequests.updateDir({ id, data });
    if (response.status == 200) {
      toast.success("Content Updated Successfully!");
      const state = getState();

      dispatch(getAssertsAsyncThunk({ ...state.asserts.paramsForThunk.getAssertsAsyncThunk, NextContinuationToken: null }));

      callBack();
    } else {
      toast.error(response.error);
    }
    return response?.data;
  })
);


export const deleteAssertAsyncThunk = createAsyncThunk(
  "asserts/deleteAssertAsyncThunk",
  catchAsync(async (params1, { dispatch, getState }) => {
    const response = await ApiRequests.deleteAssert(params1);
    toast.success("Asset Deleted");
    // if (response.status == 204) {
    let params = {};
    // let state = getState().listings;

    // if (state.search) params.name = state.search;
    // if (state.order) params.sortBy = `name:${state.order}`;
    const state = getState();
    // dispatch(getAssertsAsyncThunk({ ...params }));
    dispatch(getAssertsAsyncThunk({ ...state.asserts.paramsForThunk.getAssertsAsyncThunk, NextContinuationToken: null }));

    // } else {
    // toast.error(response.error);
    // }
    return response?.data;
  })
);


///////////////////////////////////////////////////

const initialState = {
  //news states
  asserts: {
    CommonPrefixes: [],
    Contents: [],
    IsTruncated: false,
    NextContinuationToken: '',
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
  // End gallery

  //
  assert: "",
  story: null,
  // assets: null,
  // asset: null,
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

const assertsSlice = createSlice({
  name: "asserts",
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

      .addCase(getAssertsAsyncThunk.fulfilled, (state, action) => {
        function mergeArrays(array1, array2, key) {
          const uniqueMap = new Map([...array1, ...array2].map(obj => [obj[key], obj]));
          return Array.from(uniqueMap.values());
        }
        if (state?.asserts?.IsTruncated) {
          const updatedCommonPrefixes = mergeArrays(state?.asserts?.CommonPrefixes, action?.payload?.CommonPrefixes, "Prefix")
          state.asserts.CommonPrefixes = [...updatedCommonPrefixes];

          const updatedContents = mergeArrays(state?.asserts?.Contents, action?.payload?.Contents, "Key")
          state.asserts.Contents = [...updatedContents];
          state.asserts.IsTruncated = action?.payload?.IsTruncated
          state.asserts.NextContinuationToken = action?.payload?.NextContinuationToken
        } else {
          state.asserts = action.payload;
        }
      })

      // .addCase(getMyAssertsAsyncThunk.fulfilled, (state, action) => {
      //   if (action?.meta?.arg?.mimeType === "image") {
      //     if (action.payload?.page > 1) {
      //       state.myImages = {
      //         ...action.payload,
      //         results: state?.myImages?.results.concat(
      //           action?.payload?.results
      //         ),
      //       };
      //     } else {
      //       state.myImages = action.payload;
      //     }
      //   } else if (action?.meta?.arg?.mimeType === "audio") {
      //     if (action.payload?.page > 1) {
      //       state.myAudios = {
      //         ...action.payload,
      //         results: state?.myAudios?.results.concat(
      //           action?.payload?.results
      //         ),
      //       };
      //     } else {
      //       state.myAudios = action.payload;
      //     }
      //   } else if (action?.meta?.arg?.mimeType === "application/pdf") {
      //     if (action.payload?.page > 1) {
      //       state.myPdfs = {
      //         ...action.payload,
      //         results: state?.myPdfs?.results.concat(
      //           action?.payload?.results
      //         ),
      //       };
      //     } else {
      //       state.myPdfs = action.payload;
      //     }
      //   } else if (action?.meta?.arg?.mimeType === "video") {
      //     if (action.payload?.page > 1) {
      //       state.myVideos = {
      //         ...action.payload,
      //         results: state?.myVideos?.results.concat(
      //           action?.payload?.results
      //         ),
      //       };
      //     } else {
      //       state.myVideos = action.payload;
      //     }
      //   } else {
      //     if (action.payload?.page > 1) {
      //       state.myContent = {
      //         ...action.payload,
      //         results: state?.myContent?.results.concat(
      //           action?.payload?.results
      //         ),
      //       };
      //     } else {
      //       state.myContent = action.payload;
      //     }
      //   }
      //   // console.log("action?.meta?.mimeType",action)
      // })

      .addCase(getAssertAsyncThunk.fulfilled, (state, action) => {
        // if (action.payload?.page > 1) {
        //   state.content = {
        //     ...action.payload,
        //     results: state?.content?.results.concat(action?.payload?.results),
        //   };
        // } else {
        //   state.content = action.payload;
        // }
        state.assert = action.payload;
      })
      .addCase(deleteAssertAsyncThunk.fulfilled, (state, action) => {
        // console.log("response>>", action.payload);
      })
      .addCase(createAssertAsyncThunk.fulfilled, (state, action) => {
        state.categories = action.payload?.results;
        // console.log("response>>", action.payload);
      })
      .addCase(createDirAsyncThunk.fulfilled, (state, action) => {
        state.categories = action.payload?.results;
        // console.log("response>>", action.payload);
      })
      // im using addMatcher to manage the asyncthunksMehtod actions like fullfilled,pending,rejected and also to manage the errors loading and error messages and async params
      .addMatcher(
        // isAsyncThunk will run when the action is an asyncthunk exists from giver asyncthunks
        isAnyOf(
          // reduxToolKitCaseBuilder helper make fullfilled, pending, and rejected cases
          ...reduxToolKitCaseBuilder([
            getAssertsAsyncThunk,
            // getMyAssertsAsyncThunk,
            getAssertAsyncThunk,
            deleteAssertAsyncThunk,
            createAssertAsyncThunk,
            createDirAsyncThunk,
          ])
        ),
        handleLoadingErrorParamsForAsycThunk
      );
  },
});

export const { setLoading, setSearchValue, setCategoryValue, setOrderValue } =
  assertsSlice.actions;

export default assertsSlice.reducer;
