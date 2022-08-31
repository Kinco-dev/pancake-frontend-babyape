import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<React.PropsWithChildren<SvgProps>> = (props) => {
  return (
    <div>
      <img
        src="/images/tokens/0x8f8d01fF0B6Bd5a5C0611EE2667c3C59cf980575.png"
        width="28px"
        height="28px"
        alt="BabyApe logo"
      />
      <style>{`
    img {
      margin-right: 5px;
    }
  `}</style>
    </div>
  );
};

export default Icon;
