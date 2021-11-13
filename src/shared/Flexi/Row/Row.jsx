import React, { useContext } from 'react';
import { StyledRow } from './Row.style';
import { getConfiguration } from '../config';

export const GutterWidthContext = React.createContext(false);

const Row = ({
  children,
  style,
  align,
  justify,
  debug,
  nogutter,
  component,
  nowrap,
  direction,
  gutterWidth,
  ...otherProps
}) => {
  let theGutterWidth = getConfiguration().gutterWidth;
  if (nogutter) theGutterWidth = 0;
  if (typeof gutterWidth === 'number') theGutterWidth = gutterWidth;

  const theStyle = {
    gutterWidth: theGutterWidth,
    align,
    justify,
    debug,
    nowrap,
    direction,
  };

  return (
    <GutterWidthContext.Provider value={theGutterWidth}>
      <StyledRow
        {...otherProps}
        {...theStyle}
      >
        {children}
      </StyledRow>
    </GutterWidthContext.Provider>

  );
};

export default Row;
