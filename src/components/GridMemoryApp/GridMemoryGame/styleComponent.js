import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const Wrapper = styled.div `
    ${tw`
    flex flex-col items-center justify-center min-h-screen bg-gray-900 w-screen
    `}
    background:${props=>props.theme.color};
    color:${props=>props.theme.textColor}
`;

export {
    Wrapper
}