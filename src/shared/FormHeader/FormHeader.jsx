import React from 'react';
import { Header } from './FormHeader.style';

const FormHeader = ({ children }) => {
  return (
    <Header>
      {children}
    </Header>
  );
};

export default FormHeader;
