const CHANGE_IS_EDIT = 'CHANGE_IS_EDIT';
const SET_ID= 'SET_ID';
const SET_DAVID_STATUS = 'SET_DAVID_STATUS';
const SET_MARGARET_STATUS = 'SET_MARGARET_STATUS';
const SET_HID = 'SET_HID';

let inheritState = {
  hid: false,
  isEdit: false,
  id: null,
  status: {
    davidStatus: '',
    MargaretStatus: '',
  }
};

const main_reducer = (state = inheritState, action) => {
  switch (action.type) {
    case SET_HID:
      return {
        ...state,
        hid: action.hid
      }
    case SET_ID:
      return {
        ...state,
        id: action.id
      }
    case CHANGE_IS_EDIT:
      return {
        ...state,
        isEdit: !state.isEdit,
      }
    case SET_DAVID_STATUS:
      return {
        ...state,
        status: {...state.status, davidStatus: action.status}
      }
    case SET_MARGARET_STATUS:
      return {
        ...state,
        status: {...state.status, MargaretStatus: action.status}
      }
    default: return state;
  }
};
export const setHid = (hid) => {
  return {
    type: SET_HID,
    hid
  }
}
export const changeIsEdit = () => {
  return {
    type: CHANGE_IS_EDIT,
  }
}
export const setId = (id) => {
  return {
    type: SET_ID,
    id
  }
}
export const setDavidStatus = (status) => {
  return {
    type: SET_DAVID_STATUS,
    status
  }
}
export const setMargaretStatus = (status) => {
  return {
    type: SET_MARGARET_STATUS,
    status
  }
}

export default main_reducer;