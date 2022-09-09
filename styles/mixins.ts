import { css } from 'styled-components';

import vars from '@/styles/var';
import { fontFamily } from '@/styles/fonts';

/* screen size mixins */
export const largeDesktop = `(min-width: ${vars.screen_width.desktop3}px)`;

export const desktop = `(max-width: ${vars.screen_width.desktop3 - 1}px)`;
export const onlyDesktop = `(min-width: ${vars.screen_width.desktop2}px) and (max-width: ${vars.screen_width.desktop3 - 1}px)`;

export const smallDesktop = `(max-width: ${vars.screen_width.desktop2 - 1}px)`;
export const onlySmallDesktop = `(min-width: ${vars.screen_width.desktop}px) and (max-width: ${vars.screen_width.desktop2 - 1}px)`;

export const tablet = `(max-width: ${vars.screen_width.desktop - 1}px)`;
export const onlyTablet = `(min-width: ${vars.screen_width.tablet}px) and (max-width: ${vars.screen_width.desktop - 1}px)`;

export const minTablet = `(min-width: ${vars.screen_width.desktop}px)`;
export const mobile = `(max-width: ${vars.screen_width.tablet - 1}px)`;
export const onlyMobile = `(min-width: ${vars.screen_width.mobile}px) and (max-width: ${vars.screen_width.tablet - 1}px)`;

/* helper mixins */

export const singleLine = css`
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const linebreak = css`
  white-space: pre-line;
  word-break: break-word;
`;

export const customScrollbar = css`
  scrollbar-width: thin;

  ::-webkit-scrollbar {
    width: 3px;
  }

  ::-webkit-scrollbar-track {
    scrollbar-width: 1px;
    background: #D2D2D2;
    color: #D2D2D2;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 100px;
    scrollbar-width: 3px;
    height: 40px;
    background: #212121;
    color: #212121;
  }

  ::-webkit-scrollbar {
    display: flex;
  }
`;

export const lineClamp = (maxLine: number = 2) => maxLine && css`
  word-wrap: white-space;
  word-break: break-word;

  @supports (-webkit-line-clamp: ${maxLine}) {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: initial;
    display: -webkit-box;
    -webkit-line-clamp: ${maxLine};
    -webkit-box-orient: vertical;
  }
`;

export const resetLineClamp = (maxLine: number = 2) => maxLine && css`
  word-wrap: initial;
  word-break: initial;

  @supports (-webkit-line-clamp: ${maxLine}) {
    overflow: initial;
    text-overflow: initial;
    white-space: initial;
    display: -webkit-box;
    -webkit-line-clamp: initial;
    -webkit-box-orient: initial;
  }
`;

export const disableElement = css`
  pointer-events: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export const removeScrollBar = css`
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const fontTimesNewRoman = css`
  font-family: ${fontFamily.TimesNewRoman};
`;
