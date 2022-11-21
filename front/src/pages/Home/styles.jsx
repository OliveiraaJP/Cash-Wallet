import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  header {
    background-color: black;
    min-width: 550px;
    padding: 10px 50px;
    -webkit-box-shadow: 0px 0px 36px 12px rgba(19, 35, 47, 1);
    -moz-box-shadow: 0px 0px 36px 12px rgba(19, 35, 47, 1);
    box-shadow: 0px 0px 36px 12px rgba(19, 35, 47, 1);
    margin-bottom: 30px;
    display: flex;
    justify-content: space-between;
    div {
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }
  }

  img {
    &.logo {
      width: 130px;
    }
  }

  main {
    padding: 0px 40px;
    display: flex;
    flex-wrap: wrap;
    @media screen and (max-width: 1200px) {
      flex-direction: column;
      align-items: center;
    }
  }
`;

export const CardBox = styled.article`
  position: relative;
  width: 30%;
  width: 400px;
  height: 270px;
  margin-bottom: 50px;
  img {
    &.card {
      width: 100%;
      border-radius: 40px;
    }

    &.cardLogo {
      position: absolute;
      width: 20%;
      right: 53px;
      top: 57px;
    }
  }
  p {
    position: absolute;
    bottom: 50px;
    left: 40px;
    color: whitesmoke;
    font-size: 2.5em;
  }
`;

export const ButtonsBox = styled.article`
  margin-bottom: 50px;
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 15px;
  form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 300px;
    input {
      height: 40px;
      padding: 10px;
    }
  }
  button {
    margin-bottom: 15px;
    color: black;
    width: 300px;
    height: 50px;
    font-size: 1.36em;
    background-color: #c1c1c6;

    &.submit {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    &:hover {
      transition: all 0.7s ease;
      background-color: black;
      color: #c1c1c6;
    }
  }
`;

export const TransactionsBox = styled.article`
  margin-bottom: 50px;
  width: 498px;
  div {
    div {
      width: 498px;
      display: flex;
      align-items: center;
      input {
        margin-left: 20px;
        margin-right: 5px;
      }
      button {
        margin-left: 20px;
        padding: 2px 4px;
        font-size: 1.em;
        background-color: #c1c1c6;
      }
    }

    h1 {
      margin-bottom: 10px;
      font-size: 2em;
    }
  }
  @media screen and (max-width: 1000px) {
    width: 70%;
    margin-left: -250px;
  }
`;
