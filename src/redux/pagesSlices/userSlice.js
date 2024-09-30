import { createSlice, createAsyncThunk, isAnyOf } from "@reduxjs/toolkit";
import { ApiRequests } from "../../service/ApiRequests";
import {
  catchAsync,
  detectError,
  handleLoadingErrorParamsForAsycThunk,
  reduxToolKitCaseBuilder,
} from "../../helpers/detectError";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

// Start User Slices
///////////////////////////////////////////////////

export const getUsersAsyncThunk = createAsyncThunk(
  "user/getUsersAsyncThunk",
  catchAsync(async (params, _) => {
    const response = await ApiRequests.getOwners(params);
    return response?.data;
  })
);

export const getUsersAsyncThunkNew = createAsyncThunk(
  "user/getUsersAsyncThunkNew",
  async (options, { dispatch, getState }) => {
    const { role, limit } = options;
    let allUserIds = [];

    let page = 0;
    let totalUsers = 0;

    do {
      const response = await ApiRequests.getOwners({ role, limit, page }); // Adjust this according to your API
      const { users, total } = response.data;
      allUserIds = [...allUserIds, ...users.map((user) => user.user_id)];
      totalUsers = total;
      page++;

      // Dispatch a Redux action to store the accumulated user IDs
      dispatch(storeUserIds(allUserIds));
    } while (allUserIds.length < totalUsers);

    return allUserIds;
  }
);

export const membersCheckUsernameAsyncThunk = createAsyncThunk(
  "user/membersCheckUsernameAsyncThunk",
  catchAsync(async ({ params, callBack }, { dispatch }) => {
    const response = await ApiRequests.membersCheckUsername(params);
    if (callBack) callBack(response?.data);
    return response?.data;
  })
);

export const filterClassBaseStudentsAsyncThunk = createAsyncThunk(
  "user/filterClassBaseStudentsAsyncThunk",
  catchAsync(async ({ params, callBack }, { dispatch }) => {
    const response = await ApiRequests.filterClassBaseStudents(params);
    if (callBack) callBack(response?.data);
    return response?.data;
  })
);

export const getUsersByIdsAsyncThunk = createAsyncThunk(
  "user/getUsersByIdsAsyncThunk",
  catchAsync(async (params, _) => {
    const response = await ApiRequests.getOwner(params);
    return response?.data;
  })
);

export const getUserAsyncThunk = createAsyncThunk(
  "user/getUserAsyncThunk",
  catchAsync(async (id, _) => {
    const response = await ApiRequests.getOwner(id);
    return response?.data;
  })
);
export const getUserForListAsyncThunk = createAsyncThunk(
  "user/getUserForListAsyncThunk",
  catchAsync(async (params, _) => {
    const response = await ApiRequests.getOwners(params);
    return response?.data;
  })
);

export const createUserAsyncThunk = createAsyncThunk(
  "user/createUserAsyncThunk",
  catchAsync(async ({ data, callBack }, { dispatch, getState }) => {
    const state = getState();
    const response = await ApiRequests.createOwner(data);
    if (response.status == 204) {
      toast.success("Student Create Successfully!");
    }
    if (callBack) callBack();
    let params = {};
    let state1 = getState().listings;
    if (state1.search) params.name = state1.search;
    if (state1.order) params.sortBy = `name:${state1.order}`;
    dispatch(
      getUsersAsyncThunk({ ...params, populate: "user_id", role: "User", limit:10 })
    );
    // dispatch(getUsersByIdsAsyncThunk({ ...state.users?.paramsForThunk?.getUsersByIdsAsyncThunk}))
    return response?.data;
  })
);

export const updateUserAsyncThunk = createAsyncThunk(
  "user/updateUserAsyncThunk",
  catchAsync(async ({ id, data, callBack }, { dispatch, getState }) => {
    const state = getState();
    // console.log(state.users?.paramsForThunk)
    const response = await ApiRequests.updateOwner({ id, data });
    if (response.status == 204) {
      toast.success("Student Updated Successfully!");
    }
    if (callBack) callBack();
    let params = {};
    let state1 = getState().listings;
    if (state1.search) params.name = state1.search;
    if (state1.order) params.sortBy = `name:${state1.order}`;
    dispatch(
      getUsersAsyncThunk({ ...params, populate: "user_id", role: "User" })
    );
    // dispatch(getUsersByIdsAsyncThunk({ populate: "image,user_id", ...state.users?.paramsForThunk?.getUsersByIdsAsyncThunk, page: 1 }))
    return response?.data;
  })
);

export const deleteUserAsyncThunk = createAsyncThunk(
  "user/deleteUserAsyncThunk",
  catchAsync(async (id, { dispatch, getState }) => {
    // const response = await ApiRequests.getAssets(filterparams);
    const response = await ApiRequests.deleteOwner(id);
    toast.success("Student Deleted Successfully.")
    if (response.status == 204) {
      // toast.success("Student Deleted Successfully!");
      // let params = {};
      let state = getState().listings;
      // if (state.search) params.name = state.search;
      // if (state.order) params.sortBy = `name:${state.order}`;
      // dispatch(
      //   getUsersAsyncThunk({ ...params, populate: "user_id", role: "User" })
      // );

      let params = { role: "User", limit: 12, page: 0 };
      if (state.order) params.sortBy = `name:${state.order}`;
      dispatch(getUsersAsyncThunk({ ...params }));
    } else {
      toast.error(response.error);
    }
    return id;
  })
);

