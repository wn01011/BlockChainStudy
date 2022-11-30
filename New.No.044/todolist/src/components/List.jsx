import styled from "styled-components";
import { useState } from "react";

export default function List({ list, setList }) {
  const [inputValue, setInputValue] = useState("");
  const curList = list.map((item, index) => {
    return (
      <StyleDiv key={index}>
        {item}
        <input
          type="text"
          onInput={(e) => {
            setInputValue(e.target.value);
          }}
          value={inputValue}
        />
        <button onClick={(e) => {}}>수정</button>
        <button
          onClick={() => {
            setList(
              list.filter((_, idx) => {
                return index !== idx;
              })
            );
          }}
        >
          삭제
        </button>
      </StyleDiv>
    );
  });
  return curList;
}

const StyleDiv = styled.div`
  width: 100%;
  height: 30px;
  background-color: lightgrey;
`;
