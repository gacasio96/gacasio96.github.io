import { createGlobalStyle } from 'styled-components'
 
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: Inter, Helvetica, Sans-Serif;
    font-weight: 900;
    letter-spacing: -2px;
    line-height: 1em;
  }
  h1{
    font-size: 50px;
  }
  h2{
    font-size: 40px;
  }
  h3{
    font-size: 30px;
  }
  p, li, span{
    font-family: Inter, Helvetica, Sans-Serif;
    font-weight:300;
    font-size: 16px;
    line-height: 1.5em;
    color: #cccccc;
  }
  a {
    font-family: Inter, Helvetica, Sans-Serif;
    font-weight:400;
    font-size: 16px;
    line-height: 1.5em;
    color: #ffffff;
    text-decoration: underline;
    transition: all .15s ease-in-out;
  }
  a:hover {
    color: #444efc;
  }
  button {
    font-family: Inter, Helvetica, Sans-Serif;
    font-weight: 600;
    width: auto;
    padding: 14px 24px;
    border-radius: 10px;
    background: #fffff;
    border:0px;
    color: #262EBF;
    transform: translate(0,0);
    transition: all .25s ease-in-out;
    cursor: pointer;
    box-shadow: 1px 1px 0px rgba(0,0,0,.15);
  }
  button:hover {
    background: #262EBF;
    color: #fff;
    transform: translate(0px,2px);
    box-shadow: 1px 1px 10px rgba(0,0,0,.15);
  }
`
 
export default GlobalStyle