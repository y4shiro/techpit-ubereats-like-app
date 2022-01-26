import React from 'react';

import { RoundButton } from '../shared_style';

type Props = {
  onClick: () => void;
  isDisabled: boolean;
};

export const CountUpButton: React.VFC<Props> = ({ onClick, isDisabled }) => (
  <RoundButton onClick={onClick} disabled={isDisabled}>
    +
  </RoundButton>
);
