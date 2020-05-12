import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const GameCompleted = styled.div `
    ${tw`
        flex flex-col w-full items-center mt-4
    `}
`;

const PlayAgainButton = styled.div `
    ${tw`
        text-lg m-1 font-bold px-3 py-1 text-white bg-blue-500 tracking-wider
    `}
`;

const TopLevel = styled.div `
    ${tw`
        flex justify-center text-3xl
    `}
`;

const Greetings = styled.div `
    ${tw`
        flex justify-center text-green-800 text-3xl font-semibold
    `}
`;


export { PlayAgainButton ,GameCompleted,TopLevel,Greetings};
