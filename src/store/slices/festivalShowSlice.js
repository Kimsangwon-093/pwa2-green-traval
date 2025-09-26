import { createSlice }from"@reduxjs/toolkit";

// -------- ▼ 창고 안에 '축제 정보 전시'라는 새로운 구역(섹션)을 설계하는 것과 같다. ▼ ------ //
const festivalShowSlice = createSlice({
  name:'festivalShowSlice',
   initialState:{
    festivalInfo:{},
   },

  // reducers ---> 창고 관리자
  // action ---> 요청서
  // payload ---> 창고에 저장된 짐
  // state ---> 창고에 있는 재고목록
  // reducer는 "축제 정보 교체" 전용 업무 요청서를 만드는 행위
   reducers: {
    setFestivalInfo(state, action){
      state.festivalInfo = action.payload;
    },
   },
})

export const {
  setFestivalInfo,
}=festivalShowSlice.actions;

export default festivalShowSlice.reducer;

