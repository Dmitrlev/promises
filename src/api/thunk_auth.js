import API from "../../api/api";
import {ThunkSetMeProfile} from "./thunk_profile";
import {setWrongLoginAuth} from "../myProfile_reducer";

export const ThunkAddLogin = (email, password, rememberMe) => {
  return (dispatch) => {
      API.addAuth(email, password, rememberMe).then(res => {
        if(res.data.resultCode === 0) {
          dispatch(ThunkSetMeProfile())
        } else
        if(res.data.resultCode === 1) {
          dispatch(setWrongLoginAuth(true))
        }
      })
  };
};

export const ThunkRemoveLogin = () => {
  return (dispatch) => {
    API.removeAuth().then(res => {
      if(res.data.resultCode === 0) {
        dispatch(ThunkSetMeProfile())
      }
    })
  };
};