import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const Wrapper = styled.div `
  ${tw`
  m-6 relative w-11/12
  `}
`;

const SignOutButton = styled.button `
  ${tw`
  border border-gray-800 p-1 rounded text-xs
  `}
`;

const CartContainer = styled.div `
  ${tw`
  flex fixed top-0 right-0
  `}
`;

const DislayProducts = styled.div `
  ${tw`
  flex flex-1 -my-5
  `}
`;


const RenderProductList = styled.div `
  ${tw`
    flex flex-col flex-1 items-center
  `}
`;

export {
  Wrapper,
  SignOutButton,
  CartContainer,
  DislayProducts,
  RenderProductList
}
