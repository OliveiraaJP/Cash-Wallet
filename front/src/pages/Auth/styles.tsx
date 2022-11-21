import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;

  img {
    z-index: -1;
    position: fixed;
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    opacity: 80%;
  }

  main {
    width: 40%;
    height: 60%;
    background-color: #666666;
    -webkit-box-shadow: 0px 0px 36px 12px rgba(19, 35, 47, 1);
    -moz-box-shadow: 0px 0px 36px 12px rgba(19, 35, 47, 1);
    box-shadow: 0px 0px 36px 12px rgba(19, 35, 47, 1);
    border-radius: 10px;
  }

  header {
    margin-top: 15px;
    height: 20%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    button {
      width: 40%;
      padding: 12px 0px;
      background-color: aliceblue;
      color: black;
      font-size: 1.7em;

      &:hover {
        background-color: #dad6d6;
        transition: all 0.5s ease;
      }
      &.pressed {
        background-color: black;
        color: white;
      }
    }
  }
`;
