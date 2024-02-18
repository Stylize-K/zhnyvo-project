import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://zhnywo.onrender.com";

// const unsetToken = () => {
//   return (axios.defaults.headers.common.Authorization = "");
// };

const setToken = (token) => {
  return (axios.defaults.headers.common.Authorization = `Bearer ${token}`);
};
export const registration = createAsyncThunk(
  "api/registration",
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post(
        "/api/Authentication/register",
        credentials
      );
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
    const { data } = await axios.post("/login", credentials);
    setToken(data.token);
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

const authOperations = {
  registration,
  login,
};

export default authOperations;
