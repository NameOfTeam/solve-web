import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import ThemedContainer from "../common/ThemedContainer";

export const FadeIn = keyframes`
  0%{
    transform: scale(0.9);
  }
  50%{
    transform: scale(1.05);
  }
  100%{
    transform: scale(1);
  }
`

export const Container = styled(ThemedContainer)<{ shadow: string }>`
  width: 50rem;
  height: 20rem;
  position: absolute;
  z-index: 9999;
  top: 5rem;
  left: 0;
  box-shadow: 0.0625rem 0.0625rem 0.625rem 0.0625rem ${(props) => props.shadow};
  display: none;
  transform: scale(0.9);
  transition: all 0.5s;
  animation: ${FadeIn} 0.2s forwards;
  transform-origin: top left;
  &:hover {
    display: flex;
  }
`;