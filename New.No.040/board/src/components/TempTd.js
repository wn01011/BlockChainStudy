export default function TempTd({ name, age, number, work, sendKey }) {
  if (sendKey === -1) {
    return (
      <>
        <th>{name}</th>
        <th>{age}</th>
        <th>{number}</th>
        <th>{work}</th>
      </>
    );
  } else {
    return (
      <>
        <td>{name}</td>
        <td>{age}</td>
        <td>{number}</td>
        <td>{work}</td>
      </>
    );
  }
}
