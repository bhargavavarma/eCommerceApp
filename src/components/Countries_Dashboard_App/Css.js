import styled from '@emotion/styled';
import tw from 'tailwind.macro';

// Header.js

const PageContainer = styled.div `
    ${tw`
        flex justify-between items-center py-6 shadow-lg font-bold
        text-xl px-10 
    `}
`;

const Button = styled.button `
    ${tw`
        flex justify-around text-base border border-gray-600 cursor-pointer w-32
        text-lg items-center
    `}
`;

// CountryCard.js

const EachCountryCard = styled.div `
    ${tw`
         h-430 shadow-md w-48 my-6 mx-3 border border-gray-600
    `}
`;

const CountryFlag = styled.img `
    ${tw`
         object-cover h-48 
    `}
`;

const CardBody = styled.div `
    ${tw`
         h-48 w-48 px-3 py-2
    `}
`;

const CardTitle = styled.p `
    ${tw`
         flex flex-wrap text-base h-16 items-center
    `}
`;

const CardText = styled.p `
    ${tw`
         flex flex-wrap 
    `}
`;

// CountryDashBoardApp

const Wrapper = styled.div `
    ${tw`
    h-screen
    `}
    background:${props=>props.theme.color};
    color:${props=>props.theme.textColor}
`;

const SearchCountrySelectRegion = styled.div `
    ${tw`
        flex justify-between px-10 py-8 items-center
    `}
`;

const SelectRegion = styled.div `
    ${tw`
        flex items-center border border-gray-600 justify-center h-10 w-30 text-base
    `}
`;

const CountryBody = styled.div `
    ${tw`
        flex justify-around flex-wrap px-5
    `}
`;

const SearchBox = styled.div `
    ${tw`
        flex justify-center items-center border border-gray-600 shadow-md px-2 text-gray-500 w-64
    `}
`;

const TextMessage = styled.h1 `
    ${tw`
        flex justify-center items-center w-full h-70
    `}
`;

const AscendingDesendingButoons = styled.button `
    ${tw`
        flex items-center shadow-lg p-3 text-lg
    `}
`;

const Sorting = styled.div `
    ${tw`
        flex justify-between w-40
    `}
`;


// CountryDetails.js

const EachCountryBody = styled.div `
    ${tw`
        flex items-center flex-col h-screen
    `}
    background:${props=>props.theme.color};
    color:${props=>props.theme.textColor}
`;

const EachCountryDetails = styled.div `
    ${tw`
        w-11/12
    `}
`;

const NavigationButtons = styled.div `
    ${tw`
        flex justify-between w-full
    `}
`;

const HomeButton = styled.div `
    ${tw`
        border-none text-base m-3 shadow-lg font-bold  p-4
    `}
`;

const BackButton = styled.div `
    ${tw`
        flex justify-center items-center text-base m-3 border-none
        shadow-lg font-bold p-4
    `}
`;

const SelectedCountryDetails = styled.div `
    ${tw`
        flex justify-between h-150 items-center p-2
    `}
`;

const EachCountryFlag = styled.img `
    ${tw`
         object-cover h-64 w-4/12
    `}
`;

const CountryFullDetails = styled.div `
    ${tw`
         flex flex-col w-7/12
    `}
`;

const CountryName = styled.div `
    ${tw`
         text-2xl
    `}
`;

const CountrySide1Details = styled.div `
    ${tw`
         flex justify-between
    `}
`;

const CountrySide2Details = styled.div `
    ${tw`
         flex flex-col
    `}
`;

const DetailsPart1 = styled.div `
    ${tw`
         w-2/5
    `}
`;

const DetailsPart2 = styled.div `
    ${tw`
         flex flex-col w-3/6
    `}
`;

const Details = styled.p `
    ${tw`
         flex flex-wrap py-2
    `}
`;

const BorderButtons = styled.p `
    ${tw`
         flex flex-wrap
    `}
`;

export {
    Wrapper,
    PageContainer,
    Button,
    EachCountryCard,
    SearchCountrySelectRegion,
    SelectRegion,
    CountryBody,
    CardBody,
    CardTitle,
    CardText,
    CountryFlag,
    EachCountryBody,
    EachCountryDetails,
    NavigationButtons,
    HomeButton,
    BackButton,
    SelectedCountryDetails,
    EachCountryFlag,
    CountryFullDetails,
    CountryName,
    CountrySide1Details,
    CountrySide2Details,
    DetailsPart1,
    DetailsPart2,
    Details,
    SearchBox,
    TextMessage,
    BorderButtons,
    Sorting,
    AscendingDesendingButoons
};
