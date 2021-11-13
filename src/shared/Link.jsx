import { Link as RRLink } from 'react-router-dom';
import React from 'react';

const Link = (props) => {
  const { children, ...rest } = props;

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <RRLink
      onClick={scrollToTop}
      {...rest}
    >
      {children}
    </RRLink>
  );
};

export default Link;
