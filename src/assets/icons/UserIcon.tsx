import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const UserIcon = (props: SvgProps) => {
  return (
    <Svg width={27} height={27} viewBox="0 0 27 27" fill="none" {...props}>
      <Path
        d="M13.662 13.873a5.47 5.47 0 100-10.942 5.47 5.47 0 000 10.942zM23.061 24.814c0-4.234-4.212-7.659-9.399-7.659-5.186 0-9.398 3.425-9.398 7.66"
        strokeWidth={1.64122}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
