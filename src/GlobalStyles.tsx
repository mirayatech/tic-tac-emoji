import { createGlobalStyle } from "styled-components";

import WALLPAPER from "./assets/images/wallpaper.png";
import { colors } from "./assets/variables";

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap');


*, *::before, *::after {
  box-sizing: border-box;
}

 
* {
  margin: 0;
  font-family: 'Poppins', sans-serif;
}
 
html, body {
  height: 100%;
}

 
body {
  overflow: hidden;
  line-height: 1.5;
  height: 100%;
  background-image: url(${WALLPAPER});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;   
  -webkit-font-smoothing: antialiased;
  color: ${colors.black};

}

 
img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}
 
input, button, textarea, select {
  font: inherit;
}

 
p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}

button {
  cursor: pointer;
}

a {
  text-decoration: none;
}

`;
