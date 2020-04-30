import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const Body = styled.div `
  ${tw`
  m-0 p-0 font-sans bg-gray-800 w-screen h-screen bg-cover
  `}
`;

const LoginBox = styled.div `
  ${tw`
  w-1/4 absolute text-white flex flex-col h-56
  `}
  top:50%;
  left:50%;
  transform: translate(-50%,-50%)
`;

const Text = styled.h1 `
  ${tw`
  float-left text-3xl border-b-4 w-1/3 mb-4
  `}
  border-color: #4caf50;
`;

const TextBox = styled.div `
  ${tw`
  w-full overflow-hidden border-b-2 flex items-center
  `}
  border-color: #4caf50;
`;

const Button = styled.button `
  ${tw`
  text-black w-1/3 border rounded mx-24 my-4 p-1 outline-none
  `}
`;

const Username = styled.input `
  ${tw`
  py-1 text-base border-none outline-none text-black
  `}
  font-size:18px;
  width:80%;
  margin:10px;
`;

const Password = styled.input `
  ${tw`
  py-1 text-base border-none outline-none text-black
  `}
  font-size:18px;
  width:80%;
  margin:10px;
`;

export {
  LoginBox,
  TextBox,
  Button,
  Body,
  Text,
  Username,
  Password
}