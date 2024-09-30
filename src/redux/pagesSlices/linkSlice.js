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

// Start Link Slices
///////////////////////////////////////////////////

export const getLinksAsyncThunk = createAsyncThunk(
  "link/getLinksAsyncThunk",
  catchAsync(async (params, _) => {
    const response = await ApiRequests.getLinks(params);
    return response?.data;
  })
);

export const getMyLinksAsyncThunk = createAsyncThunk(
  "link/getMyLinksAsyncThunk",
  catchAsync(async (params, _) => {
    const response = await ApiRequests.getUserLinks(params);
    return response?.data;
  })
);

export const getLinkAsyncThunk = createAsyncThunk(
  "link/getLinkAsyncThunk",
  catchAsync(async ({ queryParams, id, _ }) => {
//     const response = await ApiRequests.getUserLink(id);
//     return response?.data;
//   })
// );
console.log("🚀 ~ catchAsync ~ id, queryParams:", id, queryParams);

let payload = {};

if ('userId' in queryParams) {
  payload.userId = queryParams.userId;
} else if ('ipAddress' in queryParams) {
  payload.ipAddress = queryParams.ipAddress;
}

console.log("🚀 ~ catchAsync ~ payload:", payload)
const response = await ApiRequests.getUserLink(payload, id);
return response?.data;
})
);


