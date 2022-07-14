import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{margin:0;padding:0;color:inherit;}

*, :after, :before {
  box-sizing:border-box;
  flex-shrink:0;
}

html, body {
  height:100%;
}

img {
  display: block;
  max-width:100%;
}

button {
  background:none;
  border:0;
  cursor:pointer;
}

a {
  text-decoration:none
}

table {
  border-collapse:collapse;
  border-spacing:0;
}
`;

export default GlobalStyle;
