import mainLogo from "../../assets/star.png";
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
    img {
      width: 50rem;
    }
  }

  h2 {
    font-size: 2rem;
    margin: 1.75rem 0;
  }
  h3 {
    font-size: 1rem;
  }
`;

export default MainSection;
