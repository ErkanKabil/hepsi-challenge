import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

  * {

    font-family: ${({ theme }) => theme.fonts.desktop.family};
    color: ${({ theme }) => theme.colors.primary};
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    line-height: 1;
    -webkit-tap-highlight-color: transparent;
  }

  button {
    background: none;
    border: 0;
    cursor: pointer;
    padding: 0;
    appearance: none;

    &:focus {
      outline: 0;
    }
  }

  select {
    appearance: none;
  }

  input, select, option, div {
    border: 0;

    &:focus,
    &:active {
      outline: 0;
    }
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primary};
    cursor: pointer;
  }

  ul {
    list-style: none;
  }

`;
export default GlobalStyles;