export const createLinkAsyncThunk = createAsyncThunk(
  "link/createLinkAsyncThunk",
  catchAsync(async ({ data, options, callBack }, { dispatch, getState }) => {
    console.log("🚀 ~ catchAsync ~ data:", data);
    const response = await ApiRequests.createLink({ data, options });
    // console.log("🚀 ~ catchAsync ~ response:", )
    if (response?.data?.message == "Files already uploaded") {
      toast.error(response?.data?.message);
    } else {
      toast.success("Link Created Successfully!");
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
    //   toast.success("Link Created Successfully!");
    //     let params = {};
    //     let state = getState().listings;
    //     if (state.search) params.name = state.search;
    //     if (state.order) params.sortBy = `name:${state.order}`;
    //     dispatch(getLinksAsyncThunk({ ...params }));
    //   } else {
    //     toast.error(response.error);
    //   }
    return response?.data;
  })
);

export const updateLinkAsyncThunk = createAsyncThunk(
  "link/updateLinkAsyncThunk",
  catchAsync(async ({ id, data, callBack }, { dispatch }) => {
    const response = await ApiRequests.updateLink({ id, data });
    if (response.status == 200) {
      toast.success("Link Updated Successfully!");
      dispatch(
        getLinksAsyncThunk({
          sortBy: "updatedAt:desc",
          mimeType: "video",
        })
      );
      callBack();
    } else {
      toast.error(response.error);
    }
    return response?.data;
  })
);

export const upLinkAsyncThunk = createAsyncThunk(
  "link/upLinkAsyncThunk",
  catchAsync(async ({ id, data, callBack }, { dispatch }) => {
    // console.log("🚀 ~ catchAsync ~ data:", id,data)
    const response = await ApiRequests.linkUpdate({ id, data });
    if (response.status == 200) {
      toast.success("Link Updated Successfully!");
      dispatch(
        getLinksAsyncThunk({
          sortBy: "updatedAt:desc",
          mimeType: "video",
        })
      );
      callBack();
    } else {
      toast.error(response.error);
    }
    return response?.data;
  })
);

export const deleteLinkAsyncThunk = createAsyncThunk(
  "link/deleteLinkAsyncThunk",
  catchAsync(async (id, { dispatch, getState }) => {
    const response = await ApiRequests.deleteLink(id);
    if (response.status == 204) {
      toast.success("Link Deleted");
      // let params = {};
      // let state = getState().listings;

      // if (state.search) params.name = state.search;
      // if (state.order) params.sortBy = `name:${state.order}`;
      dispatch(
        getMyLinksAsyncThunk({
          // mimeType: "video",
          // sortBy: "updatedAt:desc",
        })
      );
    } else {
      toast.error(response.error);
    }
    return response?.data;
  })
);

////////////////////////reaction///////////////////////////

export const getLinkReactAsyncThunk = createAsyncThunk(
  "link/getLinkReactAsyncThunk",
  catchAsync(async (params, _) => {
    const response = await ApiRequests.getLinkReacts(params);
    return response?.data;
  })
);

export const updateLinkReactAsyncThunk = createAsyncThunk(
  "link/updateLinkReactAsyncThunk",
  catchAsync(async ({ id, data, callBack }, { dispatch }) => {
    console.log("🚀 ~ catchAsync ~ dataupppppp:", data);
    const response = await ApiRequests.updateLinkReact({ id, data });
    console.log("🚀 ~ catchAsync ~ response:", response);
    if (response.status == 201) {
      // toast.success("Review Updated Successfully!");
      dispatch(
        getMyLinksAsyncThunk({
          // sortBy: "updatedAt:desc",
          // mimeType: "video",
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

export const deleteLinkReactAsyncThunk = createAsyncThunk(
  "link/deleteLinkReactAsyncThunk",
  catchAsync(async ({ id, data, callBack }, { dispatch }) => {
    console.log("🚀 ~ catchAsync ~ datadddd", data);
    const response = await ApiRequests.deleteLinkReact({ id, data });
    console.log("🚀 ~ catchAsync ~ response:", response);
    dispatch(
      getLinksAsyncThunk({
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
  links: {
    page: 0,
    results: [],
    totalPages: 1,
  },
  //

  myLink: {
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
  link: "",
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

const linkSlice = createSlice({
  name: "links",
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

      .addCase(getLinksAsyncThunk.fulfilled, (state, action) => {
        if (action.payload?.page > 1) {
          state.links = {
            ...action.payload,
            results: state?.links?.results.concat(action?.payload?.results),
          };
        } else {
          state.links = action.payload;
        }
      })

      .addCase(getMyLinksAsyncThunk.fulfilled, (state, action) => {
        if (action.payload?.page > 1) {
          state.myLink = {
            ...action.payload,
            results: state?.myLink?.results.concat(action?.payload?.results),
          };
        } else {
          state.myLink = action.payload;
        }
      })

      .addCase(getLinkAsyncThunk.fulfilled, (state, action) => {
        if (action.payload?.page > 1) {
          state.link = {
            ...action.payload,
            results: state?.link?.results.concat(action?.payload?.results),
          };
        } else {
          state.link = action.payload;
        }
      })
      .addCase(deleteLinkAsyncThunk.fulfilled, (state, action) => {})
      .addCase(createLinkAsyncThunk.fulfilled, (state, action) => {
        state.categories = action.payload?.results;
        // console.log("response>>", action.payload);
      })
      // im using addMatcher to manage the asyncthunksMehtod actions like fullfilled,pending,rejected and also to manage the errors loading and error messages and async params
      .addMatcher(
        // isAsyncThunk will run when the action is an asyncthunk exists from giver asyncthunks
        isAnyOf(
          // reduxToolKitCaseBuilder helper make fullfilled, pending, and rejected cases
          ...reduxToolKitCaseBuilder([
            getLinksAsyncThunk,
            getMyLinksAsyncThunk,
            getLinkAsyncThunk,
            deleteLinkAsyncThunk,
            createLinkAsyncThunk,
            upLinkAsyncThunk,
            // reaction
            getLinkReactAsyncThunk,
            updateLinkReactAsyncThunk,
            deleteLinkReactAsyncThunk,
          ])
        ),
        handleLoadingErrorParamsForAsycThunk
      );
  },
});

export const { setLoading, setSearchValue, setCategoryValue, setOrderValue } =
  linkSlice.actions;

export default linkSlice.reducer;
