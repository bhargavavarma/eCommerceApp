import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const Total = styled.div `
  ${tw`
    flex justify-between -my-4
  `}
  width:360px
`;

const Text = styled.span `
  ${tw`
    text-lg text-gray-600 font-bold
  `}
`;

const Amount = styled.span `
  ${tw`
    text-lg text-orange-400
  `}
`;

export {Total,Text,Amount}