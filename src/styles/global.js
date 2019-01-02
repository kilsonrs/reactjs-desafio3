import { createGlobalStyle } from "styled-components";
import "font-awesome/css/font-awesome.css";

const GlobalStyle = createGlobalStyle`
    *{
        margin:0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
    }

    body{
        font-family: Arial, Helvetica, sans-serif;
        -webkit-font-smoothing: antialiased !important;
    }

`;

export default GlobalStyle;
