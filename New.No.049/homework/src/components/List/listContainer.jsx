import { action } from "../../modules/list";
import store from "../../modules/store";
import ListComponent from "./listComponent";

const ListContainer = ({ userName }) => {
  const onClick = ({ userId, title, context, time }) => {
    store.dispatch(action.regist({ userId, title, context, time }));
  };
  const remove = (index) => {
    store.dispatch(action.remove(index));
  };
  return (
    <ListComponent
      onClick={onClick}
      userName={userName}
      remove={remove}
    ></ListComponent>
  );
};

export default ListContainer;
