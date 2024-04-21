import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://zhnywo.onrender.com";

const setToken = (accessToken) => {
  console.log(accessToken);
  return (axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`);
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = "";
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
    localStorage.setItem("accessToken", data.accessToken);
    localStorage.setItem("refreshToken", data.refreshToken);
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
    try {
      const response = await axios.get("api/Account/personal_information");
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

const refreshUser = createAsyncThunk("auth/refresh", async (_, thunkAPI) => {
  const refreshToken = localStorage.getItem("refreshToken");
  if (!refreshToken) {
    return thunkAPI.rejectWithValue("No refresh token found");
  }
  try {
    const { data } = await axios.post("/refresh", { refreshToken });
    setToken(data.accessToken);
    localStorage.setItem("accessToken", data.accessToken);
    return data;
  } catch (error) {
    console.error("Refresh Error:", error);
    return thunkAPI.rejectWithValue(error.message);
  }
});
export const logOut = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    await axios.delete("/api/Account/logout", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    });
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    clearAuthHeader();
  } catch (error) {
    console.error("logout:", error);
    return thunkAPI.rejectWithValue(error.message);
  }
});

const authOperations = {
  registration,
  login,
  getPersonalInfo,
  refreshUser,
  logOut,
};

export default authOperations;
