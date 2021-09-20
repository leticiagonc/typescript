import {createGlobalStyle} from "styled-components"

import perfil from "assets/img/perfil.png"
export default createGlobalStyle `
 * {
margin: 0;
padding: 0;
outline: 0;
box-sizing: border-box;
font-size: 100%;
}

body {
    width: 100%; 
    max-width: 1024px;
    margin: 0 auto;
}
`
export const colors = {
    blue: "#636fdf",
    lightblue: "#add8e6",
   
}