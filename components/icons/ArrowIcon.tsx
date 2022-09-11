import { IIcon } from '@/interfaces/icon';

const ArrowIcon: React.FC<IIcon> = ({ width = '16', height = '16', color = 'black' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} color={color} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
);

export default ArrowIcon;
