import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://zhnywo.onrender.com";

// const unsetToken = () => {
//   return (axios.defaults.headers.common.Authorization = "");
// };

const setToken = (token) => {
  console.log(token);
  return (axios.defaults.headers.common.Authorization = `Bearer ${token}`);
};
export const registration = createAsyncThunk(
  "api/registration",
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post("register", credentials);
      alert("Success! Now you can login ✔", {
        timeout: 3000,
      });

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
    setToken(data.token);
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

const authOperations = {
  registration,
  login,
  getPersonalInfo,
};

export default authOperations;
