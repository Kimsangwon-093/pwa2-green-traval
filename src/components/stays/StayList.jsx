import "./FestivalsList.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { stayIndex } from "../../store/thunks/stayThunk.js";
import { setScrollEventFlg } from "../../store/slices/staySlice.js";

function StayList() {
  const dispatch = useDispatch();
  const Navigate = useNavigate();

  const StayList = useSelector((state) => state.stay.list);
  const scrollEventFlg = useSelector((state) => state.stay.scrollFlg);

  useEffect(() => {
    window.addEventListener("scroll", addNextPage);
    dispatch(stayIndex());

    return () => {
      window.removeEventListener("scroll", addNextPage);
    };
  }, []);


  function addNextPage() {
    const docHeight = document.documentElement.scrollHeight; 
    const winHeight = window.innerHeight; 
    const nowHeight = Math.ceil(window.scrollY);
    const viewHeight = docHeight - winHeight; 

    if (viewHeight === nowHeight && scrollEventFlg) {
      dispatch(setScrollEventFlg(false));
      dispatch(stayIndex());
    }
    // dispatch(stayIndex(page + 1));
  }

  return (
    <>
      <button type="button" onClick={addNextPage}>
        더 보기
      </button>
    </>
  );
}

export default StayList;
