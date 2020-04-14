import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const EachTodo = styled.div `
    ${tw`
        flex justify-between items-center w-6/12 border-b-2
    `}
`;

const CheckBox = styled.div `
    ${tw`
        w-1/12 
    `}
`;

const CheckBoxInput = styled.input<{isCompleted:any}> `
    ${tw`

    `}
    background:${props=>props.isCompleted === true ? '#38a169' : '#cbd5e0'}
`;

const DisplayTitle = styled.input<{isCompleted:any}> `
    ${tw`
        w-4/5 border h-10 text-center
    `}
    text-decoration:${props=>props.isCompleted === true ? 'line-through' : 'none'}
`;

const RemoveTodo = styled.div `
    ${tw`
        text-red-500 p-2 text-xl border-none w-1/12 font-extrabold	
    `}
`;
export {
    EachTodo,
    CheckBox,
    DisplayTitle,
    RemoveTodo,
    CheckBoxInput
};
