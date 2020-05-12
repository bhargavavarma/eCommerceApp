import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const EachProduct = styled.div `
  ${tw`
    flex border-t py-2 
  `}
`;

const Image = styled.img `
  ${tw`
   w-1/5 h-18
  `}
`;

const Text = styled.div `
  ${tw`
   flex flex-col w-3/5 items-start px-2
  `}
`;

const Title = styled.span `
  ${tw`
  text-sm h-12 flex items-center
  `}
`;

const PrintStyle = styled.span `
  ${tw`
  text-xs text-gray-600
  `}
`;

const Quantity = styled.span `
  ${tw`
  text-xs text-gray-600
  `}
`;

const Remove = styled.div `
  ${tw`
  w-1/5 flex flex-col items-center
  `}
`;

const RemoveProduct = styled.button `
  ${tw`
  text-lg text-black my-1
  `}
`;

const Price = styled.div `
  ${tw`
  text-xs text-gray-600 flex my-1
  `}
`;

const PriceFormat = styled.span `
  ${tw`
  text-xs text-gray-600
  `}
`;

const Amount = styled.span `
  ${tw`
  text-xs text-gray-600
  `}
`;

export {
  EachProduct,
  Image,
  Text,
  Title,
  PrintStyle,
  Quantity,
  Remove,
  RemoveProduct,
  Price,
  PriceFormat,
  Amount
}