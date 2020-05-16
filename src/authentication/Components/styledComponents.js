import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const Wrapper = styled.div `
  ${tw`
  flex justify-center items-center h-screen bg-gray-200
  `}
`;

const SignIn = styled.h2 `
  ${tw`
  font-bold mb-4
  `}
`;

const Username = styled.input `
  ${tw`
  border border-gray-400 mb-3 w-48 h-10 pl-2 
  focus:outline-none rounded
  `}
`;

const Password = styled.input `
  ${tw`
  border border-gray-400 mb-3 w-48 h-10 pl-2
  focus:outline-none rounded
  `}
`;

const SubmitButton = styled.button `
  ${tw`
  flex justify-center w-48 h-10 rounded bg-gray-900 text-white
  `}
`;

const ErrorMessage = styled.span `
  ${tw`
  text-red-700 mt-2 w-48 text-sm 
  `}
`;

export {
  Wrapper,
  SignIn,
  Username,
  Password,
  SubmitButton,
  ErrorMessage
}