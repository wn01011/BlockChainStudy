import styled from "styled-components";
import { TodoBtn } from "../../setting";
import { Link, useLocation } from "react-router-dom";
import pen from "./pen.png";
import trash from "./trash.png";
import { STATUSLIST } from "../../setting";

export default function Item({ item, index, list, setList, user }) {
  return (
    <ItemTr>
      <ItemTd>{index + 1}</ItemTd>
      <ItemTd>{item.taskName}</ItemTd>
      <ItemTd>
        <TodoBtn
          className={STATUSLIST[item.status].toLowerCase().replace(" ", "-")}
          style={{ cursor: "default" }}
        >
          {STATUSLIST[item.status]}
        </TodoBtn>
      </ItemTd>
      <ItemTd>
        <Link to={user.id ? "/edit" : ""} state={{ index, item }}>
          <TodoBtn className="sky">
            <img src={pen} alt="penImg" />
          </TodoBtn>
        </Link>
      </ItemTd>
      <ItemTd>
        <TodoBtn
          className="hotpink"
          onClick={() => {
            if (user.id) setList(list.filter((item, idx) => idx != index));
          }}
        >
          <img src={trash} alt="trashImg" />
        </TodoBtn>
      </ItemTd>
    </ItemTr>
  );
}

const ItemTr = styled.tr`
  text-align: center;
  td {
    border-bottom: 1px solid lightgrey;
    padding: 15px 0px;

    img {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 20px;
    }
  }
  & td div.sky {
    filter: invert(47%) sepia(28%) saturate(2974%) hue-rotate(161deg)
      brightness(95%) contrast(101%);
  }
  & td div.hotpink {
    filter: invert(65%) sepia(29%) saturate(4669%) hue-rotate(296deg)
      brightness(102%) contrast(105%);
  }
`;
const ItemTd = styled.td``;
