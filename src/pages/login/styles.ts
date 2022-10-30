import styled from "styled-components";
import { AiFillGithub } from "react-icons/ai";
import { FiArrowRight } from "react-icons/fi";

export const Container = styled.main`
  height: 100vh;
  width: 100vw;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LayoutContainer = styled.article`
  height: auto;
  width: 360px;
  padding: 0 15px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  form {
    width: 100%;
    margin-top: 45px;
    position: relative;
  }

  form input {
    width: 100%;
    display: block;
    padding: 12px 10px;
    font-size: 16px;
    color: #535353;
    border-radius: 6px;

    margin-bottom: 14px;

    outline: none;

    ::placeholder {
      color: #535353;
    }
  }

  form button {
    width: 100%;
    padding: 9px 10px;
    border-radius: 6px;

    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 16px;
    font-weight: bold;
    color: #000000;
    background-color: #ffce00;
  }
`;

export const ErrorMessage = styled.span`
  position: absolute;
  top: 9px;
  right: 12px;
  color: #eb2d2d;
  font-size: 14px;
`;

export const GithubIcon = styled(AiFillGithub)`
  height: 96px;
  width: 96px;
  color: #ffce00;
`;

export const ArrowRight = styled(FiArrowRight)`
  height: 18px;
  width: 18px;
  color: #000000;
`;
