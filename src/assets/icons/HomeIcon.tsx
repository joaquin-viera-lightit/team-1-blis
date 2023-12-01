import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const HomeIcon = (props: SvgProps) => {
  return (
    <Svg width={28} height={27} viewBox="0 0 28 27" fill="none" {...props}>
      <Path
        d="M16.065 4.41h0l6.302 4.41c.48.336.947.897 1.294 1.562.348.665.542 1.37.542 1.959v7.418a4.307 4.307 0 01-4.305 4.305H8.103c-2.374 0-4.305-1.938-4.305-4.316v-7.55c0-.545.175-1.214.492-1.856.316-.642.74-1.194 1.178-1.535h0l5.48-4.276s0 0 0 0c1.393-1.079 3.668-1.136 5.117-.121zM14 22.008c.863 0 1.57-.707 1.57-1.57v-3.283c0-.863-.707-1.57-1.57-1.57-.863 0-1.57.707-1.57 1.57v3.283c0 .863.707 1.57 1.57 1.57z"
        strokeWidth={1.5}
      />
    </Svg>
  );
};
