/* eslint-disable import/prefer-default-export */
export const copyToClipboard = (text: string) => {
  if (navigator?.clipboard?.writeText) {
    navigator.clipboard.writeText(text);
  }
};
