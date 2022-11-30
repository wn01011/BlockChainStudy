import styled from "styled-components";
import { useState } from "react";

export default function Input({ setList, list }) {
  const [value, setValue] = useState("");
  const InputBox = (
    <>
      <input
        onInput={(e) => {
          console.log(e.target.value);
          setValue(e.target.value);
        }}
        value={value}
      ></input>
      <button
        onClick={(e) => {
          setList([...list, value]);
          setValue("");
        }}
      >
        ADD
      </button>
    </>
  );
  return InputBox;
}
