import styled from "styled-components";
import { Link } from "react-router-dom";

import dayjs from "dayjs";
import "dayjs/locale/ko";

const BoardComponent = ({ item, remove, isCreator }) => {
  dayjs.locale("ko");
  return (
    <BoardBox>
      <h1>{item.title}</h1>
      <h3>
        userName : {item.userName} -{" "}
        {dayjs(item.createdAt).format("YY.MM.DD dddd HH:mm")}
        <span>
          {isCreator ? (
            <>
              <Link to={`/edit/${item.id}`}>
                <button>Edit</button>
              </Link>
              <button
                onClick={() => {
                  remove();
                }}
              >
                Delete
              </button>
            </>
          ) : (
            <></>
          )}
        </span>
      </h3>
      <p>{item.text}</p>
    </BoardBox>
  );
};

export default BoardComponent;

const BoardBox = styled.div``;
