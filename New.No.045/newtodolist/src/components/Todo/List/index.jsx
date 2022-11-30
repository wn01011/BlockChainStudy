import Item from "./Item";
import styled from "styled-components";
export default function List({ list, setList, user }) {
  return (
    <ListTable>
      <thead>
        <tr>
          <th>#</th>
          <th>Task Name</th>
          <th>Status</th>
          <th>Edit</th>
          <th>Remove</th>
        </tr>
      </thead>
      <tbody>
        {list.map((item, index) => (
          <Item
            key={`item-${index}`}
            item={item}
            index={index}
            list={list}
            setList={setList}
            user={user}
          />
        ))}
      </tbody>
    </ListTable>
  );
}

const ListTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  th {
    border-bottom: 1px solid black;
  }
`;
