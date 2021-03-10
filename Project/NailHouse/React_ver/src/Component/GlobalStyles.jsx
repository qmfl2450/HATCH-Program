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

    /* 효과가 서서히 나타나게 함 */
    .fade-in {
        animation: fadein 0.5s;
        -moz-animation: fadein 0.5s; /* Firefox */
        -webkit-animation: fadein 0.5s; /* Safari and Chrome */
        -o-animation: fadein 0.5s; /* Opera */
    }
    @keyframes fadein {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
    @-moz-keyframes fadein { /* Firefox */
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
    @-webkit-keyframes fadein { /* Safari and Chrome */
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
    @-o-keyframes fadein { /* Opera */
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    /* 효과가 서서히 사라지게 함 */
    .fade-out {
        animation: fadeout 0.5s;
        -moz-animation: fadeout 0.5s; /* Firefox */
        -webkit-animation: fadeout 0.5s; /* Safari and Chrome */
        -o-animation: fadeout 0.5s; /* Opera */
        animation-fill-mode: forwards;
    }
    @keyframes fadeout {
        from {
            opacity: 1;
        }
        to {
            opacity: 0;
        }
    }
    @-moz-keyframes fadeout { /* Firefox */
        from {
            opacity: 1;
        }
        to {
        opacity: 0;
        }
    }
    @-webkit-keyframes fadeout { /* Safari and Chrome */
        from {
            opacity: 1;
        }
        to {
            opacity: 0;
        }
    }
    @-o-keyframes fadeout { /* Opera */
        from {
            opacity: 1;
        }
        to {
            opacity: 0;
        }
    }
`;

export default globalStyles;
