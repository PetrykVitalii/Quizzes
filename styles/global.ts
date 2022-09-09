import { createGlobalStyle } from 'styled-components';
import normalize from 'styled-normalize';

import { colors, IColors } from '@/styles/colors';
import {
  IFontFamily,
  fontFamily,
} from '@/styles/fonts';

export const GlobalStyle = createGlobalStyle`
  ${normalize};

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  #__next {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background-color: ${({ theme }) => theme.colors.Main};
  }

  button {
    border: none;
    margin: 0;
    padding: 0;
    width: auto;
    overflow: visible;

    background: transparent;

    /* inherit font & color from ancestor */
    color: inherit;
    font: inherit;

    line-height: normal;

    -webkit-font-smoothing: inherit;
    -moz-osx-font-smoothing: inherit;

    -webkit-appearance: none;
    ::-moz-focus-inner {
      border: 0;
      padding: 0;
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
  }

  pre {
    margin: 0;
    padding: 0;
  }

  input, textarea {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }

  input {
    :disabled {
      background-color: inherit;
    }
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type=number] {
    -moz-appearance: textfield;
  }
`;

export interface ITheme {
  colors: IColors;
  fontFamily: IFontFamily;
}

export const theme: ITheme = {
  colors,
  fontFamily,
};
