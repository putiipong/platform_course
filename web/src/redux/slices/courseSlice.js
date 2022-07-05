// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import API from "../../api";

// const initialState = {
//   getCourseById: {
//     result: null,
//     isFetching: false,
//     error: false,
//   },
//   getCourse: {
//     result: null,
//     isFetching: false,
//     error: false,
//   },
//   createCourse: {
//     result: null,
//     isFetching: false,
//     error: false,
//   },
//   updateCourse: {
//     result: null,
//     isFetching: false,
//     error: false,
//   },
// };

// export const getCourseById = createAsyncThunk(
//   "course/getCourseById",
//   async () => {
//     const response = await API.getCourseById();
//     return response.data;
//   }
// );

// export const getAllCourse = createAsyncThunk("course/getCourse", async () => {
//   const response = await API.getAllCourse();
//   return response.data;
// });

// export const createCourse = createAsyncThunk(
//   "course/createCourse",
//   async (data) => {
//     const response = await API.createCourse(data);
//     return response.data;
//   }
// );

// export const updateCourse = createAsyncThunk(
//   "course/updateCourse",
//   async (data) => {
//     const response = await API.updateCourse(data);
//     return response.data;
//   }
// );

// export const courseSlice = createSlice({
//   name: "course",
//   initialState,
//   extraReducers: {
//     [getCourseById.pending]: (state) => {
//       return {
//         ...state,
//         getCourseById: { result: null, isFetching: true, error: false },
//       };
//     },
//     [getCourseById.rejected]: (state, action) => {
//       return {
//         ...state,
//         getCourseById: { result: null, isFetching: false, error: action },
//       };
//     },
//     [getCourseById.fulfilled]: (state, action) => {
//       return {
//         ...state,
//         getCourseById: {
//           result: action.payload,
//           isFetching: false,
//           error: false,
//         },
//       };
//     },
//     [getAllCourse.pending]: (state) => {
//       return {
//         ...state,
//         getCourse: { result: null, isFetching: true, error: false },
//       };
//     },
//     [getAllCourse.rejected]: (state, action) => {
//       return {
//         ...state,
//         getCourse: { result: null, isFetching: false, error: action },
//       };
//     },
//     [getAllCourse.fulfilled]: (state, action) => {
//       return {
//         ...state,
//         getCourse: {
//           result: action.payload,
//           isFetching: false,
//           error: false,
//         },
//       };
//     },
//     [createCourse.pending]: (state) => {
//       return {
//         ...state,
//         createCourse: { result: null, isFetching: true, error: false },
//       };
//     },
//     [createCourse.rejected]: (state, action) => {
//       return {
//         ...state,
//         createCourse: { result: null, isFetching: false, error: action },
//       };
//     },
//     [createCourse.fulfilled]: (state, action) => {
//       return {
//         ...state,
//         createCourse: {
//           result: action.payload,
//           isFetching: false,
//           error: false,
//         },
//       };
//     },

//     [updateCourse.pending]: (state) => {
//       return {
//         ...state,
//         updateCourse: { result: null, isFetching: true, error: false },
//       };
//     },
//     [updateCourse.rejected]: (state, action) => {
//       return {
//         ...state,
//         updateCourse: { result: null, isFetching: false, error: action },
//       };
//     },
//     [updateCourse.fulfilled]: (state, action) => {
//       return {
//         ...state,
//         updateCourse: {
//           result: action.payload,
//           isFetching: false,
//           error: false,
//         },
//       };
//     },
//   },
// });

// export default courseSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";
import * as helper from "../../utils/helper";

const initialState = {
  data: [],
};

export const courseSlice = createSlice({
  name: "course",
  initialState,
  reducers: {
    setAllCourse: (state, action) => {
      state.data = action.payload;
      helper.sessionSave("course", action.payload);
    },
  },
});
export const { setAllCourse } = courseSlice.actions;

export default courseSlice.reducer;
