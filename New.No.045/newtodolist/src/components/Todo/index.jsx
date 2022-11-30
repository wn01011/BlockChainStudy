import styled from "styled-components";
import { Link, Route, Routes } from "react-router-dom";
import { TodoBtn } from "../setting";
import TodoModal from "./TodoModal";
// export 시 default 를 쓰지 않으면 {}를 사용해 구조분해 할당 형식으로 가져와야한다.
import List from "./List/index";
import { useState } from "react";

export default function Todo({ user }) {
  const [list, setList] = useState([
    { taskName: "asdf", status: 0 },
    { taskName: "asdf", status: 1 },
    { taskName: "asdf", status: 2 },
  ]);
  console.log(user);
  return (
    <div>
      <h1>Todo List</h1>
      <AddBtnBox>
        <Link to={user.id ? "add" : ""}>
          <TodoBtn className="sky">Add Task</TodoBtn>
        </Link>
      </AddBtnBox>
      <List list={list} setList={setList} user={user}></List>
      <Routes>
        <Route
          path={"add"}
          element={<TodoModal setList={setList}></TodoModal>}
        ></Route>
        <Route
          path={"edit"}
          element={<TodoModal setList={setList}></TodoModal>}
        ></Route>
      </Routes>
    </div>
  );
}

const AddBtnBox = styled.div`
  text-align: right;
`;
