import styled from '@emotion/styled';
import tw from 'tailwind.macro';

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

export { Win, PlayAgainButton, DisplayScore, DisplayGameState };
