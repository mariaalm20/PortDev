import {createGlobalStyle} from 'styled-components'

export default createGlobalStyle `
 :root {
  --primary-color: #7159c1;
  --title-color: #eeee;
  --text-color: #6c6c80;
 }

 * {
     margin: 0;
     padding: 0;
     box-sizing: border-box;
 };

 html, body, #root {
   height: 100%;
 };

 *, button, input {
   border:0;
   outline:0;

   font-family: 'Roboto', sans-serif;
 };
`