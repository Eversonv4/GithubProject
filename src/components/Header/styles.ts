import styled from "styled-components";
import { FiLogOut, FiArrowLeft } from "react-icons/fi";

export const Container = styled.header`
  width: 100%;
  background-color: #1f1f1f;
`;

export const LayoutContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 15px 15px 50px;

  max-width: 1200px;
  margin: 0 auto;

  span {
    font-weight: bold;
    font-size: 17px;
    color: #ffce00;
  }

  button {
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 6px 10px;

    background-color: transparent;
    border: none;
    border-radius: 5px;
    transition: 0.5s ease;

    color: #ffffff;

    cursor: pointer;

    font-size: 20px;

    :hover {
      background-color: #3f3f3f;
    }
  }
`;

export const BackButton = styled.button`
  margin-right: auto;
  width: fit-content;
`;

export const LogoutIcon = styled(FiLogOut)`
  width: 19px;
  height: 19px;
  margin-left: 10px;

  color: red;
`;

export const ArrowLeft = styled(FiArrowLeft)`
  width: 19px;
  height: 19px;
  margin-right: 5px;

  color: #48db00;
`;
