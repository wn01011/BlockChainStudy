import { useState, useCallback } from "react";

export default function List({ users, user }) {
  console.log(users);
  return (
    <>
      <div>
        {users.map((item, index) => {
          console.log(item);
          return (
            <div
              key={index}
              style={{
                width: "100%",
                height: "50px",
                backgroundColor: "lightgrey",
                border: "1px solid black",
              }}
            >{`${item.userId}`}</div>
          );
        })}
      </div>
    </>
  );
}
