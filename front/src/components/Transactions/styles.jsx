import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 15px 0px;
  height: 63.3px;
  min-width: 500px;
  border: 1px black solid;
  display: flex;
  align-items: flex-end;
  div {
    position: relative;
    padding-left: 10px;
    font-size: 1.5em;
    display: flex;
    width: 100%;
    align-items: center;

    article{
      border-right: 1px solid black;
      padding-right: 5px;
      margin-right: 5px;
    }

    p{
        position: absolute;
        display: flex;
        align-items: center;
        right: 40px;
        top: 0px;
    }

    h4{
      font-weight: 400;
    }
    b{
      font-weight: 600;
    }
}

  &.debit {
    span {
      color: darkred;
      font-weight: bold;
    }
  }

  &.credit {
    span {
      color: #297229;
      font-weight: bold;
    }
  }
`;
