import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
}

interface UserState {
  users: User[];
  filteredUsers: User[];
  filter: Partial<Record<keyof User, string>>;
  status: "idle" | "loading" | "failed";
}

const initialState: UserState = {
  users: [],
  filteredUsers: [],
  filter: {},
  status: "idle",
};

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await axios.get<User[]>(
    "https://jsonplaceholder.typicode.com/users"
  );
  return response.data;
});

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setFilter: (state, action: PayloadAction<Partial<UserState["filter"]>>) => {
      state.filter = { ...state.filter, ...action.payload };

      state.filteredUsers = state.users.filter((user) => {
        return Object.keys(state.filter).every((key) => {
          const filterValue = state.filter[key as keyof UserState["filter"]];
          const userValue = user[key as keyof User] as string;

          return filterValue
            ? userValue.toLowerCase().startsWith(filterValue.toLowerCase())
            : true;
        });
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = "idle";
        state.users = action.payload;
        state.filteredUsers = action.payload;
      })
      .addCase(fetchUsers.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const { setFilter } = userSlice.actions;
export default userSlice.reducer;
