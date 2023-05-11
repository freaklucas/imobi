import styled from "styled-components";

export const Container = styled.section`
  width: 24%;
  margin-bottom: 12px;
  background-color: var(--white);
  box-shadow: rgba(0,0,0,0.1);
  border-radius: 12px;
`;

export const Img = styled.div`
  width: 100%;
  img {
    width: 100%;
    height: auto;
  }
`;

export const Description = styled.div`
  padding: 12px;
  a {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: var(--secondary);
  }

  h4 {
    font-size: 0.9rem;
    font-weight: 600;
    margin-bottom: 10px;
  }
`;

export const Items = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  span {
    margin-bottom: 10px;
    color: var(--green-two)
  }
`;
