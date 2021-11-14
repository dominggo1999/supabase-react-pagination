import tw, { styled } from 'twin.macro';

export const Nav = styled.nav`
  ${tw`
    text-white
    py-5
    flex
    justify-between
  `}
`;

export const Brand = styled.h1`
  ${tw`
    text-2xl
    font-semibold
  `}
`;

export const Links = styled.div`
  ${tw`
    flex
  `}

  button {
    ${tw`
      ml-3
    `}
  }
`;
