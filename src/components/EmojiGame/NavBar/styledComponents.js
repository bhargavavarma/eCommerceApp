import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const PageContainer = styled.div `
    ${tw`
        flex justify-between items-center p-6
        text-xl w-screen px-10
    `}
`;

const ScoreList = styled.div `
    ${tw`
        flex justify-between items-center font-bold w-2/6
        text-base
    `}
`;

const Score = styled.p `
    ${tw`
        flex justify-between items-center font-bold
    `}
`;

const GameName = styled.p `
    ${tw`
        text-3xl
    `}
`;

const Button = styled.button `
    ${tw`
        flex justify-around cursor-pointer border px-2 py-2
        text-base items-center border-2
    `}
`;

export {
    PageContainer,
    ScoreList,
    Score,
    GameName,
    Button
};
