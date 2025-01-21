import styled from "styled-components";

const Privacy = () => {
  return (
    <Container>
      <h1>Privacy Policy</h1>
      <p>추후 내용이 추가될 예정입니다.</p>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100dvh;
  z-index: 0;

  h1 {
    margin-bottom: 20px;
    font-size: 24px;
    font-weight: bold;
    text-align: center;
  }

  p {
    color: ${({ theme }) => theme.colors.tertiary};
    font-size: 16px;
    line-height: 1.5;
    text-align: center;
  }
`;

export default Privacy;
