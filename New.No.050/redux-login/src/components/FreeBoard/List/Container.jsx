import { useSelector } from "react-redux";
import ListComponent from "./Component";
import { useNavigate, useLocation, useParams } from "react-router-dom";

const ListContainer = () => {
  const navigate = useNavigate();
  const tempId = useParams(useLocation());
  const list = useSelector((state) => state.board);
  const onClick = (id) => {
    if (tempId.id) navigate("/");
    else {
      const tempItem = list.find((item) => item.id == id);
      if (tempItem?.id) navigate(`/board/${id}`);
    }
  };
  return <ListComponent list={list} onClick={onClick} />;
};

export default ListContainer;
