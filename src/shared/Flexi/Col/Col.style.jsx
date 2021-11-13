import tw, { styled } from 'twin.macro';

export const StyledCol = styled.div`
  ${tw`
    relative
    w-full
  `}

  border: ${({ debug }) => debug && '2px solid blue'};
  padding-left: ${({ gutterWidth }) => `${gutterWidth / 2}px`};
  padding-right: ${({ gutterWidth }) => `${gutterWidth / 2}px`};
`;
