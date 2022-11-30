import { useEffect } from "react";
import { useContext, useState } from "react";
import { OfficeContext } from "./ReducerTest";

export default function Office() {
  const { result, requestDispatch } = useContext(OfficeContext);
  const [balance, setBalance] = useState(10000);
  const [pay, setPay] = useState(500);

  return (
    <>
      <div
        className="office"
        onClick={() => {
          requestDispatch({
            type: "건축물대장",
            // 어떠한 작업을 할 것인가?
            payload: {
              // 작업에 필요한 데이터
              identityCard: "주민등록증",
              pay: { pay },
            },
          });
        }}
      >
        {result}
      </div>
    </>
  );
}
