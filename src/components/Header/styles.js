import { styled } from "styled-components";

export const Container = styled.header`
  padding: 25px 150px;
  height: 7rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(0,0,0,0.1);
  background-color: var(--white);
`

export const Logo = styled.div`
  img {
    max-width: 4rem;
    display: flex;
    justify-content: space-between;
    cursor: pointer;
  }
`

export const Menu = styled.div`
  ul {
    display: flex;
    justify-content: center;
    align-items: center;

    li {
      border:1px solid var(--gray);
      border-radius: 10px;
      padding: 10px;
    }

    li span {
      font-size: 1.2rem;
    }

    li:hover {
      background: #CCC;
      transition: all 0.9s;
      transform: scale(1.08);
      cursor: pointer;
    }
  }
`