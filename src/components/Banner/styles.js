import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 25px 150px;
  position: relative;
  background-size: cover;
  background-position: center;
  background-image: url(https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80);
  width: 100%;
  height: 100vh;

  :before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(
      0,
      0,
      0,
      0.1
    ); // Altere a opacidade conforme necessário
    z-index: -1;
    border-radius: 10px;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
  }

  @media (max-width: 768px) {
    padding: 25px 50px;
  }
`;

export const Text = styled.div`
  width: 55%;
  position: relative;
  z-index: 1;
  display: flex;
  justify-items: flex-start;
  align-items: center;
  justify-content: start;
  flex-direction: column;
  text-align: center;

  h2 {
    margin: 2rem 2rem;

    color: var(--primary);
    font-size: 4rem;
    font-weight: 700;
    margin-bottom: 4rem;
  }

  p {
    color: var(--primary);
    margin: 0 0 0 1rem;
  }

  span {
    background-color: var(--blue);
    border: 10px;
    padding: 12px 120px;
    cursor: pointer;
    margin: 1rem 1rem;
    transition: all 0.8s;
    display: flex;
    justify-content: center;
    align-items: center;

    font-weight: 700;
    border-radius: 10px;
    font-size: 1rem;
    text-transform: uppercase;
    
    align-items: center;
    justify-content: center;


    &:hover {
      background-color: var(--white);
    }
  }

  @media (max-width: 768px) {
    width: 90%;

    h2 {
      font-size: 2.3rem;
    }
    p {
      font-size: 1rem;
      margin: 1rem 1rem;
    }
    span {
      font-size: 12px;
      padding: 12px 60px;
      margin: 1rem 1rem;
    }
  }
`;