export const deleteMultipleUsersAsyncThunk = createAsyncThunk(
  "user/deleteMultipleUsersAsyncThunk",
  catchAsync(async ({ data, callBack }, { dispatch, getState }) => {
    // console.log("🚀 ~ file: userSlice.js:167 ~ catchAsync ~ data:", data);
    const response = await ApiRequests.deleteMultipleUsers(data);
    if (response.status == 204) {
      toast.success("Multiple Students Deleted Successfully!");
      let state = getState().listings;
      let params = { role: "User", limit: 12, page: 0 };
      if (state.order) params.sortBy = `name:${state.order}`;
      dispatch(getUsersAsyncThunk({ ...params }));
    } else {
      toast.error(response.error);
    }
    return response?.data;
  })
);

///////////////////////////////////////////////////

const initialState = {
  //news states
  users: {
    page: 0,
    users: [],
    totalPages: 1,
  },
  usersCount: {
    page: 0,
    results: [],
    totalPages: 1,
  },
  inviteUser: {
    page: 0,
    results: [],
    totalPages: 1,
  },
  userExport: {
    page: 0,
    results: [],
    totalPages: 1,
  },
  userRole: {
    page: 0,
    results: [],
    totalPages: 1,
  },
  usersList: {
    page: 0,
    results: [],
    totalPages: 1,
  },
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
  userIds: [],
};

const userSlice = createSlice({
  name: "users",
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
    storeUserIds: (state, action) => {
      state.userIds = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      //
      .addCase(getUsersAsyncThunk.pending, (state, action) => {
        if (action.meta?.arg?.page <= 1 || !action.meta?.arg?.page) {
          state.users = {
            page: 0,
            results: [],
            totalPages: 1,
          };
        }
      })

      .addCase(getUsersAsyncThunk.fulfilled, (state, action) => {
        if (action.payload?.page > 1) {
          state.users = {
            ...action.payload,
            users: state?.users?.results.concat(action?.payload?.results),
          };
        } else {
          state.users = action.payload;
        }
      })

      .addCase(getUsersAsyncThunkNew.fulfilled, (state, action) => {
        if (action.payload?.page > 1) {
          state.userIds = {
            ...action.payload,
            users: state?.userIds?.results.concat(action?.payload?.results),
          };
        } else {
          state.userIds = action.payload;
        }
      })

      .addCase(membersCheckUsernameAsyncThunk.fulfilled, (state, action) => {
        if (action.payload?.page > 1) {
          state.usersCount = {
            ...action.payload,
            results: state?.usersCount?.results.concat(
              action?.payload?.results
            ),
          };
        } else {
          state.usersCount = action.payload;
        }
      })

      .addCase(filterClassBaseStudentsAsyncThunk.fulfilled, (state, action) => {
        if (action.payload?.page > 1) {
          state.users = {
            ...action.payload,
            results: state?.users?.results.concat(action?.payload?.results),
          };
        } else {
          state.users = action.payload;
        }
      })

      .addCase(getUserForListAsyncThunk.fulfilled, (state, action) => {
        if (action.payload?.page > 1) {
          state.usersList = {
            ...action.payload,
            results: state?.usersList?.results.concat(action?.payload?.results),
          };
        } else {
          state.usersList = action.payload;
        }
      })
      .addCase(getUserAsyncThunk.fulfilled, (state, action) => {
        if (action.payload?.page > 1) {
          state.story = {
            ...action.payload,
            results: state?.story?.results.concat(action?.payload?.results),
          };
        } else {
          state.story = action.payload;
        }
      })
      .addCase(deleteUserAsyncThunk.fulfilled, (state, action) => {
        state.users = {
          ...state.users,
          totalResults: state.users?.totalResults - 1,
          results: state.users?.results.filter((e) => e.id != action.payload),
        };
        state.usersCount = {
          ...state.usersCount,
          totalResults: state.usersCount?.totalResults - 1,
          results: state.usersCount?.results.filter(
            (e) => e.id != action.payload
          ),
        };
      })

      .addCase(deleteMultipleUsersAsyncThunk.fulfilled, (state, action) => {
        state.users = {
          ...state.users,
          totalResults: state.users?.totalResults - 1,
          results: state.users?.results.filter((e) => e.id != action.payload),
        };
        state.usersCount = {
          ...state.usersCount,
          totalResults: state.usersCount?.totalResults - 1,
          results: state.usersCount?.results.filter(
            (e) => e.id != action.payload
          ),
        };
      })

      // im using addMatcher to manage the asyncthunksMehtod actions like fullfilled,pending,rejected and also to manage the errors loading and error messages and async params
      .addMatcher(
        // isAsyncThunk will run when the action is an asyncthunk exists from giver asycntthunks
        isAnyOf(
          // reduxToolKitCaseBuilder helper make fullfilled, pending, and rejected cases
          ...reduxToolKitCaseBuilder([
            getUsersAsyncThunk,
            getUsersAsyncThunkNew,
            membersCheckUsernameAsyncThunk,
            filterClassBaseStudentsAsyncThunk,
            getUserAsyncThunk,
            getUsersByIdsAsyncThunk,
            deleteUserAsyncThunk,
            deleteMultipleUsersAsyncThunk,
            createUserAsyncThunk,
            updateUserAsyncThunk,
            getUserForListAsyncThunk,
          ])
        ),
        handleLoadingErrorParamsForAsycThunk
      );
  },
});

export default userSlice.reducer;
export const {
  setLoading,
  setSearchValue,
  setCategoryValue,
  setOrderValue,
  storeUserIds,
} = userSlice.actions;
