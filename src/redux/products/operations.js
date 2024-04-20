import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//Створюємо асинхроний thunk для отримання списку продуктів з бекенду
export const fetchProducts = createAsyncThunk(
  "products/fetchAll",
  async function (_, { rejectWithValue }) {
    try {
      const { data } = await axios.get("/api/product");
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
