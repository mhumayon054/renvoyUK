import { createSlice, createAsyncThunk, isAnyOf } from "@reduxjs/toolkit";
import { ApiRequests } from "../../service/ApiRequests";
import {
  catchAsync,
  detectError,
  handleLoadingErrorParamsForAsycThunk,
  reduxToolKitCaseBuilder,
} from "../../helpers/detectError";
import { toast } from "react-toastify";
// import { useLocation } from "react-router-dom";
// import { getContentsAsyncThunk } from "./contentSlice";

export const createPerformerAsyncThunk = createAsyncThunk(
  "performer/createPerformerAsyncThunk",
  catchAsync(async ({ data, callBack }, { dispatch, getState }) => {
    const response = await ApiRequests.createPerformer(data);
    await dispatch(getPerformersAsyncThunk());
    console.log("🚀 ~ catchAsync ~ response:", response.data);
    if (callBack) callBack();
    return response?.data;
  })
);


export const getPerformersAsyncThunk = createAsyncThunk(
  "performer/getPerformersAsyncThunk",
  catchAsync(async (params) => {
    console.log("🚀 ~ catchAsync ~ params:", params);
    const response = await ApiRequests.getPerformers(params);
    console.log("The get Response is:", response?.data);
    return response?.data;
  })
);

export const updatePerformerAsyncThunk = createAsyncThunk(
  "performer/updatePerformersAsyncThunk",
  catchAsync(async ({ id, data, callBack }, { dispatch }) => {
    console.log("🚀 ~ catchAsync ~ data:", data);
    const response = await ApiRequests.updatePerformer({ id, data });
    console.log("🚀 ~ catchAsync ~ response:", response);
    await dispatch(getPerformersAsyncThunk({ email : id}));
    console.log("The get Response is:", response?.data);
    return response?.data;
  })
);

export const deletePerformerAsyncThunk = createAsyncThunk(
  "performer/deletePerformersAsyncThunk",
  catchAsync(async ({ data, callBack }, { dispatch }) => {
    const response = await ApiRequests.deletePerformer(data);
    await dispatch(getPerformersAsyncThunk());
    console.log("The get Response is:", response?.data);
    return response?.data;
  })
);

///////////////////////////////////////////////////

const initialState = {
  //news states
  performer: {
    results: [],
    page: 1,
    limit: 10,
    totalPages: 1,
    totalResults: 1,
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

const performerSlice = createSlice({
  name: "performer",
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

      .addCase(getPerformersAsyncThunk.fulfilled, (state, action) => {
        if (action.payload?.page > 1) {
          state.performer = {
            ...action.payload,
            results: state?.results?.concat(action?.payload?.results),
          };
        } else {
          state.performer = action.payload;
          console.log(state.performer)
        }
      })


      // .addCase(deletePerformer.fulfilled, (state, action) => {
      //   // console.log("response>>", action.payload);
      // })

      // im using addMatcher to manage the asyncthunksMehtod actions like fullfilled,pending,rejected and also to manage the errors loading and error messages and async params
      .addMatcher(
        // isAsyncThunk will run when the action is an asyncthunk exists from giver asyncthunks
        isAnyOf(
          // reduxToolKitCaseBuilder helper make fullfilled, pending, and rejected cases
          ...reduxToolKitCaseBuilder([
            createPerformerAsyncThunk,
            getPerformersAsyncThunk,
            updatePerformerAsyncThunk,
            deletePerformerAsyncThunk,
          ])
        ),
        handleLoadingErrorParamsForAsycThunk
      );
  },
});

export const { setLoading, setSearchValue, setCategoryValue, setOrderValue } =
  performerSlice.actions;

export default performerSlice.reducer;
