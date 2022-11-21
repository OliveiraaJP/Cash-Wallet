import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  height: 80%;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  input {
    width: 70%;
    height: 20%;
    padding: 5%;
    font-size: 1.3em;
  }

  button {
    width: 80%;
    height: 20%;
    background-color: darkgray;
    color: white;
    font-weight: bold;
    font-size: 1.7em;

    &:hover {
      background-color: gray;
    }
  }
`;
