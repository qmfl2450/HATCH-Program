import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import "../assets/fonts/font.css";

const globalStyles = createGlobalStyle`
    ${reset};
    *{
        box-sizing: border-box;
        margin: 0;
        font-size: 16px;
    }
    body, li, ol, ul {
        font-family: "Noto Sans KR", sans-serif;
    }
    button, a, input, form {
        font-family: "Noto Sans KR", sans-serif;
        border: none;
        background-color: inherit;
        color: inherit;
        &:hover {
            outline: none;
        }
        &:focus {
            outline: none;
        }
    }
    a {
        text-decoration: none;
        &:hover {
            color: inherit;
        }
        &:focus {
            outline: none;
            color: inherit;
        }
    }
`;

export default globalStyles;
