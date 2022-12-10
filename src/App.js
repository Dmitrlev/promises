import {Route, Routes} from "react-router-dom";
import MainContainer from "./component/MainContainer/MainContainer";
import LoginContainer from "./component/login/LoginContainer";
import {useSelector} from "react-redux";


function App() {
  let hidder = useSelector((state) => state.main.hid)

  return (
    <>
      <Routes>
        <Route path='/' element={<MainContainer/>} />
        <Route path='/login' element={<LoginContainer/>} />
      </Routes>
      {hidder && <div className='hid'></div>}
    </>
  );
}

export default App;
