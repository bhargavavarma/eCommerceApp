import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const PageContainer = styled.div `
    ${tw`
        w-screen h-screen flex justify-center items-center flex-col
    `}
`;

const Wrapper = styled.div `
    ${tw`
        flex justify-center border
    `}
`;

const Button = styled.p `
    ${tw`
        text-lg p-6 bg-blue-600 mx-4 cursor-default	rounded
    `}
`;

const Heading = styled.h1 `
    ${tw`
        text-4xl font-bold
    `}
`;

const Display = styled.input `
    ${tw`
        rounded-lg text-center text-lg
    `}
`;
export {
    PageContainer,
    Wrapper,
    Button,
    Heading,
    Display
};
