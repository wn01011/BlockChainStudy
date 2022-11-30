import TempTd from "./TempTd.js";
export default function TempTr({ tableData, tableHead, curKey }) {
  if (curKey === -1) {
    return (
      <>
        <tr>
          <TempTd
            name={tableData.name}
            age={tableData.age}
            number={tableData.number}
            work={tableData.work}
            sendKey={-1}
          ></TempTd>
        </tr>
      </>
    );
  } else {
    return (
      <>
        <tr>
          <TempTd
            name={tableData.name}
            age={tableData.age}
            number={tableData.number}
            work={tableData.work}
          ></TempTd>
        </tr>
        {/* <tr>
            {tableHead.map((item) => {
              <TempTd item={tableData[item]}></TempTd>;
            })}
          </tr> */}
      </>
    );
  }
}
