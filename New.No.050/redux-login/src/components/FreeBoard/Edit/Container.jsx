import { useLocation, useNavigate, useParams } from "react-router-dom";
import EditComponent from "./Component";
import { action } from "../../../modules/board";
import { useDispatch, useSelector } from "react-redux";

const EditContainer = () => {
  const { id } = useParams(useLocation());
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const item = useSelector((state) =>
    state.board.find((item) => item.id == id)
  );
  console.log(item);
  const onClick = (title, text) => {
    dispatch(action.edit(id, title, text));
    navigate(`/board/${id}`);
  };

  return <EditComponent onClick={onClick} item={item} />;
};

export default EditContainer;
