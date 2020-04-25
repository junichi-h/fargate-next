import { css, SerializedStyles } from '@emotion/core';
export const globalStyle: SerializedStyles = css`
  html {
    height: 100%;
    background: #000;
    color: #fff;
  }
  img {
    width: 100%;
    height: auto;
    vertical-align: top;
    pointer-events: none;
  }
  button {
    padding: 0;
    border: none;
    outline: none;
    background-color: transparent;
    cursor: pointer;
    appearance: none;
  }
  input[type='text'] {
    border-radius: 0;
    outline: none;
    background: none;
  }
  a {
    color: #fff;
    text-decoration: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
  li {
    list-style: none;
  }
`;