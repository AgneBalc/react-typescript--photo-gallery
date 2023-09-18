import { createGlobalStyle } from "styled-components";

const customMediaQuery = (minWidth: number) => {
  return `@media (min-width: ${minWidth}px)`;
};

export const media = {
  tablet: customMediaQuery(768),
  desktop: customMediaQuery(992),
};

const GlobalStyles = createGlobalStyle`
  * {
    font-family: 'Roboto', sans-serif;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    background-color: #e7e7e7;
    font-size: 1rem;
  }

  main {
    margin: 1.5rem auto;

    ${media.tablet} {
      margin: 1.5rem 2rem;
    }
  }

  button {
    font-size: 1rem;
    cursor: pointer;
  }
`;

export default GlobalStyles;
