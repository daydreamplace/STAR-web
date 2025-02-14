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
    @font-face {
      font-family: 'SEBANG_Gothic_Bold';
      src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2104@1.0/SEBANG_Gothic_Bold.woff') format('woff');
      font-weight: normal;
      font-style: normal;
  }
    background: linear-gradient( to left,
      ${({ theme }) => theme.colors.background},
      ${({ theme }) => theme.colors.primary}
    );
    color: ${({ theme }) => theme.colors.text};
    font-family: 'S-CoreDream-3Light';
    line-height: 1.6;
  }

  /* 링크 기본 스타일 */
  a {
    text-decoration: none;
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

  .star-text{
    font-family: 'SEBANG_Gothic_Bold';
  }
`;

export default GlobalStyle;
