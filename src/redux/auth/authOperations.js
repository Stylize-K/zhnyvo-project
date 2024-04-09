import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://zhnywo.onrender.com";

// const unsetToken = () => {
//   return (axios.defaults.headers.common.Authorization = "");
// };

const setToken = (accessToken) => {
  console.log(accessToken);
  // localStorage.setItem("accessToken", accessToken);
  return (axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`);
};
export const registration = createAsyncThunk(
  "api/registration",
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post("register", credentials);
      alert("Success! Now you can login ✔", {
        timeout: 3000,
      });
      setToken(data.token);
      return data;
    } catch (error) {
      console.log(error.message);
      if (error.message === "Request failed with status code 409") {
        alert("This user is already registered ⚠", {
          timeout: 3000,
        });
      }
      if (error.message === "Request failed with status code 400") {
        alert("Not valid format of email or password ⚠", {
          timeout: 3000,
        });
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const login = createAsyncThunk("api/login", async (credentials, thunkAPI) => {
  try {
    const { data } = await axios.post("login", credentials);
    setToken(data.accessToken);
    console.log(data.accessToken);
    console.log(data);
    alert("Success! Now you are logedin ✔", {
      timeout: 3000,
    });
    return data;
  } catch (error) {
    console.log(error.message);
    if (error.message === "Request failed with status code 401") {
      alert(
        "Email, or password is wrong, or email is not verified. Please check your e-mail ⚠",
        {
          timeout: 3000,
        }
      );
    }
    if (error.message === "Request failed with status code 400") {
      alert("Not valid format of email or password ⚠", {
        timeout: 3000,
      });
    }
    return thunkAPI.rejectWithValue(error.message);
  }
});
const getPersonalInfo = createAsyncThunk(
  "api/getPersonalInfo",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    try {
      setToken(persistedToken);
      console.log(state);
      // const { data } = await axios.get("api/Account/personal_information");
      const response = await axios.get("api/Account/personal_information");
      setToken(response.data.accessToken);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error.message);
      if (error.message === "Request failed with status code 401") {
        console.log(error.message);
      }
      if (error.message === "Request failed with status code 400") {
        console.log(error.message);
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    // Reading the token from the state via getState()
    const state = thunkAPI.getState();
    const persistedToken = state.auth.refreshToken;

    if (persistedToken === null) {
      // If there is no token, exit without performing any request
      return thunkAPI.rejectWithValue("Unable to fetch user");
    }

    try {
      // If there is a token, add it to the HTTP header and perform the request
      setToken(persistedToken);
      const res = await axios.get("api/Account/personal_information");
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const authOperations = {
  registration,
  login,
  getPersonalInfo,
  refreshUser,
};

export default authOperations;
