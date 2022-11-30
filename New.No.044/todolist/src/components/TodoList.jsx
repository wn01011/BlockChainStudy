import styled from "styled-components";
import List from "./List";
import Input from "./Input";
import React from "react";
import { useState } from "react";

export default function TodoListFunc() {
  const [list, setList] = useState(["123", "234", "345"]);

  const curList = (
    <StyledList>
      <Input list={list} setList={setList}></Input>
      <List list={list} setList={setList}></List>
    </StyledList>
  );
  return curList;
}

const StyledList = styled.div`
  width: 80%;
  background-color: grey;
  border-radius: 15px;
`;
