import styled from "styled-components";

// export default 는 파일 하나당 하나만 가능하다.
// default를 쓰지 않으면 {}를 사용해 구조분해 할당 형식으로 가져와야한다.
// export는 여러개를 내보낼 수 있다.
export const TodoBtn = styled.div`
  display: inline-block;
  border: 1px solid black;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
  color: black;
  &.todo {
    color: grey;
    border-color: grey;
  }
  &.in-progress {
    color: orange;
    border-color: orange;
  }
  &.complete {
    color: green;
    border-color: green;
  }
  &.sky {
    filter: invert(47%) sepia(28%) saturate(2974%) hue-rotate(161deg)
      brightness(95%) contrast(101%);
  }
  &.hotpink {
    filter: invert(65%) sepia(29%) saturate(4669%) hue-rotate(296deg)
      brightness(102%) contrast(105%);
  }
  &.on {
    color: black;
    &.todo {
      background-color: grey;
    }
    &.in-progress {
      background-color: orange;
    }
    &.complete {
      background-color: green;
    }
    &.sky {
      background-color: #0dcaf0;
    }
  }
`;

export const STATUS = { ToDo: 0, InProgress: 1, Complete: 2 };
export const STATUSLIST = ["ToDo", "In Progress", "Complete"];
