import { createGlobalStyle } from 'styled-components/macro';

const GlobalStyles = createGlobalStyle`
    *,
    *::after,
    *::before {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 81.25%;

        ::-webkit-scrollbar {
            display: none;
        }
    }

    body {
        background-color: ${(props) => props.theme.colors.lightGrayishBlue};
        font-family: 'Barlow Semi Condensed', sans-serif;
    }
`;

export default GlobalStyles;
