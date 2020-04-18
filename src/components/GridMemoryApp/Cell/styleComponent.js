import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const Hidden = styled.button `
    ${tw`
    m-1 flex justify-center items-center bg-blue-300 pointer-events-auto
    `}
`;

const Visible = styled.button `
    ${tw`
        m-1 flex justify-center items-center bg-blue-900 pointer-events-auto 
    `}
`;

export {
    Hidden,
    Visible
}