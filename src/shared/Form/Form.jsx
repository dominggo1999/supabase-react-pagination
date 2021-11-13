import tw, { styled } from 'twin.macro';

export const Input = styled.input`
  ${tw`
    w-full 
    border 
    border-gray-400 
    text-gray-800 
    placeholder-gray-400 
    rounded 
    focus:border-transparent 
    focus:outline-none 
    px-3 
    py-2 
    bg-none
  `}
`;

export const Label = styled.label`
  ${tw`
    block 
    font-medium 
    tracking-tight
    mb-2
  `}
`;

export const Error = styled.div`
  ${tw`
    text-red-500 
    mt-2
  `}
`;

export const FormWrapper = styled.div`
  ${tw`
    py-20
    w-full 
    md:w-3/5 
    lg:w-1/3 
    mx-auto
  `}

  button {
    ${tw`
      mt-5
      inline-flex 
      items-center 
      text-white 
      px-5 
      py-2 
      rounded-lg 
      overflow-hidden 
      focus:outline-none 
      bg-green-500 
      hover:bg-green-600 
      font-semibold 
      tracking-tight
    `}
  }
`;
