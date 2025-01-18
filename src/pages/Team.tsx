import star from "../assets/star.png";
import styled from "styled-components";

const teamMembers = [
  { name: "Eden", github: "https://github.com/daydreamplace" },
  { name: "Glass", github: "https://github.com/AhnJunGyung" },
  { name: "Jerry", github: "https://github.com/0-jerry" },
  { name: "Maccha", github: "https://github.com/DoyleHWorks" },
  { name: "Mun", github: "https://github.com/name-mun" },
];

const Team = () => {
  const sortedMembers = teamMembers.sort((a, b) => a.name.localeCompare(b.name));

  return (
    <Container>
      <ul className="team-list">
        {sortedMembers.map((member) => (
          <li key={member.name}>
            <a href={member.github} target="_blank" rel="noopener noreferrer">
              {member.name}
            </a>
          </li>
        ))}
      </ul>
      <div className="team-intro">
        <p>
          비전과 열정이 있는 개발자 팀 <strong>Stargazers</strong>는 디지털 웰빙에 대한 깊은 관심과 기술적 전문성을
          바탕으로 시작되었습니다.
        </p>
        <div className="team-info">
          <img src={star} alt="star" />
          <p>
            관련 문의는
            <strong>
              <a href="mailto:sambanghangyetang@gmail.com"> Stargazers</a>
            </strong>
            로 연락하세요.
          </p>
        </div>
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

  strong {
    color: ${({ theme }) => theme.colors.tertiary};

    a {
      color: inherit;

      &:hover {
        color: ${({ theme }) => theme.colors.textHover};
      }
    }
  }

  .team-list {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 2rem;
    gap: 2.5rem;
    padding: 0;
    list-style: none;
    color: ${({ theme }) => theme.colors.text};
    font-size: 2rem;

    li {
      margin-bottom: 1rem;

      a {
        color: ${({ theme }) => theme.colors.tertiary};
        text-decoration: none;

        &:hover {
          color: ${({ theme }) => theme.colors.textHover};
        }
      }
    }
  }

  .team-intro {
    margin-bottom: 2rem;
    color: ${({ theme }) => theme.colors.text};
    font-size: 1.25rem;
    line-height: 1.8;

    .team-info {
      display: flex;
      align-items: center;

      img {
        height: 2.575rem;
      }
    }
  }
`;

export default Team;
