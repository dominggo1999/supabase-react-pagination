import tw, { styled } from 'twin.macro';

export const Card = styled.div`
  ${tw`
    rounded-2xl 
    bg-grayish 
    px-6
    py-10
  `}
  box-shadow: rgba(0, 0, 0, 0.192) 0px 5px 15px;

${({ status }) => (status
    ? tw`bg-black`
    : tw`bg-grayish`)}
`;

export const Title = styled.h1`
  ${tw`
    font-semibold
    text-xl
    mb-5
    text-green-500
  `}
`;

export const Description = styled.p`
  ${tw`
    mb-5
  `}
`;

export const Actions = styled.div`
  ${tw`
    flex
    justify-between 
    items-center 
    items-stretch
  `}
`;

export const LeftAction = styled.div`
  ${tw`
    
  `}
`;

export const RightAction = styled.div`
  button {
    ${tw`
      h-full
      ml-2 
      text-xl
    `}
  }
`;
