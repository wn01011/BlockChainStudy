import TempTr from "./TempTr";

export default function TempTable({ headData, tempArr, tempHead }) {
  return (
    <>
      <table>
        <thead>
          <TempTr key={-1} curKey={-1} tableData={headData}></TempTr>
        </thead>
        <tbody>
          {tempArr.map((item, index) => (
            <TempTr key={index} tableData={item} tableHead={tempHead}></TempTr>
          ))}
        </tbody>
      </table>
    </>
  );
}
