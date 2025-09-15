// index -> 출력
// store -> 생성
// show -> 상세
// update -> 수정처리
// edit -> 수정 page 출력
// destroy -> 삭제처리

import { useDispatch, useSelector } from "react-redux";
import "./FestivalsList.css";
import { useEffect } from "react";
import { setScrollEventFlg } from "../../store/slices/festivalSlice.js";
import { festivalIndex } from "../../store/thunks/festivalThunk.js";
import { dateFormatter } from "../../utils/dateFormmater.js";

function FestivalsList() {
  const dispatch = useDispatch();

  const festivalList = useSelector((state) => state.festival.list);
  const page = useSelector((state) => state.festival.page);
  const scrollEventFlg = useSelector((state) => state.festival.scrollFlg);
  useEffect(() => {
    // window.addEventListener("scroll", addNextPage);
    dispatch(festivalIndex(page));

    return () => {
      // window.removeEventListener("scroll", addNextPage);
    };
  }, [page, scrollEventFlg]);

  // 다음 페이지 가져오기
  function addNextPage() {
    // 스크롤 관련 처리
    const docHeight = document.documentElement.scrollHeight; // 문서의 y축 총 길이
    const winHeight = window.innerHeight; //윈도우 Y축 총 길이
    const nowHeight = window.scrollY; // 현재 스크롤의 Y축 위치
    const viewHeight = docHeight - winHeight; // 스크롤을 끝까지 내렸을 때의 Y축 위치

    if (viewHeight * 0.8 <= nowHeight && scrollEventFlg) {
      dispatch(setScrollEventFlg(false));
      dispatch(festivalIndex(page + 1));
    }
    // dispatch(festivalIndex(page + 1));
  }

  return (
    <>
      <div className="container">
        {festivalList.length > 0 &&
          festivalList.map((item) => {
            return (
              <div className="card" key={item.contentid + item.createdtime}>
                <div
                  className="card-img"
                  style={{ backgroundImage: `url('${item.firstimage}')` }}
                ></div>
                <div className="card-title">{item.title}</div>
                <div className="card-period">
                  {dateFormatter.withHyphenYMD(item.eventstartdate)} ~
                  {dateFormatter.withHyphenYMD(item.eventenddate)}
                </div>
              </div>
            );
          })}
        {/* <div className="card">
          <div
            className="card-img"
            style={{
              backgroundImage: `url('http://tong.visitkorea.or.kr/cms/resource/91/3484791_image2_1.jpg')`,
            }}
          ></div>
          <p className="card-title">안동 하회탈 축제</p>
          <p className="card-period">25-09-01 ~ 25-09-10</p>
        </div>
        <div className="card">
          <div
            className="card-img"
            style={{
              backgroundImage: `url('http://tong.visitkorea.or.kr/cms/resource/91/3484791_image2_1.jpg')`,
            }}
          ></div>
          <p className="card-title">안동 하회탈 축제</p>
          <p className="card-period">25-09-01 ~ 25-09-10</p>
        </div>
        <div className="card">
          <div
            className="card-img"
            style={{
              backgroundImage: `url('http://tong.visitkorea.or.kr/cms/resource/91/3484791_image2_1.jpg')`,
            }}
          ></div>
          <p className="card-title">안동 하회탈 축제</p>
          <p className="card-period">25-09-01 ~ 25-09-10</p>
        </div>
        <div className="card">
          <div
            className="card-img"
            style={{
              backgroundImage: `url('http://tong.visitkorea.or.kr/cms/resource/91/3484791_image2_1.jpg')`,
            }}
          ></div>
          <p className="card-title">안동 하회탈 축제</p>
          <p className="card-period">25-09-01 ~ 25-09-10</p>
        </div> */}
      </div>
      <button type="button" onClick={addNextPage}>
        더 보기
      </button>
    </>
  );
}

export default FestivalsList;
