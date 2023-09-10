import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  getTransactions,
  addTransactions,
  editTransactions,
  deleteTransactions,
} from "./transactionsApi";

const initialState = {
  isLoading: false,
  transactions: [],
  isError: false,
  error: "",
};

const fetchTransactions = createAsyncThunk(
  "transaction/fetchTransaction",
  async () => {
    const response = await getTransactions();

    return response;
  }
);

const postTransaction = createAsyncThunk(
  "transaction/postTransaction",
  async (data) => {
    const response = await addTransactions(data);

    return response;
  }
);

const patchTransaction = createAsyncThunk(
  "transaction/patchTransaction",
  async ({ id, data }) => {
    const response = await editTransactions(id, data);

    return response;
  }
);

const removeTransaction = createAsyncThunk(
  "transaction/removeTransaction",
  async (id) => {
    const response = await deleteTransactions(id);

    return response;
  }
);

const transactionSlice = createSlice({
  name: "transaction",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchTransactions.pending, (state) => {
        state.isLoading = true;
        state.transactions = [];
        state.isError = false;
        state.error = "";
      })

      .addCase(fetchTransactions.fulfilled, (state, action) => {
        state.isLoading = false;
        state.transactions = action.payload;
        state.isError = false;
        state.error = "";
      })

      .addCase(fetchTransactions.rejected, (state, action) => {
        state.isLoading = false;
        state.transactions = [];
        state.isError = true;
        state.error = action?.error?.message;
      })

      .addCase(postTransaction.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = "";
      })

      .addCase(postTransaction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.transactions.push(action.payload);
        state.isError = false;
        state.error = "";
      })

      .addCase(postTransaction.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action?.error?.message;
      })

      .addCase(patchTransaction.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = "";
      })

      .addCase(patchTransaction.fulfilled, (state, action) => {
        state.isLoading = false;

        const indx = state.transactions.findIndex(
          (trns) => trns.id === action.payload.id
        );
        state.transactions[indx] = action.payload;

        state.isError = false;
        state.error = "";
      })

      .addCase(patchTransaction.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action?.error?.message;
      })

      .addCase(removeTransaction.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = "";
      })

      .addCase(removeTransaction.fulfilled, (state, action) => {
        state.isLoading = false;

        const filterTransaction = state.transactions.filter(
          (trns) => trns.id !== action.meta?.arg
        );
        state.transactions = filterTransaction;

        state.isError = false;
        state.error = "";
      })

      .addCase(removeTransaction.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action?.error?.message;
      });
  },
});

export default transactionSlice.reducer;
export {
  fetchTransactions,
  postTransaction,
  patchTransaction,
  removeTransaction,
};
