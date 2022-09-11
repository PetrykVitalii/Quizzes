import styled from 'styled-components';

import ProfileIcon from '@/components/icons/ProfileIcon';
import ArrowIcon from '@/components/icons/ArrowIcon';

interface Props {
  name: string
}

const Profile: React.FC<Props> = ({ name }) => (
  <Wrap>
    <Round>
      <ProfileIcon />
    </Round>
    <Name>{name}</Name>
    <LinkTo>
      <ArrowIcon width="24" height="24" />
    </LinkTo>
  </Wrap>
);

const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  min-height: 58px;
  padding: 8px;
  border-radius: 2px;
  border: ${({ theme }) => `1px solid ${theme.colors.Main}`};
  background: ${({ theme }) => theme.colors.ItemBg};
  margin: 8px 0;
`;

const Round = styled.div`
  flex: 0 0 40px;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: ${({ theme }) => `1px solid ${theme.colors.Main}`};
  background: ${({ theme }) => theme.colors.GreyLight};
  border-radius: 50%;
`;

const Name = styled.h4`
  flex-grow: 1;
  font-size: 14px;
  font-weight: 600;
  line-height: 19px;
  padding: 15px;
`;

const LinkTo = styled.div`
  cursor: pointer;
  padding: 0 10px;
`;

export default Profile;
