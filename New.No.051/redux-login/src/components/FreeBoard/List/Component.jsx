import styled from "styled-components";
import dayjs from "dayjs";
import "dayjs/locale/ko";
const ListComponent = ({ list, onClick }) => {
  dayjs.locale("ko");

  return (
    <ListBox>
      <colgroup>
        <col width={"10%"} />
        <col width={"50%"} />
        <col width={"20%"} />
        <col width={"20%"} />
      </colgroup>
      <thead>
        <tr>
          <th>index</th>
          <th>Title</th>
          <th>userName</th>
          <th>createdAt</th>
        </tr>
        {list.map((item, index) => (
          <tr
            key={`list-tr-${index}`}
            onClick={() => {
              onClick(item.id);
            }}
          >
            <td key={`list-td-id-${index}`}>{item.id}</td>
            <td key={`list-td-title-${index}`}>{item.title}</td>
            <td key={`list-td-userName-${index}`}>{item.userName}</td>
            <td key={`list-td-createdAt-${index}`}>
              {new dayjs(item.createdAt).format("YY.MM.DD dddd HH:mm")}
            </td>
          </tr>
        ))}
      </thead>
    </ListBox>
  );
};

export default ListComponent;

const ListBox = styled.table`
  width: 100%;
  text-align: center;
  border-collapse: collapse;
  white-space: nowrap;

  th {
    border-bottom: 1px solid black;
  }

  td {
    border-bottom: 1px dashed black;
  }
`;
