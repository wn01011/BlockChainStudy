import { useDispatch } from "react-redux";
import RegistComponent from "./Component";
import { action } from "../../../modules/userDB";
import store from "../../../modules/store";
import axios from "axios";

const RegistContainer = () => {
  const dispatch = useDispatch();

  const onClick = (userId, userPw, userName) => {
    store.dispatch(action.regist(userId, userPw, userName));
    // axios.post("http://localhost:8080/api/user/regist", {
    //   userId,
    //   userPw,
    //   userName,
    // });
  };

  return <RegistComponent onClick={onClick}></RegistComponent>;
};

export default RegistContainer;
