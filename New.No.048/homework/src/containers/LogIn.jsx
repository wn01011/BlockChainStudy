import { useState } from "react";

import LogInComp from "../components/LogIn";
import { action } from "../modules/logIn";
import store from "../store";

const LogInContainer = () => {
  const [_, render] = useState(true);

  const logIn = (user) => {
    store.dispatch(action.logIn(user));
    render((state) => !state);
  };

  const logOut = () => {
    store.dispatch(action.logOut());
    render((state) => !state);
  };

  return <LogInComp logIn={logIn} logOut={logOut} />;
};

export default LogInContainer;
