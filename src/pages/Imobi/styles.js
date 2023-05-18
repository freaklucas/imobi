import styled from "styled-components";

export const Container = styled.div`
  padding: 20px 150px;
  display: flex;
  justify-content: space-between;
`;

export const Left = styled.div`
  width: 70%;
  padding: 10px;
  border: 1px border solid rgb(0,0,0,.1);
`;

export const Right = styled.div`
  width: 28%;

  img {
    width: 100%;
    padding: 10px;
    border: 1px solid rgb(0,0,0.1);
    border-radius: 5px;

  }
`


export const Description = styled.div`
  padding: 30px 0;
  h2, p {
    margin-bottom: 15px;
    color: var(--secondary);
  }
`;

  export const Thumb = styled.div`
  width: 100%;

  img {
    width: 100%;
    height:auto;
    border-radius: 5px;

  }
`;

export const Profile = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const ProfileAvatar = styled.div`
  width: 115px;
  img {
    width: 100%;
    height: auto;
    border-radius: 5px;
  }
`;

export const ProfileDescription = styled.div`
  h3 , p {
    margin-bottom: 15px;
    color: var(--secondary);
  }
`;

export const ProfileContact = styled.div`
    h3 , p {
    margin-bottom: 15px;
    color: var(--secondary);
  }
`;

export const ProfileFormContact = styled.div`
    h3{
    margin-bottom: 15px;
    color: var(--secondary);
  }

  form {
    input, textarea {
      height: 50px;
      padding: 8px 15px;
      border-radius: 3px;
      width: 100%;
      color: var(--secondary);
      letter-spacing: 0.1px;
      font-size: 0.9rem;
      margin-bottom: 10px;

      outline: none;
      border-color: var(--gray);
      border: 1px solid var(--gray-two);

      resize: none;
    }

    textarea {
      width: 100%;
      height: 100px;
    }

    button {
      width: 100%;
      cursor: pointer;
      display: inline-block;
      text-align: center;
      background-color: var(--blue);
      line-height: 24px;
      border: 0;
      color: var(--white);
      font-size: 0.8rem;
      font-weight: 600;
      transition: 0.4s;
      padding: 12px 20px;
    }
  }
`;
