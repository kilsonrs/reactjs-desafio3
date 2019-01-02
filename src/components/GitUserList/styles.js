import styled from "styled-components";

export const Container = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 300px;
  height: 90%;
  margin: 20px;
  padding: 10px;
  border-radius: 12px;
  background: #fff;
  position: absolute;
  z-index: 1;
  box-shadow: 4px 6px 8px rgba(0, 0, 0, 0.25);

  ul {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 90%;
    margin: 20px 0 0 20px;
  }
`;
export const Profile = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 48px;
    height: 48px;
    border-radius: 50%;
  }

  div {
    display: flex;
    flex-direction: column;
    margin: 0 0 0 10px;
  }
  div small {
    color: #b3b3b3;
  }
`;

export const Actions = styled.div`
  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    text-decoration: underline;
    margin-left: 5px;
    padding: 0;

    i.delete-profile {
      color: #f00;
      margin-right: 5px;

      &:hover {
        color: #cc0000;
      }
    }
  }
`;
