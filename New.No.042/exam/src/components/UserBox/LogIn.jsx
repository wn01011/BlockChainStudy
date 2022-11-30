import { useEffect, useState } from "react";
import styled from "styled-components";

export default function LogIn({ users, user, setUser }) {
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
  useEffect(
    (props, state) => {
      if (
        !userPw.match(
          /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/
        )
      ) {
        setAblePw(false);
      } else {
        setAblePw(true);
        console.log(props, state);
      }
    },
    [userPw]
  );

  function onLogIn() {
    const tempUser = users?.find((item) => item.userId === userId);
    console.log(users, user, tempUser);
    if (tempUser && tempUser.userPw === userPw) {
      setUser(tempUser.userId);
      console.log(tempUser);
    }
    // setUsers((state) => [...state, { userId, userPw }]);
    // users.push({ userId, userPw }); //<< 적용은 되나 절대적으로 비추되는 방식이다.
    // setUsers(users);
  }

  return (
    <LogInBox>
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
          onLogIn();
          console.log(userId, userPw);
        }}
      >
        LogIn
      </button>
    </LogInBox>
  );
}

const LogInBox = styled.div``;
