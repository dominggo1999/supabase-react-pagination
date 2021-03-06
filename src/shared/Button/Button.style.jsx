import tw, { styled } from 'twin.macro';

export const Btn = styled.button`
  ${tw`
    text-white
    relative
    py-2
    px-4 
    bg-green-500
    rounded-lg 
    block
    mb-5
  `}
  &:hover {
    ${tw`bg-green-400`}
  }
`;
