// index -> 출력
// store -> 생성
// show -> 상세
// update -> 수정처리
// edit -> 수정 page 출력
// destroy -> 삭제처리

import { useDispatch } from 'react-redux';
import'./FestivalsList.css';
import { useEffect } from 'react';
import { festivalIndex } from '../../store/thunks/festivalThunk';

function FestivalsList(){
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(festivalIndex());
  },[]);

  return(
    <>
      <div className="container">
        <div className="card">
          <div className="card-img" style={{backgroundImage:`url('http://tong.visitkorea.or.kr/cms/resource/91/3484791_image2_1.jpg')`}}></div>
          <p className="card-title">안동 하회탈 축제</p>
          <p className="card-period">25-09-01 ~ 25-09-10</p>
        </div>
        <div className="card">
          <div className="card-img" style={{backgroundImage:`url('http://tong.visitkorea.or.kr/cms/resource/91/3484791_image2_1.jpg')`}}></div>
          <p className="card-title">안동 하회탈 축제</p>
          <p className="card-period">25-09-01 ~ 25-09-10</p>
        </div>
        <div className="card">
          <div className="card-img" style={{backgroundImage:`url('http://tong.visitkorea.or.kr/cms/resource/91/3484791_image2_1.jpg')`}}></div>
          <p className="card-title">안동 하회탈 축제</p>
          <p className="card-period">25-09-01 ~ 25-09-10</p>
        </div>
        <div className="card">
          <div className="card-img" style={{backgroundImage:`url('http://tong.visitkorea.or.kr/cms/resource/91/3484791_image2_1.jpg')`}}></div>
          <p className="card-title">안동 하회탈 축제</p>
          <p className="card-period">25-09-01 ~ 25-09-10</p>
        </div>
      </div>
    </>
  )
}

export default FestivalsList;