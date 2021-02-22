import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const globalStyles = createGlobalStyle`
    ${reset};
    *{
        box-sizing: border-box;
        margin: 0;
    }
`;

export default globalStyles;
