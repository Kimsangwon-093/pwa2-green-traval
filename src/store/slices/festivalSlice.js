import { createSlice } from "@reduxjs/toolkit";
import { festivalIndex } from "../thunks/festivalThunk.js";
import { localStorageUtil } from "../../utils/localStorageUtil.js";
const festivalSlices = createSlice({
  name: "festivalSlices",
  initialState: {
    list: [], // 페스티벌 리스트
    page: 0, // 현재 페이지 번호
    scrollEventFlg: true,
  },
  reducers: {
    setScrollEventFlg: (state, action) => {
      state.scrollEventFlg = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(festivalIndex.fulfilled, (state, action) => {
        // console.log(action.payload, action.type);
        // if (state.list !== null) {
        //   // 페이지 추가 처리
        //   state.list = [...state.list, ...action.payload.items.item];
        //   state.page = action.payload.pageNo;
        // } else {
        //   // 초기 페이지 처리
        //   state.list = [...state.list, ...action.payload.items.item];
        //   state.page = action.payload.pageNo;
        // }
        if (action.payload.items?.item) {
          state.list = [...state.list, ...action.payload.items.item];
          state.page = action.payload.pageNo;
          state.scrollEventFlg = true;
          localStorageUtil.setFestivalList(state.list);
          localStorageUtil.setFestivalPage(state.page);
          localStorageUtil.setFestivalScrollFlg(state.scrollEventFlg);
        } else {
          state.scrollEventFlg = false;
        }
      })
      .addMatcher(
        (action) => action.type.endsWith("/rejected"),
        (state, action) => {
          console.error("에러처리", action.error);
        }
      );
  },
});

export const { setScrollEventFlg } = festivalSlices.actions;

export default festivalSlices.reducer;
