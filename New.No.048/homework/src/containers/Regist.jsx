import { useState } from "react";
import RegistComp from "../components/Regist";
import { connect } from "react-redux";
import { action } from "../modules/regist";
import store from "../store";

const RegistContainer = () => {
  console.log(store.getState().regist);
  const [_, render] = useState(true);

  const regist = (user) => {
    store.dispatch(action.regist(user));
    render((state) => !state);
  };
  return <RegistComp regist={regist} />;
};

// const mapStateToProps = (state, props) => {
//   return { user: state.user, ...props };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     regist: (user) => {
//       dispatch(action.regist(user));
//     },
//   };
// };

export default RegistContainer;
