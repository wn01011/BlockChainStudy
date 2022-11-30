import { useState } from "react";
import styled from "styled-components";
import Todo from "./components/Todo";
import User from "./components/User";

function App() {
  const [user, setUser] = useState({ id: undefined, pw: undefined });
  const [userList, setUserList] = useState([]);
  // 오늘의 과제

  return (
    <AppBox className="">
      <User
        user={user}
        setUser={setUser}
        userList={userList}
        setUserList={setUserList}
      ></User>
      <Todo user={user}></Todo>
    </AppBox>
  );
}

export default App;

const AppBox = styled.div`
  max-width: 1300px;
  margin: auto;
  &.test {
    background-color: lightgrey;
    height: 100px;
  }

  @media only screen and (max-width: 1400px) {
    max-width: 1000px;
  }
  @media only screen and (max-width: 1100px) {
    max-width: 600px;
  }
  @media only screen and (max-width: 700px) {
    max-width: 300px;
  }
`;
