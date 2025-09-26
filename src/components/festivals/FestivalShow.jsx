import'./FestivalShow.css';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { setFestivalInfo } from "../../store/slices/festivalShowSlice";
import { dateFormatter } from "../../utils/dateFormmater.js";

function FestivalShow() {
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const festivalInfo = useSelector(state => state.festivalShow.festivalInfo);
  const festivalList = useSelector(state => state.festival.list);
  
  useEffect(() => {
  const item = festivalList.find(item => params.id === item.contentid);
  dispatch(setFestivalInfo(item));
  }, []);

  function redirectBack(){
    navigate(-1);
  }
  return(
    <>
    { festivalInfo.title && 
     <div className="show-container">
        <img className="Back-btn" onClick={redirectBack} src ='/base/HellTrip-Backbtn.png' alt="대문" />
       {/* <button type="button" onClick={redirectBack}>되돌아가기</button> */}
       <h1 className="show-title">{festivalInfo.title}</h1>
       <p className="show-period">{dateFormatter.withHyphenYMD(festivalInfo.eventstartdate)}~{dateFormatter.withHyphenYMD(festivalInfo.eventenddate)}</p>
       <img src={festivalInfo.firstimage} alt={`${festivalInfo.title}사진`} className="show-img "/>
       <p className="show-addr">{festivalInfo.addr1}</p>
     </div>
    }
    </>
  )
}

export default FestivalShow;