import styled from "styled-components";
import { useState } from "react";

const AddComponent = ({ onClick }) => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  return (
    <AddBox>
      <input
        type={"text"}
        placeholder="Title"
        value={title}
        onInput={(e) => {
          setTitle(e.target.value);
        }}
      />
      <br />
      <textarea
        cols="30"
        rows="10"
        placeholder="Text"
        value={text}
        onInput={(e) => {
          setText(e.target.value);
        }}
      ></textarea>
      <br />
      <button
        onClick={() => {
          onClick(title, text);
        }}
      >
        Add Board
      </button>
    </AddBox>
  );
};

export default AddComponent;

const AddBox = styled.div`
  textarea {
    resize: none;
  }
`;
