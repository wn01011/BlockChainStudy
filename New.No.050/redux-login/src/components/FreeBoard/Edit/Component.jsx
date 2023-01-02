import { useState } from "react";
import styled from "styled-components";

const EditComponent = ({ onClick, item }) => {
  const [title, setTitle] = useState(item.title);
  const [text, setText] = useState(item.text);
  return (
    <EditBox>
      <h1>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onInput={(e) => {
            setTitle(e.target.value);
          }}
        />
      </h1>
      <h3>userName :</h3>
      <p>
        <textarea
          type="text"
          id=""
          cols="30"
          rows="10"
          placeholder="Text"
          value={text}
          onInput={(e) => {
            setText(e.target.value);
          }}
        ></textarea>
      </p>
      <button
        onClick={() => {
          onClick(title, text);
        }}
      >
        Edit
      </button>
    </EditBox>
  );
};

export default EditComponent;

const EditBox = styled.div`
  textarea {
    resize: none;
  }
`;
