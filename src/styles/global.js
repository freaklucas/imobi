import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --primary: #f7f9fc;
    --secondary: #15181c;
    --gray: #d9d9d9;
    --blue: #4766ff;
    --white: #FFF;
  }

  body {
    background-color: var(--primary);
    color: var(--secondary);
    font-family: 'Russo One', sans-serif;
    font-size: 1.4rem;
    font-weight: 500;
  }

  ul {
    list-style: none;
  }

  a{
    text-decoration: none;
  }
`