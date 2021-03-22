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
    select {
        font-family: "Noto Sans KR", sans-serif;
        -webkit-appearance: none;  /* 네이티브 외형 감추기 */
        -moz-appearance: none;
        appearance: none;
        &:focus {
            outline: none;
        }
    }
    select::-ms-expand {
        display: none;
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

    // 그리드 시스템
    .container {
        width: 100%;
        max-width: 1240px;
        padding: 0 60px;
        margin: 0 auto;
    }

    .row {
        display: flex;
        flex-wrap: wrap;
        padding-right: -10px;
        padding-left: -10px;
    }

    .col-1 {
        width: 8.333333333333333%;
        padding: 0, 10px;
    }

    .col-2 {
        width: 16.66666666666667%;
        padding: 0, 10px;
    }

    .col-3 {
        width: 25%;
        padding: 0, 10px;
    }

    .col-4 {
        width: 33.33333333333333%;
        padding: 0, 10px;
    }

    .col-5 {
        width: 41.66666666666667%;
        padding: 0, 10px;
    }

    .col-6 {
        width: 50%;
        padding: 0, 10px;
    }

    .col-7 {
        width: 58.33333333333333%;
        padding: 0, 10px;
    }

    .col-8 {
        width: 66.66666666666667%;
        padding: 0, 10px;
    }

    .col-9 {
        width: 75%;
        padding: 0, 10px;
    }

    .col-10 {
        width: 83.33333333333333%;
        padding: 0, 10px;
    }

    .col-11 {
        width: 91.66666666666667%;
        padding: 0, 10px;
    }

    .col-12 {
        width: 100%;
        padding: 0, 10px;
    }
`;

export default globalStyles;
