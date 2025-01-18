// src/styles/GlobalStyle.ts
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  /* Reset CSS */
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* Body 기본 스타일 */
  body {
    @font-face {
      font-family: 'S-CoreDream-3Light';
      src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/S-CoreDream-3Light.woff') format('woff');
      font-weight: normal;
      font-style: normal;
    }
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    font-family: 'S-CoreDream-3Light';
    line-height: 1.6;
  }

  /* 링크 기본 스타일 */
  a {
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }

  /* 리스트 스타일 제거 */
  ul, ol {
    list-style: none;
  }

  /* 버튼 초기화 */
  button {
    font: inherit;
    border: none;
    background: none;
    cursor: pointer;
  }
`;

export default GlobalStyle;
