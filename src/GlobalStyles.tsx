import { createGlobalStyle } from "styled-components";
import { colors } from "./assets/variables";

export const GlobalStyle = createGlobalStyle`@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,600;0,700;0,900;1,400&display=swap");
 
*,
*::before,
*::after {
  box-sizing: border-box;
}

* {
  margin: 0;
  font-family: "Roboto", sans-serif;
}

html,
body {
  height: 100%;
}

body {
  height: 100%;
  padding: 10px;
  line-height: 1.5;
  overflow: hidden;
  background-color: #af94ff ;
  
  -webkit-font-smoothing: antialiased;
  display: flex;
  flex-direction: column;
  color: ${colors.black};
 justify-content: center;
    align-items: center;
 
}

img,
picture,
video,
canvas,
svg {
  display: block;
  max-width: 100%;
}

input,
button,
textarea,
select {
  font: inherit;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
}

button {
  cursor: pointer;
}

a {
  text-decoration: none;
}


`;
