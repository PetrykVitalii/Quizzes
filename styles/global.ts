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
  }

  button {
    border-width: 0;
  }

  input[type="number"] {
  -webkit-appearance: textfield;
     -moz-appearance: textfield;
          appearance: textfield;
  }
  input[type=number]::-webkit-inner-spin-button, 
  input[type=number]::-webkit-outer-spin-button { 
    -webkit-appearance: none;
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
