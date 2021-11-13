import React from 'react';
import { Btn } from './Button.style';

const Button = ({ children, ...rest }) => {
  return (
    <Btn {...rest}>
      {children}
    </Btn>
  );
};

export default Button;
