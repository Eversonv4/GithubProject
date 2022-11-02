import styled from "styled-components";

export const Container = styled.main`
  max-width: 1200px;
  margin: 0 auto;

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
      width: 100px;
      height: 100px;
    }
  }
`;

export const UsernameTitle = styled.h2`
  color: #fff;
  position: relative;

  width: fit-content;
  margin: 0 auto;

  :before {
    content: "";
    width: 6px;
    height: 20px;
    background-color: #ffce00;
    position: absolute;
    left: -20px;
    top: 5px;
    border-radius: 8px 0 0 8px;
  }
`;

export const BioTitle = styled.h2`
  color: #fff;
  position: relative;

  width: fit-content;
  margin: 15px auto 10px;

  font-weight: 400;

  :before {
    content: "";
    width: 6px;
    height: 20px;
    background-color: #ffce00;
    position: absolute;
    left: -20px;
    top: 5px;
    border-radius: 8px 0 0 8px;
  }
`;

export const Description = styled.p`
  font-size: 16px;
  font-weight: 300;
  text-align: center;
  color: #fff;

  max-width: 500px;
  margin: 0 auto 20px;
`;

export const EmailTitle = styled.h3`
  color: #fff;
  font-size: 16px;
  font-weight: 300;
  text-align: center;

  margin: 10px 0;
`;

export const LocationTItle = styled.h3`
  color: #fff;
  font-size: 16px;
  font-weight: 300;
  text-align: center;
`;

export const InfoContainer = styled.div`
  width: fit-content;
  margin: 15px auto;

  button {
    background-color: #5252525d;
    color: #fff;
    border: none;
    border-radius: 7px;
    padding: 10px 15px;

    cursor: pointer;

    :nth-child(2) {
      margin: 0 15px;
    }

    :hover {
      background-color: #525252bb;
    }

    span {
      font-size: 30px;
      line-height: 34px;
      color: #ffce00 !important;
    }

    h2 {
      font-weight: 300;
      font-size: 17px;
    }
  }
`;
