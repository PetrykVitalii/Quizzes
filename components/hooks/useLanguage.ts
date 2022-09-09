import { useMemo } from 'react';
import { useSelector } from 'react-redux';

import { selectLn } from '@/store/selectors/language';

import Common from '@/utils/language/Common';

export default () => {
  const ln = useSelector(selectLn);

  const commonLn = useMemo(() => new Common(ln), [ln]);

  return [{
    commonLn,
  }];
};
