import styled from "styled-components";

const Feature = () => {
  return (
    <Container>
      <ul className="features-list">
        <li>
          <strong>스크린타임 데이터 통계 및 분석:</strong> 일일, 주간, 월간 사용 패턴 확인.
        </li>
        <li>
          <strong>목표 기반 관리:</strong> 사용자 지정 목표와 경고 알림 기능.
        </li>
        <li>
          <strong>별자리 언락 시스템:</strong> 성취를 통해 별자리 모으기.
        </li>
        <li>
          <strong>디지털 웰빙 팁 제공:</strong> 생산적인 시간 활용을 위한 맞춤형 조언.
        </li>
      </ul>
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

  .features-list {
    list-style: none;
    padding: 0;
    font-size: 1.5rem;
    line-height: 1.8;
    color: ${({ theme }) => theme.colors.text};

    li {
      margin-bottom: 1rem;
      position: relative;
      padding-left: 1.5rem;

      &::before {
        content: "★";
        position: absolute;
        left: 0;
        color: ${({ theme }) => theme.colors.tertiary};
        font-size: 1.2rem;
        line-height: 1.5;
      }

      strong {
        color: ${({ theme }) => theme.colors.tertiary};
      }
    }
  }
`;

export default Feature;
