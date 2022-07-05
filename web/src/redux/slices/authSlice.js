import { createSlice } from "@reduxjs/toolkit";
import * as helper from "../../utils/helper";

const initialState = {
  data: null,
};

export const authSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setLogin: (state, action) => {
      state.data = action.payload;
      helper.sessionSave("profile", action.payload);
    },
    setLogout: (state, action) => {
      state = null;
      helper.sessionRemove("profile");
      helper.sessionRemove("access_token");
      const { navigate } = action.payload;
      navigate("/");
    },
  },
});
export const { setLogin, setLogout } = authSlice.actions;

export default authSlice.reducer;
