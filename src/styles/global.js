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
    --gray-two: #767676;
    --blue: #4766ff;
    --white: #FFF;
    --green-one: #dbead5;
    --green-two: #14870c;
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

  @media (max-width: 720px){
  html{
    font-size: 87.5%;
  }
}

@media (max-width: 1080px){
  html{
    font-size: 93.75%;
  }
}
`;
