import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const Footer = styled.div `
    ${tw`
        flex flex-start w-full flex-col h-30
    `}
`;

const Title = styled.p `
    ${tw`
        text-3xl font-bold py-3
    `}
`;

const P = styled.p `
    ${tw`
        px-4 text-lg
    `}
`;

export { Footer, Title, P };
