import { IIcon } from '@/interfaces/icon';

const TickIcon: React.FC<IIcon> = ({ width = '48', height = '48' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-check"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export default TickIcon;
