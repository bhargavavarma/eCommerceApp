import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const Button = styled.button `
${tw`
  rounded-full h-10 w-10 m-1 focus:outline-none
  bg-gray-200 hover:border hover:border-gray-500
`}
  background:${props=>props.isClicked?'black':'bg-gray-200'};
  color:${props=>props.isClicked?'white':'black'}
`;

export {Button}