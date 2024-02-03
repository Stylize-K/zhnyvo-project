import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://zhnywo.onrender.com";

export const registration = createAsyncThunk(
  "auth/registration",
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post("/register", credentials);
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

const authOperations = {
  registration,
};

export default authOperations;
