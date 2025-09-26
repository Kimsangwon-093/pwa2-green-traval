import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosConfigV2 from "../../routes/axiosConfigV2";
import axios from "axios";

const stayIndex = createAsyncThunk(
  "staySlice/stayIndex",
  async (arg, thunkAPI) => {
    const state = thunkAPI.getState();
    const url = `${axiosConfigV2.BASE_URL}/searchStay2`;
    const config = {
      params: {
        serviceKey: axiosConfigV2.SERVICE_KEY,
        MobileOS: axiosConfigV2.MOBILE_OS,
        MobileApp: axiosConfigV2.MOBILE_APP,
        _type: axiosConfigV2.TYPE,
        arrange:axiosConfigV2.ARRANGE,
        numOfRows: axiosConfigV2.NUM_OF_ROWS,
        pageNo: state.stay.page + 1,
      },
    };
    const response = await axios.get(url, config);
    return response.data.response.body;
  }
);

export { stayIndex };
