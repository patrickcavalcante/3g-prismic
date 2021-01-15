import styled from 'styled-components';

export const FooterComponent = styled.footer`
  background: #393b3c;
  width: 100%;
  margin-top: 20px;
  padding-bottom: 30px;
`;

export const FooterContainer = styled.div`
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

export const H1 = styled.h1`
  font-size: 20px;
  color: #fff;
  padding-top: 2rem;
  margin-bottom: 20px;
  justify-content: center;
  text-align: center;
`;

export const Block1 = styled.div`
  justify-content: center;
  align-items: center;

  h5 {
    font-size: 14px;
    text-align: left;
    margin-top: 10px;
  }

  a {
    color: #fff;
    text-decoration: none;
  }
`;

export const Block2 = styled.div`
  justify-content: center;
  align-items: center;
`;

export const Block3 = styled.div`
  display: flex;
  justify-content: center;

  img {
    margin-left: 10px;
  }
`;
