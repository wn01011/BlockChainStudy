import styled from "styled-components";
import AddBoard from "./AddBoard";
import List from "./List";

export default function BoardBox({ users, user }) {
  return (
    <BoardStyled>
      <AddBoard users={users} user={user}></AddBoard>
      <List users={users} user={user}></List>
    </BoardStyled>
  );
}

const BoardStyled = styled.div``;
