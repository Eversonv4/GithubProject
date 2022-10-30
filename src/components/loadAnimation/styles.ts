import styled from "styled-components";
import { keyframes } from "styled-components";

const RotateAnimation = keyframes`
   from {
      transform: rotate(0deg);
   }
   to {
      transform: rotate(360deg)
   }
`;

export const SpanLoader = styled.span`
  display: block;
  margin: 0 auto;
  margin-top: 20vh;
  width: 70px;
  height: 70px;
  border: 2px solid transparent;
  border-bottom-color: #ffce00;
  border-radius: 50%;

  animation: ${RotateAnimation} 1s linear infinite;
`;
