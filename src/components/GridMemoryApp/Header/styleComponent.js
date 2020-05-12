import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const HeaderPart = styled.div `
${tw`
    flex flex-col items-center justify-between
`}
width:${props=>props.width}px;
`;

const TopLevel = styled.p `
${tw`
flex justify-center text-xl mb-4 w-full
`}
`;

const Level = styled.p `
${tw`
text-xl px-1
`}
`;

const Theme = styled.div `
${tw`
text-xl border border-2 cursor-pointer
flex items-center justify-between mb-2 px-1
`}
`;

const HeaderItem = styled.div `
${tw`
flex items-center justify-between mb-2 w-full
`}
`;

export {
    HeaderPart,
    TopLevel,
    Level,
    Theme,
    HeaderItem
}