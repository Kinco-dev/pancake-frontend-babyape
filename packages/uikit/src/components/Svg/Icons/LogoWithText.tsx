import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Logo: React.FC<React.PropsWithChildren<LogoProps>> = ({ isDark, ...props }) => {
  const textColor = isDark ? "#FFFFFF" : "#000000";
  return (
    <div>
      <img src="http://localhost:3000/images/logo-long.png" alt="BabyApe logo" />
    </div>
  );
};

export default React.memo(Logo, (prev, next) => prev.isDark === next.isDark);
