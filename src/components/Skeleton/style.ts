import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

const skeletonAnimation = (width: number) => keyframes`
  0% {
    transform: translateX(-${width}px);
  }
  100% {
    transform: translateX(${width}px);
  }
`;

export const SkeletonContainer = styled.div<{
  $width: number;
  $height: number;
  $backgroundColor: string;
}>`
  width: ${(props) => props.$width}px;
  height: ${(props) => props.$height}px;
  background-color: ${(props) => props.$backgroundColor};
  overflow: hidden;
  position: relative;
`;

export const GradientAnimation = styled.div<{
  $width: number;
  $boxColor: string;
  $borderColor: string;
}>`
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    ${(props) => props.$boxColor},
    ${(props) => props.$borderColor},
    ${(props) => props.$boxColor}
  );
  animation: ${(props) => skeletonAnimation(props.$width)} 1.5s infinite;
`;
