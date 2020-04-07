import styled from '@emotion/styled';
import tw from 'tailwind.macro';

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

export { Wrapper, EmojiBody };
