import { useNavigate } from 'react-router-dom';
import './Main.css';

function Main(){
  const navigate = useNavigate();
  return(
    <>
      <img className="title-img" onClick={() => { navigate('/festivals') }} src ='/base/image_1.png' alt="대문" />
      <img className="Inn-img" onClick={() => { navigate('/stays') }} src ='/base/Inn_01.png' alt="대문" />
    </>
  )
}
export default Main;