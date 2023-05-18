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
  width: 100%;

  img {
    width: 100%;
    height: auto;
    border-radius: 5px;

  }
`;


export const Description = styled.div`
  padding: 30px 0;
  h2, p {
    margin-bottom: 15px;
  }
`;

  export const Thumb = styled.div`
    img {
      max-width: 100%;
    }
`;

export const Profile = styled.div`
  
`;
export const ProfileAvatar = styled.div`
  img {
    max-width: 10%;
  }
`;

export const ProfileDescription = styled.div`
  
`;

export const ProfileContact = styled.div`
  
`;

export const ProfileFormContact = styled.div`
  
`;
