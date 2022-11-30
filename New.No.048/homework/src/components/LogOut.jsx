import { useState } from "react";
import store from "../store";

const LogOutComp = ({ logOut }) => {
  const [_, render] = useState(true);
  const [on, setOn] = useState("");
  return (
    <div>
      LogOutComp

    </div>
  );
};

export default LogOutComp;
