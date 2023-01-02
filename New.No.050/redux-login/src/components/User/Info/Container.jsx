import { connect } from "react-redux";
import InfoComponent from "./Component";
import store from "../../../modules/store";
import { action } from "../../../modules/userInfo";
import axios from "axios";

const InfoContainer = ({ userName }) => {
  const onClick = () => {
    const userId = store.getState().userInfo.userId;
    console.log(store.getState());
    // axios.post("http://localhost:8080/api/user/logout", {
    //   userId: userId,
    // });
    store.dispatch(action.logOut());
  };
  return <InfoComponent userName={userName} onClick={onClick}></InfoComponent>;
};

const mapStateToProps = (state, props) => {
  return {
    userName: state.userInfo.userName,
  };
};

export default connect(mapStateToProps)(InfoContainer);
