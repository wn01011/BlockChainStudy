import styled from "styled-components";
import Regist from "./Regist";
import LogIn from "./LogIn";
import LogOut from "./LogOut";
import { useEffect } from "react";

export default function UserBox({ users, user, setUsers, setUser }) {
  return (
    <UserStyled>
      <Regist users={users} setUsers={setUsers}></Regist>
      <LogIn users={users} user={user} setUser={setUser}></LogIn>
      <LogOut user={user} setUser={setUser}></LogOut>
    </UserStyled>
  );
}

const UserStyled = styled.div``;
