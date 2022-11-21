import { createGlobalStyle } from "styled-components";
import background from "../assets/background.jpg";

export default createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing: border-box;
        font-family: 'IBM Plex Sans', sans-serif;
    }

    body{
        color: #000;
        background-image: url(${background});
        background-size: cover;
        background-repeat: repeat;
    }
`;
