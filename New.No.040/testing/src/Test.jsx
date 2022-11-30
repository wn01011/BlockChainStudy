import { useState } from "react";
import "./list.css";
export default function ({ test, children, value1 }) {
  //   console.log(value1, document.body);
  // props다. 나중에 다시 설명
  // HTML 문법 내에 Javascript 변수 / 함수 등등을 사용할 경우 {}로 묶어준다.
  //   console.log(children);
  //   [...children].forEach((item) => {
  //     if (item.props) console.log(item);
  //   });
  const h1 = <h1>안뇽하세영</h1>;

  // let count = 0;
  const [count1, setCount1] = useState(0);
  // props다. 나중에 다시 설명
  // props는 상위 컴포넌트에서 설정된 값이다.
  // props.children은 상위 컴포넌트에서 해당 컴포넌트의 자식으로 설정된 값이다.

  const [value, setValue] = useState("");
  const [list, setList] = useState([]);
  const [listCount, setListCount] = useState(0);

  function makeList() {
    return (
      <>
        <input
          value={value}
          onInput={(e) => {
            setValue(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.code != "Enter") return;
            setList([
              ...list,
              {
                id: listCount,
                value: value,
              },
            ]);
            setValue("");
            console.log(list);
            setListCount(listCount + 1);
          }}
        />
        <button
          onClick={() => {
            setValue("");
            list.push({
              id: listCount,
              value: value,
            });
            console.log(list);
            setListCount(listCount + 1);
          }}
        >
          Add
        </button>
        <ul>
          {/* {list.map((item) => (
            <li key={item.id}>
              {item.id} : {item.value}
              <button
                onClick={() => {
                  list = list.filter((elem) => elem.id != item.id);
                  setList(list);
                }}
              >
                Remove
              </button>
            </li>
          ))} */}
        </ul>
      </>
    );
  }

  return (
    <>
      <div>
        {h1}
        {/* {test}
        {children} */}
        {makeList()}
        {/* {list} */}
        {/* <button
          onClick={function () {
            setCount1(count1 + 1);
            console.log(count1);
          }}
        >
          {count1}
        </button> */}
      </div>
    </>
    // 빈 태그가 가능하다.
  );
  // HTML 태그의 형제 방식으로 return 하지 못한다. << 하나로 구조를 묶어서 return 해야한다.
  // HTML 문법 내에 Javascript 변수 / 함수 등등을 사용할 경우 {}로 묶어준다.
}

// Component란 여러개의 함수들을 모아 하나의 특정한 기능을 수행할 수 있도록 구성한 작은 기능적 단위
// React는 View를 위한 라이브러리 << Front End에 보여주기 위한 라이브러리 << 주 기능은 랜더링이다.
// << 기능은 div등등의 Element구조로 많이 나뉘어 진다.
