import styled from 'styled-components';
import Link from 'next/link';
import { useDispatch } from 'react-redux';

import { logOut } from '@/store/actions/auth';
import { AppDispatch } from '@/store';

interface Props {
}

const Logout: React.FC<Props> = () => {
  const dispatch = useDispatch<AppDispatch>();

  const handleLogout = () => {
    dispatch(logOut());
  };

  return (
    <Wrap>
      <Link href="/login">
        <Text onClick={handleLogout}>Logout</Text>
      </Link>
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 8px 24px;
`;

const Text = styled.p`
  display: inline-flex;
  color: ${({ theme }) => theme.colors.Blue};
  font-size: 10px;
  text-transform: uppercase;
  cursor: pointer;
`;

export default Logout;
