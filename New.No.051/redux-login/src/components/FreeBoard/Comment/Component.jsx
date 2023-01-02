import { useState } from "react";
import styled from "styled-components";

const CommentComponent = ({
  addOnClick,
  list,
  editOnClick,
  removeOnClick,
  userName,
}) => {
  const [addText, setAddText] = useState("");
  return (
    <CommentBox>
      <CommentAddBox>
        <input
          type="text"
          value={addText}
          onInput={(e) => {
            setAddText(e.target.value);
          }}
          placeholder={"Comment"}
        />
        <button
          onClick={() => {
            addOnClick(addText);
          }}
        >
          Add Comment
        </button>
      </CommentAddBox>
      {list.map((item, index) => (
        <CommentItemComponent
          key={`comment-${index}`}
          item={item}
          editOnClick={editOnClick}
          removeOnClick={removeOnClick}
          userName={userName}
        ></CommentItemComponent>
      ))}
    </CommentBox>
  );
};

export default CommentComponent;

const CommentBox = styled.div``;
const CommentAddBox = styled.div``;
const CommentItemComponent = ({
  item,
  editOnClick,
  removeOnClick,
  userName,
}) => {
  const [isEdit, setIsEdit] = useState(false);
  const [editText, setEditText] = useState(item.text);
  console.log(userName, item);
  return (
    <div>
      {isEdit ? (
        <input
          type="text"
          value={editText}
          onInput={(e) => {
            setEditText(e.target.value);
          }}
        />
      ) : (
        item.text
      )}{" "}
      {userName == item.userId ? (
        <>
          {" "}
          - {item.userName} [
          <button
            onClick={() => {
              if (isEdit) {
                editOnClick(item.id, editText);
                setIsEdit(false);
              } else {
                setIsEdit(true);
                setEditText(item.text);
              }
            }}
          >
            Edit
          </button>{" "}
          <button
            onClick={() => {
              isEdit ? setIsEdit(false) : removeOnClick(item.id);
            }}
          >
            {isEdit ? "Cancel" : "Remove"}
          </button>
          ]
        </>
      ) : (
        <></>
      )}
    </div>
  );
};
