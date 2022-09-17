import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    background-color: #f5f5f5;
    font-family: 'PingFang SC', -apple-system, 'Segoe UI', 'Microsoft YaHei',
      sans-serif;
    overflow: auto;
  }

  #root {
    height: 100%;
  }
`;

export default GlobalStyle;
