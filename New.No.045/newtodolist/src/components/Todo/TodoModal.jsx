import styled from "styled-components";
import { TodoBtn } from "../setting";
import { Link, useLocation } from "react-router-dom";
import { STATUSLIST, STATUS } from "../setting";
import { useState } from "react";

export default function TodoModal({ setList }) {
  const index = useLocation().state?.index;
  const item = useLocation().state?.item;
  const location = useLocation().pathname.replace("/", "");
  const [taskName, setTaskName] = useState(item ? item.taskName : "");
  const [status, setStatus] = useState(item ? item.status : STATUS.ToDo);

  return (
    <AddBox>
      <AddInnerBox>
        <div>
          <input
            placeholder="Task Name"
            value={taskName}
            onInput={(e) => {
              setTaskName(e.target.value);
            }}
          />
        </div>
        <div>
          {STATUSLIST.map((item, index) => {
            return (
              <TodoBtn
                className={
                  STATUSLIST[index].toLowerCase().replace(" ", "-") +
                  (status === index ? " on" : "")
                }
                key={`TodoBtn-${index}`}
                onClick={() => {
                  setStatus(index);
                }}
              >
                {item}
              </TodoBtn>
            );
          })}
        </div>
        <div>
          <Link to={"/"}>
            <TodoBtn
              onClick={() => {
                if (location == "add")
                  setList((state) => [...state, { taskName, status }]);
                else {
                  setList((list) => {
                    const before = list.slice(0, index);
                    const after = list.slice(index + 1);
                    return [...before, { taskName, status }, ...after];
                  });
                }
              }}
            >
              {location.toUpperCase()}
            </TodoBtn>
          </Link>
          <Link to={"/"}>
            <TodoBtn>Cancel</TodoBtn>
          </Link>
        </div>
      </AddInnerBox>
    </AddBox>
  );
}

const AddBox = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AddInnerBox = styled.div`
  padding: 30px 60px;
  background-color: #fff;
  border-radius: 15px;
  width: 40%;

  input {
    width: 100%;
    padding: 5px 10px;
  }

  & > div {
    margin: 10px 0;
    display: flex;
    justify-content: space-evenly;
    &:last-child {
      justify-content: space-between;
    }
  }
`;
