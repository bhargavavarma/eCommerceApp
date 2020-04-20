import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const Wrapper = styled.div `
    ${tw`
        flex flex-col items-center w-screen
    `}
`;

const TodoHeader = styled.h1 `
    ${tw`
        text-6xl text-red-300
    `}
`;

const DisplayTodo = styled.input `
    ${tw`
        w-6/12 text-xl m-2 p-2
    `}
`;

const UserInput = styled.div `
    ${tw`
        w-full flex justify-center
    `}
`;

const TodosList = styled.div `
    ${tw`
         w-full flex items-center flex-col
    `}
`;

const Display = styled.div `
    ${tw`
         w-full flex items-center flex-col
    `}
`;

const TodoFooter = styled.div `
    ${tw`
        flex justify-between w-full w-6/12 flex-wrap p-2 m-0 border shadow-paper bg-white		
    `}
`;

export {
    Wrapper,
    TodoHeader,
    DisplayTodo,
    UserInput,
    Display,
    TodosList,
    TodoFooter
};
