import React from 'react';
import {
  SpinnerLogo, Skeleton,
} from './Spinner.style';

const Spinner = () => {
  return (
    <SpinnerLogo>
      <Skeleton />
    </SpinnerLogo>
  );
};

export default Spinner;
