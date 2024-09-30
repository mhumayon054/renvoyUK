import { createSlice, createAsyncThunk, isAnyOf } from "@reduxjs/toolkit";
import { ApiRequests } from "../../service/ApiRequests";
import { catchAsync, handleLoadingErrorParamsForAsycThunk, reduxToolKitCaseBuilder } from "../../helpers/detectError";
import { toast } from "react-toastify";


// user Login With Credentials
// export const userLoginAsyncThunk = createAsyncThunk(
//   "auth/userLoginAsyncThunk",
//   catchAsync(async ({ email, password, cb }) => {
//     const response = await ApiRequests.login({ email, password });
//     console.log("🚀 ~ catchAsync ~ response:", response)
//     if (response) {
//       if (response?.status == 200) {
//         toast.success("LoggedIn Successfully!!!", {
//           autoClose: 2000,
//         });
//       } else {
//         console.log("🚀 ~ catchAsync ~ response:", response)
//         toast.error(response.error)
//       }
//     }else{
//       toast.error("Something went wrong")
//     }
//     if (cb) cb();
//     return response?.data;
//   })
// );


export const userLoginAsyncThunk = createAsyncThunk(
  "auth/userLoginAsyncThunk",
  async ({ email, password, cb }, { rejectWithValue }) => {
    try {
      const response = await ApiRequests.login({ email, password });
      // console.log("🚀 ~ catchAsync ~ response:", response)
      if (response && response.status === 200) {
        toast.success("LoggedIn Successfully!!!", { autoClose: 2000 });
        if (cb) cb();
        return response.data;
      } else {
        // Handle specific error message for incorrect email or password
        if (response && response.status === 401 && response.data.message) {
          toast.error(response.data.message);
          return rejectWithValue(response.data.message);
        } else {
          // Handle other errors
          const errorMessage = response ? response.error : "Something went wrong!!!";
          // console.log("🚀 ~ catchAsync ~ errorMessage:", errorMessage)
          toast.error(errorMessage);
          return rejectWithValue(errorMessage);
        }
      }
    } catch (error) {
      toast.error("Incorrect email & password");
      return rejectWithValue("Something went wrong");
    }
  }
);



// user Login With Credentials
export const authenticateAsyncThunk = createAsyncThunk(
  "auth/authenticateAsyncThunk",
  catchAsync(async (__, _) => {
    const response = await ApiRequests.authenticate();
    if (response) {
      if (response?.status == 200) {
        // history.back()
        // console.log("move")
      } else {
        toast.error(response.error)
      }
    }
    return response?.data;
  })
);
// user Login With Credentials
export const refreshTokensAsyncThunk = createAsyncThunk(
  "auth/refreshTokensAsyncThunk",
  catchAsync(async ({ router, callBack }, _) => {
    // const response = await ApiRequests.refreshTokens({ refreshToken: JSON.parse(refreshToken) });
    const refreshToken = JSON.parse(localStorage.getItem("app-refresh-token"))
    const response = await ApiRequests.refreshTokens({ refreshToken });
    if (callBack) callBack();
    if (response) {
      if (response?.status == 200) {
        // history("/")
      } else {
        toast.error(response.error)
      }
    }
    return response.data;
  })
);

export const userLogoutAsyncThunk = createAsyncThunk(
  "auth/userLogoutAsyncThunk",
  catchAsync(async ({ cb }) => {
    const refreshToken = JSON.parse(localStorage.getItem("app-refresh-token"))
    // console.log("🚀 ~ catchAsync ~ refreshToken:", refreshToken)
    const response = await ApiRequests.logout({ refreshToken });
    // console.log("respose:::", response)
    if (response) {
      if (response?.status == 204) {
        localStorage.removeItem('app-access-token');
        localStorage.removeItem('app-refresh-token');
        localStorage.removeItem('user');
        toast.success("LogOut Successfully!!!", {
          autoClose: 2000,
        });
        localStorage.removeItem("user")
      } else {
        toast.error(response.error)
      }
    }
    if (cb)cb();
    return true;
  })
);




// user register With Credentials
export const userRegisterAsyncThunk = createAsyncThunk(
  "auth/userRegisterAsyncThunk",
  catchAsync(async ({ name, email, password, cb }) => {
    const response = await ApiRequests.register({ name, email, password });
    if (response) {
      if (response?.status == 201) {
        toast.success("Registered Successfully!!!", {
          autoClose: 2000,
        });
        // router("/login")
      } else {
        toast.error(response.error)
      }
    }
    if (cb) cb();
    return response?.data;
  })
);



const initialState = {
  //news states
  user: null,
  tokens: null,
  // manager states
  errors: {},
  loadings: {},
  errorMessages: {},
  errorCodes: {},
  paramsForThunk: {},
};

const blogSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    storeUser: (state, action) => {
      state.user = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(userLoginAsyncThunk.fulfilled, (state, action) => {
        // console.log("🚀 ~ .addCase ~ action.payload:", action.payload)
        state.user = action.payload?.user;
        state.tokens = action.payload?.tokens;
        localStorage.setItem('app-access-token', JSON.stringify(action.payload?.tokens?.access?.token));
        localStorage.setItem('app-refresh-token', JSON.stringify(action.payload?.tokens?.refresh?.token));
        localStorage.setItem('user', JSON.stringify(action.payload?.user));
      })
      .addCase(userLogoutAsyncThunk.fulfilled, (state, action) => {
        state.user = null
        // history('/login')
        localStorage.setItem('app-access-token', null);
        localStorage.setItem('app-refresh-token', null);
        localStorage.setItem('user', null);
      })
      
      .addCase(userRegisterAsyncThunk.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(authenticateAsyncThunk.fulfilled, (state, action) => {
        state.user = action.payload?.user;
      })
      .addCase(refreshTokensAsyncThunk.fulfilled, (state, action) => {
        // state.user = action.payload;
        // console.log("refreshTokensAsyncThunk:", action.payload)
        localStorage.setItem('app-access-token', JSON.stringify(action.payload?.access?.token));
        localStorage.setItem('app-refresh-token', JSON.stringify(action.payload?.refresh?.token));
      })


      // im using addMatcher to manage the asyncthunksMehtod actions like fullfilled,pending,rejected and also to manage the errors loading and error messages and async params
      .addMatcher(
        // isAsyncThunk will run when the action is an asyncthunk exists from giver asycntthunks
        isAnyOf(
          // reduxToolKitCaseBuilder helper make fullfilled, pending, and rejected cases
          ...(reduxToolKitCaseBuilder([
            userLoginAsyncThunk,
            userRegisterAsyncThunk,
            refreshTokensAsyncThunk,
            authenticateAsyncThunk,
            userLogoutAsyncThunk,
          ]))
        ),
        handleLoadingErrorParamsForAsycThunk
      );
  },
});

export default blogSlice.reducer;
export const { setLoading, storeUser } = blogSlice.actions;
