import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import logo from "../../assets/text_logo.png";
import styled from "styled-components";

const Header = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  };

  return (
    <Layout>
      <img src={logo} alt="logo" onClick={goToHome} />
      <nav>
        <NavLink to="/vision" className="star-text">
          V i s i o n
        </NavLink>
        <NavLink to="/feature" className="star-text">
          F e a t u r e
        </NavLink>
        <NavLink to="/team" className="star-text">
          T e a m
        </NavLink>
      </nav>
    </Layout>
  );
};

const Layout = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  color: white;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;

  img {
    height: 3.25rem;
    width: auto;
    cursor: pointer;
  }

  nav {
    display: flex;
    gap: 2rem;

    a {
      margin-top: 0.5rem;
      color: ${({ theme }) => theme.colors.text};
      font-weight: 700;

      &:hover {
        opacity: 0.7;
      }
    }
  }
`;

export default Header;
