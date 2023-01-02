import { useSelector, useDispatch } from "react-redux";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import BoardComponent from "./Component";
import CommentContainer from "../Comment/Container";
import { action } from "../../../modules/board";
// 페이징 할땐 queryString 유저정보는 useParams
const BoardContainer = () => {
  const dispatch = useDispatch();
  const { id } = useParams(useLocation());
  const navigate = useNavigate();
  const item = useSelector((state) =>
    state.board.find((item) => item.id == id)
  );
  const userName = useSelector((state) => state.userInfo.userName);

  const remove = () => {
    dispatch(action.remove(item.id));
    navigate("/");
  };
  console.log("boardContainer", item);
  if (!item) navigate("/");

  return (
    <>
      <BoardComponent
        item={item}
        remove={remove}
        isCreator={userName == item.userName}
      />
      <CommentContainer userName={userName} boardId={id} />
    </>
  );
};

export default BoardContainer;
