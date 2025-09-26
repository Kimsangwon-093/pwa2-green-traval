import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { setScrollEventFlg } from "../../store/slices/staySlice";
import { stayIndex } from "../../store/thunks/stayThunk";
import { setStayInfo } from "../../store/slices/stayShowSlice";

function StayList() { // 1.함수형 컴포넌트 선언

  const dispatch = useDispatch();   // 2.Redux의 dispatch 함수를 가져옴, 이후 Redux 상태를 변경하는 액션을 보낼때 사용
  const navigate = useNavigate();   // 3.React-router-dom의 훅, 페이지 이동을 프로그래밍 적으로 실행할 때 사용
  // ↑ 사실상 게시판 등을 만들때 흔히 쓰는 코드  
  
  const stayList = useSelector(state => state.stay.list);       // 4.Redux 스토어의 stay.list 상태를 구독, 숙박 목록 데이터를 가져옴
  const scrollEventFlg = useSelector(state => state.stay.scrollFlg);    
  
  useEffect(()=>{  // 5.컴포넌트가 처음 렌더링 될때 실행
    window.addEventListener("scroll",addNextPage);  // scroll 이벤트가 발생할 때 addNextPage 함수 실행되도록 등록
    dispatch(stayIndex()); // 첫 진입 시 stayIndex() 액션을 디스패치하여 초기 숙박 데이터를 불러옴
    
    return () => {
      window.removeEventListener("scroll",addNextPage); // 6.컴포넌트가 언마운트될 때 실행, 이벤트 리스너(scroll) 제거하여 메모리 누수 방지.
    };
  },[]);

  function addNextPage(){  // 7.스크롤이 끝까지 내려갔을 때 또는 버튼 클릭 시 호출되는 함수.
    const docHeight = document.documentElement.scrollHeight; // 문서 전체의 세로 길이(y축 총 길이).
    const winHeight = window.innerHeight; // 현재 브라우저 창의 세로 길이.
    const nowHeight  = Math.ceil(window.scrollY); // 현재 스크롤의 세로 위치 (y좌표), 소수점 방지를 위해 Math.ceil 사용. 
    const viewHeight = docHeight - winHeight; // 스크롤을 맨 아래까지 내렸을 때의 y좌표 위치.

    if (viewHeight === nowHeight && scrollEventFlg) { // 사용자가 스크롤을 끝까지 내렸고, scrollEventFlg가 true라면:
      dispatch(setScrollEventFlg(false)); // scrollFlg를 false로 바꿔 중복 실행 방지.
      dispatch(stayIndex()); // festivalIndex() 실행 → 다음 페이지 데이터를 불러옴.
      }
    }  // addNextPage 함수 끝
    function redirectShow(item){             // ★숙박을 클릭했을 때 호출되는 함수
      dispatch(setStayInfo(item));           // Redux에 선택한 숙박 정보를 저장
       navigate(`/stays/${item.contentid}`); // 해당 숙박의 상세 페이지로 이동
    }  

    return(
      // 8.JSX 반환 시작
      <>             
        {/* 숙박 카드들을 담을 container div. */}
        <div className="container">
        {/* stayList에 데이터가 있다면, map을 사용해 숙박 아이템별 UI를 생성 */}
        { 
         stayList.map((item,index)=>{
          return(   
            <div className="card" onClick={() => {redirectShow(item)}} key={item.contentid + item.createdtime + index}>  
              {/*각각의 숙박를 카드(div.card) 형태로 출력 */}  
              {/*클릭 시 redirectShow(item) 실행 → 상세페이지 이동.*/}
              {/*key는 React 리스트 렌더링에서 필요 → contentid와 createdtime 조합 */}
              <div className="card-img" style={{backgroundImage: `url('${item.firstimage}')`}}>
              </div> {/*카드의 이미지 영역, firstimage 속성을 background-image로 적용*/}
              {/*숙박 제목 표시*/}
              <p className="card-title">{item.title}</p> 
              <p className="card-address">{`${item.addr1}`}</p>
              <p className="card-address">{item.tel !== '' ? item.tel:'전화번호 없음'}</p>
            </div>          
          );
        })
      }
      </div>
      </>
    )
  } {/* 컴포넌트 종료 */}

  export default StayList;