import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const HeaderPart = styled.div `
  ${tw`
  flex justify-between items-center my-4 w-full
  `}
`;

const Select = styled.select `
  ${tw`
  rounded-md border border-gray-500 
  focus:outline-none h-8
  `}
`;

const TotalCount = styled.div `
  ${tw`
  
  `}
`;

const SearchBox = styled.div `
  ${tw`
    flex items-center px-2 text-gray-800 h-8 border rounded-full border-2
  `}
`;


const Sort = styled.div `
  ${tw`
  
  `}
`;

const SearchProduct = styled.input `
  ${tw`
  outline-none mx-1
  `}
`;

export {
  HeaderPart,
  TotalCount,
  Sort,
  Select,
  SearchBox,
  SearchProduct
}