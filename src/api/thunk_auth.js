import API from "./api";
import {setDavidStatus, setHid, setId, setMargaretStatus} from "../redux/main_reducer";

export const ThunkMe = () => {
  return (dispatch) => {
     API.meProfile().then( res => {
       dispatch(setId(res.data.data.id))
    })
  };
};

export const TakeStatusDavid = () => {
  return (dispatch) => {
    API.takeStatus(26969).then( res => {
      dispatch(setDavidStatus(res.data))
    })
  };
};
export const TakeStatusMargaret = () => {
  return (dispatch) => {
    API.takeStatus(26604).then( res => {
      dispatch(setMargaretStatus(res.data))
    })
  };
};
export const TakeOpenMargaret = () => {

  return (dispatch) => {
    dispatch(setHid(true))
    API.addAuth('davidovich333.david333@gmail.com', 'Love4DandI', false).then( res => {
      dispatch(setHid(false))
      document.location.href="/";
    })
  };
};

export const TakeOpenDavid = () => {

  return (dispatch) => {
    dispatch(setHid(true))
    API.addAuth('davidovich444.david444@gmail.com', 'david231231', false).then( res => {
      dispatch(setHid(false))
      document.location.href="/";
    })
  };
};

export const ThunkUpdateStatus = (text) => {
  return (dispatch) => {
    API.updateStatus(text).then(res => {

    })
  }
}
