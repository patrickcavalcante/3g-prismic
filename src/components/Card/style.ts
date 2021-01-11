import styled from "styled-components";

export const CardStyled = styled.div`
  background: white;
  text-decoration: none;
  color: #444;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  position: relative;
  top: 0;
  transition: all 0.1s ease-in;
  cursor: pointer;

  &:hover {
    top: -2px;
    box-shadow: 0 4px 5px rgba(0, 0, 0, 0.2);
  }

  h1 {
    font-size: 20px;
  }

  img {
    max-width: 100%;
  }
`;

export const CardBody = styled.div`
  padding: 20px;
`;

export const Description = styled.div`
  padding: 3px;

  p {
    line-height: 1.4;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
`;
