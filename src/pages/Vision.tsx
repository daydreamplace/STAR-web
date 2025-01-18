import styled from "styled-components";

const Vision = () => {
  return (
    <Container>
      <div className="vision-content">
        <p>
          <strong>S T A R </strong>는 <strong>Screen Time Awareness & Regulation</strong>의 약자로, 사용자가 자신의
          디지털 기기 사용 습관을 인지하고 조절할 수 있도록 돕는 앱입니다.
        </p>
        <p>
          흩어진 집중력이 모여 별을 이루고, 그 별들이 연결되어 별자리를 이루는 여정을 통해 생산적이고 균형 잡힌 삶을
          지원합니다.
        </p>
      </div>
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

  .vision-content {
    font-size: 1.25rem;
    line-height: 1.8;
    color: ${({ theme }) => theme.colors.text};

    p {
      margin-bottom: 1rem;
    }

    strong {
      color: ${({ theme }) => theme.colors.tertiary};
    }
  }
`;

export default Vision;
