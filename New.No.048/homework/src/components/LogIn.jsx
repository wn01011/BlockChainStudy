import { useState } from "react";

import store from "../store";
const LogInComp = ({ logIn, logOut }) => {
  const [inputUser, setInputUser] = useState({ id: "", pw: "" });
  const [_, render] = useState(true);
  const [on, setOn] = useState("");
  const [curUser, setCurUser] = useState({ id: "", pw: "" });
  return (
    <div>
      LogInComp
      <div>
        <input
          type="text"
          placeholder="로그인 아이디 입력"
          onInput={(e) => {
            setInputUser((state) => ({ id: e.target.value, pw: state.pw }));
          }}
        />
        <input
          type="text"
          value={inputUser.pw}
          placeholder={"비밀번호를 입력해주세요"}
          onInput={(e) => {
            setInputUser((state) => ({ id: state.id, pw: e.target.value }));
          }}
        />
        <button
          className={on}
          onClick={() => {
            logIn(inputUser);
            setCurUser(store.getState().logIn);
            const result = store.getState().regist.find((item) => {
              return curUser.id == item.id && curUser.pw == item.pw;
            });
            render((state) => !state);
            // if (result) {
            //   setOn("");
            // } else {
            //   setOn("on");
            // }
            console.log(curUser.id);
          }}
        >
          로그인
        </button>
        <button
          className={on}
          onClick={() => {
            logOut();
            setCurUser(store.getState().logIn);
            console.log(store.getState().logIn);
            // setOn("on");
            render((state) => !state);
          }}
        >
          로그아웃
        </button>
        <div>
          {curUser.id != "" ? `${curUser.id}님 환영합니다` : `로그인해주세요`}
        </div>
      </div>
    </div>
  );
};

export default LogInComp;
