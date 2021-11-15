import tw, { styled } from 'twin.macro';

export const Card = styled.div`
  ${tw`
    rounded-2xl 
    bg-grayish 
    px-6
    py-10 
    break-all
  `}
`;

export const Name = styled.h1`
  ${tw`
    break-all
    font-semibold
    text-xl
    mb-5
    text-green-500
  `}
`;

export const Email = styled.p`
  ${tw`
    mb-5 
  `}
`;
