import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: 0.25s ease;
  }

  :root {
  --primary: ${({ theme }) => theme.primary};
  }
`;

export default GlobalStyle;
