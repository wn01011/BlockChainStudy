import { Outlet } from "react-router-dom";

function Log() {
  return (
    <div>
      Log <Outlet></Outlet>
    </div>
  );
}

export default Log;
