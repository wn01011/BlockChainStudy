import styled from "styled-components";
import { connect } from "react-redux";
import ListContainer from "./listContainer";

const ListComponent = ({ userName }) => {
  return (
    <ListBox>
      {userName != "" ? (
        <ListContainer userName={userName}></ListContainer>
      ) : (
        <div>로그인해주세요</div>
      )}
    </ListBox>
  );
};

const mapStateToProps = (state, props) => {
  return { userName: state.userInfo.userName };
};

export default connect(mapStateToProps)(ListComponent);

const ListBox = styled.div`
  border: 1px solid black;
  border-radius: 5px;
  padding: 10px;
  margin-top: 50px;
`;
