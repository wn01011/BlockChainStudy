import { useDispatch, useSelector } from "react-redux";
import { action } from "../../../modules/comment";
import CommentComponent from "./Component";

const CommentContainer = ({ userName, boardId }) => {
  const dispatch = useDispatch();
  const list = useSelector((state) =>
    state.comment.filter((item) => item.boardId == boardId)
  );
  const addOnClick = (text) => {
    dispatch(action.add(text, userName, boardId));
  };

  const editOnClick = (id, text) => {
    dispatch(action.edit(id, text));
  };

  const removeOnClick = (id) => {
    dispatch(action.remove(id));
  };

  return (
    <CommentComponent
      addOnClick={addOnClick}
      list={list}
      editOnClick={editOnClick}
      removeOnClick={removeOnClick}
      userName={userName}
    ></CommentComponent>
  );
};

export default CommentContainer;
