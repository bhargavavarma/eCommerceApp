import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const EachProductToDisplay = styled.div `
  ${tw`
  flex flex-col border w-56 my-2 items-center p-2 relative mx-2
  `}
`;

const FreeShipping = styled.p `
  ${tw`
  absolute top-10 right-0 bg-black text-xs text-white py-1 text-center
  `}
  width:${props=>props.isFreeShipping?'100px':'0px'}
`;

const Image = styled.img `
  ${tw`
  w-4/5 object-contain mb-2 h-48
  `}
`;


const Title = styled.p `
  ${tw`
  text-center h-12
  `}
`;

const Currency = styled.p `
  ${tw`
  flex w-1/3 justify-around px-1
  `}
`;

const CurrencyFormat = styled.span `
  ${tw`
  text-xs flex items-end font-medium py-1 px-1
  `}
`;

const CurrencyPrice = styled.span `
  ${tw`
  font-medium text-lg
  `}
`;

const Installments = styled.p `
  ${tw`
  flex text-sm text-gray-800 justify-center h-6
  `}
`;

const Button = styled.button `
  ${tw`
  w-full py-3 bg-black text-center rounded text-sm 
  focus:outline-none hover:bg-blue-500
  text-white hover:text-white hover:font-semibold
  `}
`;

const IntegerSpan = styled.span `
  ${tw`
  font-medium text-lg
  `}
`;

const DecimalSpan = styled.span `
  ${tw`
  font-medium text-sm
  `}
`;

export {
  EachProductToDisplay,
  FreeShipping,
  Image,
  Title,
  Currency,
  CurrencyFormat,
  CurrencyPrice,
  Installments,
  Button,
  IntegerSpan,
  DecimalSpan
}