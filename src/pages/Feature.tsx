import styled from "styled-components";

const Feature = () => {
  return (
    <Container>
      <ul className="features-list">
        <li>
          <strong>Star - Your Digital Time Management Unit</strong>
          <ul>
            <li>Users can create and manage multiple Stars.</li>
            <li>A Star functions as a single session, having a name, a list of apps to block, active times, and designated days of the week.</li>
          </ul>
        </li>
        <li>
          <strong>Manage Stars</strong>
          <ul>
            <li>Users can view and add Stars from the Stars list.</li>
            <li>Existing Stars can be selected to modify their settings.</li>
          </ul>
        </li>
        <li>
          <strong>Switch to Break Mode</strong>
          <ul>
            <li>Even while a Star is active, users can temporarily disable the Screen Time feature for up to 20 minutes.</li>
            <li>A user-friendly flow encourages a balanced digital lifestyle.</li>
          </ul>
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
    padding: 0 1.5rem;
    font-size: 0.9rem;
    line-height: 1.5;
    color: ${({ theme }) => theme.colors.text};

    li {
      margin-bottom: 1rem;
      position: relative;
      padding-left: 1.2rem;

      &::before {
        content: "★";
        position: absolute;
        left: 0;
        color: ${({ theme }) => theme.colors.tertiary};
        font-size: 0.9rem;
        line-height: 1.2;
      }

      strong {
        color: ${({ theme }) => theme.colors.tertiary};
        font-size: 1rem;
        display: block;
        margin-bottom: 0.4rem;
      }

      ul {
        list-style: none;
        padding-left: 0.8rem;

        li {
          padding-left: 0;
          font-size: 0.85rem;
          margin-bottom: 0.4rem;
          &::before {
            content: "-";
            position: absolute;
            left: 0.8rem;
            color: ${({ theme }) => theme.colors.text};
            font-size: 0.85rem;
          }
        }
      }
    }
  }
`;

export default Feature;
