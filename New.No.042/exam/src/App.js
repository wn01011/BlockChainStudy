import { useEffect, useState } from "react";
import styled from "styled-components";
import BoardBox from "./components/BoardBox";
import UserBox from "./components/UserBox";

function App() {
  const [users, setUsers] = useState([
    { userId: "abcde" },
    { userId: "abcdsaf" },
  ]);
  const [user, setUser] = useState("");

  useEffect(() => {
    console.log(user, users);
  }, [user, users]);

  return (
    <AppBox>
      <UserBox
        users={users}
        user={user}
        setUsers={setUsers}
        setUser={setUser}
      />
      <BoardBox users={users} user={user} />
    </AppBox>
  );
}

const AppBox = styled.div``;
export default App;
