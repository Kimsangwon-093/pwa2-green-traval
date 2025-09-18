import { useEffect, useState} from "react";
import './BeforeInstallPrompt.css';
function BeforeInstallPrompt(){
  const [defferdPrompt, setDefferdPrompt] = useState(null);
  
  function handleBeforeInstallPrompt(e) {
    e.preventDefault(); // 브라우저가 자동으로 설치 팝업을 띄우는 것을 막아준다.
  
    setDefferdPrompt(e); //이벤트 객체를 state 저장(나중에 설치과장을 진행하기 위해서 )
  }

  async function handleInstall() {
    if(defferdPrompt){
      // 설치 다이얼 로그를 띄우는 것
      defferdPrompt.prompt();

      // 유저에 응답(accept | dismissed)을 기다리기 
      const result = await defferdPrompt.userChoice;

      if(result === 'accepted'){
        console.log('동의');

      }else{
        console.log('거부');
      }

      // 한 번 사용한 이벤트는 재사용이 불가능 하므로 state 초기화
      setDefferdPrompt(null);
    }
  }

  useEffect(()=>{
    //  'beforeinstallprompt' 이벤트
    //  - 브라우저가 `앱설치가 가능하다는` 조건이 충족되면 발생
    //  - 이벤트 객체를 state에 저장해두고 나중에 사용자가 설치 버튼을 눌렀을 때,
    //    설치 과정을 진행 하도록 유도 
    window.addEventListener('beforeinstallprompt',handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt',handleBeforeInstallPrompt);
    }
  }, [])
  
  return(
  <>
    {
      // 설치 가능한 상태일 때만 버튼 출력
     defferdPrompt && // <button type="button" onClick={handleInstall}>다운로드</button>
     (
      <div className="prompt-container">
        <p class="prompt-info">다운로드 하여 사용할 수 있습니다</p>
        <button class="prompt-btn" onClick={handleInstall}>다운로드</button>
      </div>
     )
    }
  </>
  )
}
export default BeforeInstallPrompt;