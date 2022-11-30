import { useState } from "react";

const RegistComp = ({ regist }) => {
  const [inputUser, setInputUser] = useState({ id: "", pw: "" });

  return (
    <>
      <div>RegistComp</div>
      <input
        type="text"
        value={inputUser.id}
        placeholder={"id를 입력해주세요"}
        onInput={(e) => {
          setInputUser((state) => ({ id: e.target.value, pw: state.pw }));
        }}
      />
      <input
        type="text"
        value={inputUser.pw}
        placeholder={"pw를 입력해주세요"}
        onInput={(e) => {
          setInputUser((state) => ({ id: state.id, pw: e.target.value }));
        }}
      />
      <button
        onClick={() => {
          regist(inputUser);
        }}
      >
        회원가입
      </button>
    </>
  );
};

export default RegistComp;
