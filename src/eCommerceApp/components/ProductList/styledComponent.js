import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const DisplayProducts = styled.div `
  ${tw`
  flex flex-wrap
  `}
`;

const DisplayProductsList = styled.div `
  ${tw`
  w-full px-2
  `}
`;

export {
  DisplayProducts,
  DisplayProductsList
}