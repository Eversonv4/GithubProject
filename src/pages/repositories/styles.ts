import styled from "styled-components";
import { AiOutlineStar } from "react-icons/ai";
import { BiLockOpenAlt } from "react-icons/bi";

export const MainTitle = styled.h2`
  text-align: center;
  margin: 20px 0;
  color: #fff;

  font-weight: 400;
  color: #ffce00;
`;

export const Container = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;

  max-width: 400px;
  margin: 0 auto;
`;

export const ItemList = styled.li`
  padding: 20px 10px;
  border-bottom: 1px solid #808080;

  h2 {
    color: #fff;
    font-weight: 400;
    margin-bottom: 15px;
  }

  p {
    color: #fff;
    margin-bottom: 15px;
    font-weight: 300;
  }

  div {
    display: flex;
    align-items: center;
  }
`;

export const ConterStars = styled.span`
  margin-right: auto;
  color: #fff;
  font-weight: 300;
`;

export const StarIcon = styled(AiOutlineStar)`
  color: #ffce00;
  margin-right: 15px;
`;

export const LockIcon = styled(BiLockOpenAlt)`
  color: #63bf1f;
`;
