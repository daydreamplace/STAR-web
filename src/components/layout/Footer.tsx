import { Link } from "react-router-dom";
import logo from "../../assets/star.png";
import styled from "styled-components";

const Footer = () => {
  return (
    <Layout>
      <div className="footer-content">
        <div className="footer-logo-text">
          <img src={logo} alt="logo" />
          <p>S T A R - Screen Time Awareness & Regulation © 2025 STARGAZERS Team. All rights reserved.</p>
        </div>
        <div className="footer-links">
          <Link to="/privacy">Privacy Policy</Link> | <Link to="/terms">Terms of Use</Link>
        </div>
      </div>
    </Layout>
  );
};

const Layout = styled.footer`
  position: relative;
  bottom: 0;
  width: 100%;
  padding: 1rem 0;

  .footer-content {
    display: flex;
    flex-direction: column;
    align-items: center;

    margin: 0 auto;
    font-size: 0.9rem;
    line-height: 1.5;
  }

  .footer-logo-text {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    text-align: center;

    img {
      height: 1.5rem;
    }

    p {
      margin: 0;
    }
  }

  .footer-links {
    margin-top: 0.5rem;
  }

  .footer-links a {
    color: ${({ theme }) => theme.colors.tertiary};
    text-decoration: none;
    margin: 0 0.5rem;
    font-size: 0.9rem;
    transition: color 0.3s ease;
  }

  .footer-links a:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }

  @media (max-width: 768px) {
    .footer-content {
      padding: 0 1rem;
      font-size: 0.8rem;
    }
  }
`;

export default Footer;
