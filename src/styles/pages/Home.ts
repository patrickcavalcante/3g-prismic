import styled from "styled-components";

export const Bg = styled.div`
  height: 50vh;
  min-height: 330px;
  background-image: url("/bg.png");
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-color: #1d3557;
  justify-content: center;
  @media only screen and (max-device-width: 1366px) {
    background-attachment: scroll;
  }
`;

export const Form = styled.form`
  justify-content: center;
  text-align: center;
  align-items: center;
  padding-top: 20px;
`;

export const Input = styled.input`
  padding: 10px;
  border: 0;
  border-radius: 10px;
  width: 50%;

  &:focus {
    border: 0;
    outline: none;
  }

  @media only screen and (min-width: 500px) {
    width: 50%;
  }

  @media only screen and (min-width: 850px) {
    width: 40%;
  }
`;

export const Button = styled.button`
  padding: 10px;
  border: 0;
  border-radius: 10px;
  width: 25%;
  background: #fff;
  margin-left: 5px;
  cursor: pointer;

  &:focus {
    border: 0;
    outline: none;
  }

  @media only screen and (min-width: 500px) {
    width: 20%;
  }

  @media only screen and (min-width: 850px) {
    width: 10%;
  }
`;

export const Band = styled.div`
  width: 90%;
  max-width: 1050px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  grid-gap: 20px;

  @media only screen and (min-width: 500px) {
    grid-template-columns: 1fr 1fr;
  }

  @media only screen and (min-width: 850px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export const Title = styled.h1`
  color: #fff;
  padding-top: 5rem;
  font-size: 45px;
  text-align: center;
`;

export const SubTitle = styled.h5`
  font-size: 16px;
  text-align: center;
  padding-top: 10px;
  color: #fff;
  width: 80%;
  max-width: 900px;
  margin: 0 auto;
`;
