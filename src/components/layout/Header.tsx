import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import logo from "../../assets/star.png";
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
        <NavLink to="/vision">Vision</NavLink>
        <NavLink to="/feature">Feature</NavLink>
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
    height: 2.75rem;
    width: auto;
    cursor: pointer;
  }

  nav {
    display: flex;
    gap: 2rem;

    a {
      color: ${({ theme }) => theme.colors.text};
      &:hover {
        opacity: 0.7;
      }
    }
  }
`;

export default Header;
