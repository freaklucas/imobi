import styled from "styled-components";

export const Container = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  padding: 100px 150px;
  background-color: var(--white);
`;  
export const Item = styled.section`
  img {
    width: 120px;
    margin-top: auto;
  }
  h3 {
    margin-bottom: 10px;
  }

  ul {
    li {
      padding: 12px 0;
    }
  }

  nav {
    display: flex;
    margin-top: 15px;

    li {
      span {
        margin-right: 12px;
      }
    }
  }
`;
export const Copy = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px 150px;
  cursor: pointer;
  list-style: none;
  border-top: 1px solid rgba(0,0,0,0.1);
  
  ul {
    display: flex;
    align-items: ceter;
    li {
      span {
        margin-left: 10px;
      }
    }
  }
`;