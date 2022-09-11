import React from 'react';

interface Props {
  width?: number | string;
  height?: number | string;
  color?: string;
}

const CheckBoxDisabled: React.FC<Props> = ({ width = '20', height = '20', color = '#E8E8E8' }) => (
  <svg width={width} height={height} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect stroke={color} x="19.25" y="19.25" width="18.5" height="18.5" rx="5.25" transform="rotate(-180 19.25 19.25)" fill="#F0F0F0" strokeWidth="1.5" />
  </svg>
);

export default CheckBoxDisabled;
