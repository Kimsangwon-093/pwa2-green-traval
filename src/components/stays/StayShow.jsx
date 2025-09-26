import'./StayShow.css';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { setStayInfo } from "../../store/slices/stayShowSlice";

function StayShow() {
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const stayInfo = useSelector(state => state.stayShow.stayInfo);
  const stayList = useSelector(state => state.stay.list);

  useEffect(()=>{
    const item = stayList.find(item => params.id === item.contentid);
    dispatch(setStayInfo(item));
  },[])

  function redirectBack(){
    navigate(-1);
  }
  return(
    <>
    { stayInfo.title && 
    <div className="show-container">
        <img className="Back-btn" onClick={redirectBack} src ='/base/HellTrip-Backbtn.png' alt="대문" />
      {/* <button type="button" onClick={redirectBack}>되돌아가기</button> */}
      <h1 className="show-title">{stayInfo.title}</h1>
      <img src={stayInfo.firstimage} alt={`${stayInfo.title}사진`} class="show-img" />
      <p className="show-addr1">{stayInfo.addr1}</p>
    </div>
    }
    </>
  )
}
export default StayShow;