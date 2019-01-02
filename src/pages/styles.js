import styled from "styled-components";

export const FormAdd = styled.form`
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  form span {
    font-weight: bold;
    color: #7e7e7e;
    margin: 12px 0;
  }
  form input {
    font-size: 22px;
    padding: 0 0 0 15px;
    width: 256px;
    height: 52px;
    border: 1px solid #a9a9a9;
    box-sizing: border-box;
    border-radius: 4px;
    padding: 5px;
  }
  form div {
    display: flex;
    flex-direction: row;
  }
  form div button {
    font-size: 22px;
    border: 0;
    color: #fff;
    padding: 12px 28px;
    margin: 10px 5px;
    border-radius: 4px;
    width: 123px;
    height: 52px;
  }
  form div button.save {
    background: #6cff5f;
  }
  form div button.close {
    background: #ff5f5f;
  }
`;

export const StyleModal = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};

export const IconMarker = styled.img`
  border-radius: 100%;
  width: 48px;
  height: 48px;
  border: 1px solid #9b65e6;
`;
