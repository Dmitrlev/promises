import {connect} from "react-redux";
import Main from "./main/main";
import {TakeStatusDavid, TakeStatusMargaret, ThunkMe, ThunkUpdateStatus} from "../../api/thunk_auth";
import {changeIsEdit} from "../../redux/main_reducer";

let mapStateToProps = (state) => {
  return {
    isEdit: state.main.isEdit,
    status: state.main.status,
    id: state.main.id,
  }
}

export default  connect(mapStateToProps, {ThunkMe, ThunkUpdateStatus, TakeStatusDavid, TakeStatusMargaret,
  changeIsEdit})(Main)

