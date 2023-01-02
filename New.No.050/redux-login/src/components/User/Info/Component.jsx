import styled from "styled-components";

const InfoComponent = ({ userName, onClick }) => {
  return (
    <InfoBox>
      {userName ? `${userName} 님 어서오세요` : "로그인해주세요"}
      <button
        onClick={() => {
          onClick();
        }}
      >
        로그아웃
      </button>
    </InfoBox>
  );
};

export default InfoComponent;

const InfoBox = styled.div`
  padding: 50px;
  font-size: 1.2rem;
  font-weight: 600;
`;
