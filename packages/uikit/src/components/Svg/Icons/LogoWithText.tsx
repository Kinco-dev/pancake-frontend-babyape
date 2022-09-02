import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Logo: React.FC<React.PropsWithChildren<LogoProps>> = ({ isDark, ...props }) => {
  return (
    <div>
      <img src="images/logo-long.png" alt="BabyApe logo" width="160px" height="42px" />
    </div>
  );
};

export default React.memo(Logo, (prev, next) => prev.isDark === next.isDark);
