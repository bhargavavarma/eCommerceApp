import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const Wrapper = styled.div `
  ${tw`
    flex flex-col p-4 text-white
  `}
  transition:0.4s ease-out
`;

const CartHeader = styled.div `
  ${tw`
    flex h-16 justify-center py-4 mx-12
  `}
  width:350px
`;

const CartText = styled.span `
  ${tw`
    mx-2 text-lg font-bold
  `}
`;

const MyCart = styled.div `
  ${tw`
    fixed top-0 right-0 z-10 bg-gray-800 h-screen
  `}
  width:${props=>props.shouldDisplayCart ? '400px':'0px'}
`;

const CloseCart = styled.button `
  ${tw`
    top-0 left-0 absolute p-2 -mx-6 bg-gray-800
  `}
`;

const Cart = styled.button `
  ${tw`
    fixed top-0 right-0 text-white z-10 bg-gray-800
  `}
`;

const CartContainer = styled.div `
  ${tw`
    h-screen flex flex-col justify-between
  `}
`;

const List = styled.div `
  ${tw`
    mx-4 flex flex-col h-64 overflow-auto
  `}
  width:360px
`;

const Footer = styled.div `
  ${tw`
    flex flex-col h-32 justify-around items-center
  `}
`;

const TotalItems = styled.div `
  ${tw`
    fixed top-0 right-0 text-yellow-500 z-20 mx-3 my-1
  `}
  display:${props=>props.shouldDisplayCart ? 'none':'block'}
`;

const TotalItemsInCart = styled.div `
  ${tw`
    text-yellow-500 z-20 my-1 -mx-6
  `}
  display:${props=>props.shouldDisplayCart ? 'block':'none'}
`;

export {
  Wrapper,
  MyCart,
  CartHeader,
  CartText,
  CloseCart,
  Cart,
  CartContainer,
  List,
  Footer,
  TotalItems,
  TotalItemsInCart
}