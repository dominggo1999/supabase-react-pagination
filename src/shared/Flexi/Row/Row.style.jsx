import { styled } from 'twin.macro';

export const StyledRow = styled.div`
  /* Vertical alignment */
  align-items: ${({ align }) => {
    let alignItems = align;
    if (align === 'start') alignItems = 'flex-start';
    if (alignItems === 'end') alignItems = 'flex-end';
    return alignItems;
  }};

  /* Horizontal alignment */
  justify-content: ${({ justify }) => {
    let justifyContent;
    if (justify === 'start') justifyContent = 'flex-start';
    if (justify === 'end') justifyContent = 'flex-end';
    if (justify === 'between') justifyContent = 'space-between';
    if (justify === 'around') justifyContent = 'space-around';
    if (justify === 'center') justifyContent = 'center';
    if (justify === 'initial') justifyContent = 'initial';
    if (justify === 'inherit') justifyContent = 'inherit';
    return justifyContent;
  }};

  flex-direction: ${({ direction }) => {
    const flexDirection = ['column', 'row', 'column-reverse', 'row-reverse'].includes(direction) ? direction : null;
    return flexDirection;
  }};

  margin-left: ${({ gutterWidth }) => `${-gutterWidth / 2}px`};
  margin-right: ${({ gutterWidth }) => `${-gutterWidth / 2}px`};
  border: ${({ debug }) => debug && '1px solid red'};

  display: flex;
  flex-wrap: ${({ nowrap }) => (nowrap ? 'nowrap' : 'wrap')};
  flex-grow: 0;
  flex-shrink: 0;
`;
