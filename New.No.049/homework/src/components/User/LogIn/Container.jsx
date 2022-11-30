import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

import LogInComponent from "./Component";
import store from "../../../modules/store";
import { action } from "../../../modules/userInfo";
import { useEffect } from "react";
const LogInContainer = ({ userName }) => {
  const navigate = useNavigate(); //location.href와 같은 훅이다.
  const onClick = (userId, userPw) => {
    store.dispatch(action.logIn(userId, userPw, store.getState().userDB));
  };

  useEffect(() => {
    if (userName) navigate("/");
  }, [userName]);

  return <LogInComponent onClick={onClick}></LogInComponent>;
};

const mapStateToProps = (state, props) => {
  return {
    userName: state.userInfo.userName,
  };
};

export default connect(mapStateToProps)(LogInContainer);
