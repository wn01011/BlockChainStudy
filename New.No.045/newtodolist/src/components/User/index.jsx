import styled from "styled-components";
import { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
export default function User({ user, setUser, userList, setUserList }) {
  const [inputUser, setInputUser] = useState({ id: "", pw: "" });
  const curUserDiv =
    user.id != undefined ? (
      <div>{user.id}님 환영합니다.</div>
    ) : (
      <div>로그인해주세요</div>
    );
  const [classOn, setClassOn] = useState("on");
  const [classOff, setClassOff] = useState("");
  return (
    <>
      <UserBox>
        <div>
          <StyledInput
            className={classOn}
            placeholder="아이디"
            onInput={(e) => {
              setInputUser({ id: e.target.value, pw: inputUser.pw });
            }}
            value={inputUser.id}
          />
          <StyledInput
            className={classOn}
            placeholder="비번"
            onInput={(e) => {
              setInputUser({ id: inputUser.id, pw: e.target.value });
            }}
            value={inputUser.pw}
          />
        </div>
        <div>
          <StyledBtn
            className={classOn}
            onClick={() => {
              if (inputUser.id == "" || inputUser.pw == "") return;
              let canLogin = false;
              for (let i = 0; i < userList.length; ++i) {
                if (
                  userList[i].id == inputUser.id &&
                  userList[i].pw == inputUser.pw
                )
                  canLogin = true;
              }
              if (!canLogin) return;
              setUser(inputUser);
              setClassOn("");
              setClassOff("on");
            }}
          >
            로그인
          </StyledBtn>
          <StyledBtn
            className={classOff}
            onClick={() => {
              setUser({ id: undefined, pw: undefined });
              setInputUser({ id: "", pw: "" });
              setClassOn("on");
              setClassOff("");
            }}
          >
            로그아웃
          </StyledBtn>
          <StyledBtn
            className={classOn}
            onClick={() => {
              setUserList([...userList, inputUser]);
            }}
          >
            회원가입
          </StyledBtn>
        </div>
      </UserBox>
      {curUserDiv}
    </>
  );
}

const StyledInput = styled.input`
  display: none;
  &.on {
    display: inline-block;
  }
`;
const StyledBtn = styled.button`
  display: none;
  &.on {
    display: inline-block;
  }
`;
const UserBox = styled.div`
  padding: 50px 0;
  display: flex;
  justify-content: end;
  column-gap: 100px;
`;
