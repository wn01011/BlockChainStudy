import { useState } from "react";
import styled from "styled-components";
import store from "../../modules/store";
import dayjs from "dayjs";
import "dayjs/locale/ko";

const ListComponent = ({ onClick, userName, remove }) => {
  const [textInput, setTextInput] = useState("");
  const [titleInput, setTitleInput] = useState("");
  const [_, render] = useState(true);

  dayjs.locale("ko");

  return userName ? (
    <ListBox>
      <input
        type={"text"}
        placeholder={"제목을 입력해주세요"}
        value={titleInput}
        onInput={(e) => {
          setTitleInput(e.target.value);
        }}
      />
      <br />
      <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        value={textInput}
        onInput={(e) => {
          setTextInput(e.target.value);
        }}
        style={{ resize: "none", width: "80%", padding: "10px" }}
      ></textarea>
      <br />
      <button
        onClick={() => {
          if (textInput == "" || titleInput == "") return;
          setTextInput("");
          setTitleInput("");
          onClick({
            userId: store.getState().userInfo.userId,
            title: titleInput,
            context: textInput,
            time: Date.now(),
          });
        }}
      >
        등록하기
      </button>
      {store.getState().list?.map((item, index) => (
        <div key={`listBox-${index}`} style={{ display: "flex" }}>
          <div
            key={`list-${index}`}
            style={{ display: "flex", columnGap: "50px" }}
          >
            <span>userId : {item.userId}</span> |{" "}
            <span>title : {item.title}</span>
            {" | "}
            <span>context : {item.context}</span> |{" "}
            <span>
              time : {new dayjs(item.time).format("YY-MM-DD dddd HH:mm")}
            </span>{" "}
          </div>
          <button
            onClick={() => {
              remove(index);
              render((state) => !state);
            }}
          >
            삭제하기
          </button>
        </div>
      ))}
    </ListBox>
  ) : (
    <ListBox>로그인부터 해주세요</ListBox>
  );
};

export default ListComponent;

const ListBox = styled.div`
  padding: 5px;
  margin: 0 10px;
`;
