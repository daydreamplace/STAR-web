import mainLogo from "../../assets/main-logo.png";
import styled from "styled-components";

const MainSection = () => {
  return (
    <Container>
      <h1>
        <img src={mainLogo} alt="logo" />
      </h1>
      <h2>Screen Time Awareness & Regulation, STAR</h2>
      <h3>별을 이루는 당신의 시간, STAR와 함께 빛나세요.</h3>
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

  h1 {
    font-size: 5rem;
    font-weight: 700;
    margin-bottom: 2rem;

    img {
      height: 10rem;
      margin-right: 0.5rem;
    }
  }
`;

export default MainSection;
