import styled from '@emotion/styled';
import tw from 'tailwind.macro';

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

export { EachEmojiCard, Emoji, EmojiName };
