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
        flex justify-around flex-wrap w-screen px-20
    `}
    background:${props=>props.theme.background};
`;

// Navbar.js

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

// EmojiCard.js

const EachEmojiCard = styled.div `
    ${tw`
        w-56 flex flex-col flex-start border-none items-center shadow-custom my-8
    `}
    background:${props=>props.theme.cardColor}
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

// WinorLose 

const Win = styled.div `
    ${tw`
        h-56 flex justify-center items-center flex-col p-64
        w-screen
    `}
`;

const PlayAgainButton = styled.div `
    ${tw`
        text-lg m-3 font-bold px-6 py-3 text-white bg-blue-500 tracking-wider
    `}
`;

const DisplayScore = styled.p `
    ${tw`
        py-6 text-3xl font-bold
    `}
     color:${props=>props.theme.color}
`;

const DisplayGameState = styled.p `
    ${tw`
        text-2xl font-bold
    `}
    color:${props => props.gameState==='You Win!'?`${props.theme.green}`:`${props.theme.red}`}
`;


// HowToPlay.js

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

export {
    Wrapper,
    PageContainer,
    ScoreList,
    Score,
    Button,
    EmojiBody,
    EachEmojiCard,
    Emoji,
    EmojiName,
    Win,
    PlayAgainButton,
    Footer,
    Title,
    P,
    GameName,
    DisplayScore,
    DisplayGameState
};
