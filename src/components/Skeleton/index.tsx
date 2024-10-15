import React, { useEffect, useRef } from "react";
import { useTheme } from "../../contexts/theme";
import { SkeletonContainer, GradientAnimation } from "./style";

const Skeleton = ({
  width,
  height,
  style,
}: {
  width: number;
  height: number;
  style?: React.CSSProperties;
}) => {
  const { theme } = useTheme();
  const animatedValue = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      animatedValue.current = (animatedValue.current + 1) % 2;
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <SkeletonContainer
      $width={width}
      $height={height}
      $backgroundColor={theme.borderColor}
      style={style}
    >
      <GradientAnimation
        $boxColor={theme.borderColor}
        $borderColor={theme.boxBorderColor}        
        $width={width}
      />
    </SkeletonContainer>
  );
};

export default Skeleton;
