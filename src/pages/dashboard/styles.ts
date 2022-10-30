import styled from "styled-components";

export const Container = styled.main`
  max-width: 1200px;
  margin: 0 auto;

  border: 1px solid yellow;

  & img {
    width: 160px;
    height: 160px;
    border-radius: 50%;
    border: 2px solid white;

    display: block;

    margin: 0 auto;
    margin-top: -55px;

    transition: 1s ease;

    @media (max-width: 430px) {
      margin-top: 0;
      width: 100px;
      height: 100px;
    }
  }
`;
