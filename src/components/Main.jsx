import { useNavigate } from 'react-router-dom';
import './Main.css';

function Main(){
  const navigate = useNavigate();
  return(
    <>
      <div className='main-container'>
        <img className="main-festiva-img" onClick={() => { navigate('/festivals') }} src ='/base/festival-btn.png' alt="대문" />
        <img className="main-Inn-img" onClick={() => { navigate('/stays') }} src ='/base/stay-btn.png' alt="대문" />
      </div>
    </>
  )
}
export default Main;