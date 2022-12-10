import {connect} from "react-redux";
import Login from "./login";
import {TakeOpenDavid, TakeOpenMargaret} from "../../api/thunk_auth";
let mapStateToProps = state => {
  return {

  }
}
export default connect(mapStateToProps, {TakeOpenMargaret, TakeOpenDavid})(Login)