import styled from "styled-components";

export const Container = styled.section`
  padding: 50px 150px;
  position: relative;
  background-size: cover;
  background-position: center;
  background-image: url("https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80");
  
  :before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
  }
  `;

export const Text = styled.div`
background-color: rgba(0,0,0,0.1);
  width: 55%;
  position: relative;
  z-index: 1;
  h2 {
    color: var(--white);
    font-size: 3.7rem;
    font-weight: 700;
    margin-bottom: 20px;

  }
  p {
    color: var(--white);
    margin-bottom: 20px;

  }
`;