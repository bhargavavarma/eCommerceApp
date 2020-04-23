import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const Login = styled.div `
    ${tw`
    flex flex-col justify-center items-center h-screen h-48
    `}
`;

const UserName = styled.input `
    ${tw`
      w-30 h-10 border border-2
    `}
`;

const Password = styled.input `
    ${tw`
    w-30 h-10 border border-2
    `}
`;

const LoginButton = styled.button `
    ${tw`
    flex items-center justify-center bg-green-500 w-20 h-10
    `}
`;

export {
  Login,
  UserName,
  Password,
  LoginButton
}