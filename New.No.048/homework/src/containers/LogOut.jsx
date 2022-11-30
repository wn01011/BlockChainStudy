import { useState } from "react";

import LogOutComp from "../components/LogOut";
import store from "../store";

const LogOutContainer = () => {
  const [_, render] = useState(true);

  const logOut = () => {
    store.dispatch({ type: "logIn/logIn", payload: { id: "", pw: "" } });
    render((state) => !state);
  };
  return <LogOutComp logOut={logOut} />;
};

export default LogOutContainer;
