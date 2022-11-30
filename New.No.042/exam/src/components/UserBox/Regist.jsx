import { useEffect, useState } from "react";
import styled from "styled-components";

export default function Regist({ users, setUsers }) {
  const [userId, setId] = useState("");
  const [userPw, setPw] = useState("");
  const [ableId, setAbleId] = useState(false);
  const [ablePw, setAblePw] = useState(false);

  useEffect(() => {
    if (userId == undefined || userId == null) {
      setId("");
      return;
    }
    setId(userId ? userId : "");
    // a~z, A~Z 까지만 입력 가능하도록 한다.
    if (userId?.length < 5) {
      setAbleId(false);
    } else {
      setAbleId(true);
    }
  }, [userId]);
  useEffect(() => {
    if (userPw == undefined) setPw("");
    if (
      !userPw.match(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/
      )
    ) {
      setAblePw(false);
    } else {
      setAblePw(true);
    }
  }, [userPw]);

  function onRegist() {
    if (users.find((item) => item.userId === userId)) return;
    setUsers([...users, { userId, userPw }]);
    console.log(users);
    // setUsers((state) => [...state, { userId, userPw }]);
    // users.push({ userId, userPw }); //<< 적용은 되나 절대적으로 비추되는 방식이다.
    // setUsers(users);
  }

  return (
    <RegistBox>
      <input
        type="text"
        onInput={(e) => {
          setId(e.target.value);
        }}
        value={userId || ""}
        placeholder="ID"
      />
      <input
        type="password"
        onInput={(e) => {
          setPw(e.target.value);
        }}
        value={userPw || ""}
        placeholder="PW"
      />
      <button
        onClick={() => {
          if (!(ableId && ablePw)) return console.log(ableId, ablePw);
          onRegist();
          console.log(userId, userPw);
        }}
      >
        Regist
      </button>
    </RegistBox>
  );
}

const RegistBox = styled.div``;
