import styled from '@emotion/styled';
import tw from 'tailwind.macro';

// EmojiGameDashboardApp

const Wrapper = styled.div `
    ${tw`
        flex flex-col items-center
    `}
    background:${props=>props.theme.color};
    color:${props=>props.theme.textColor}
`;

const EmojiBody = styled.div `
    ${tw`
        flex justify-between flex-wrap w-11/12
    `}
    background:${props=>props.theme.color};
    color:${props=>props.theme.textColor}
`;

// Navbar.js

const PageContainer = styled.div `
    ${tw`
        flex justify-between items-center p-6 shadow-custom font-bold
        text-xl w-screen px-10
    `}
`;

const ScoreList = styled.div `
    ${tw`
        flex justify-between items-center font-bold w-2/5
        text-lg
    `}
`;

const Score = styled.p `
    ${tw`
        flex justify-between items-center font-bold
    `}
`;

const Button = styled.button `
    ${tw`
        flex justify-around text-base cursor-pointer border px-2 py-2
        text-base items-center border-2
    `}
`;

// EmojiCard.js

const EachEmojiCard = styled.div `
    ${tw`
        w-64 flex flex-col flex-start border-none items-center shadow-custom my-10
    `}
`;

const Emoji = styled.img `
    ${tw`
         h-48 -my-2
    `}
`;

const EmojiName = styled.p `
    ${tw`
        flex flex-wrap justify-center items-center py-4
    `}
`;

export {
    Wrapper,
    PageContainer,
    ScoreList,
    Score,
    Button,
    EmojiBody,
    EachEmojiCard,
    Emoji,
    EmojiName
};
