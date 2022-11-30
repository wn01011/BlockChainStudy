import { Outlet } from "react-router-dom";

function Log() {
  return (
    <div>
      Log
      <Outlet />
      {/* 하위 라우터들을 어디서 출력할지 위치를 결정함 */}
    </div>
  );
}

export default Log;
