import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

body {
	font-family: 'Open Sans Condensed', sans-serif;
	padding: 20px 60px;
	font-weight: bolder;
	background: linear-gradient(to bottom right, rgb(196, 255, 236), rgb(255, 255, 255));
    background-repeat: no-repeat;

    @keyframes gradient {
        0% {
            background-position: 0% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 0% 50%;
        }
    }
    
    @media screen and (max-width: 800px) {
        padding: 10px;
    }

}



a {
	text-decoration: none;
	color: black;
}

* {
	box-sizing: border-box;
}

`;
