import { Route, Routes } from "react-router-dom";
import In from "./In";
import Out from "./Out";

function Log() {
  return (
    <div>
      Log
      <Routes>
        <Route path="in/:id" element={<In />}></Route>
        <Route path="out" element={<Out />}></Route>
      </Routes>
    </div>
  );
}

export default Log;
