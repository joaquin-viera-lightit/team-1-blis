import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const RoundGraph = (props: SvgProps) => {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M11.25 2a.75.75 0 01.75-.75c5.937 0 10.75 4.813 10.75 10.75S17.937 22.75 12 22.75 1.25 17.937 1.25 12a10.72 10.72 0 013.225-7.677.75.75 0 111.05 1.071A9.22 9.22 0 002.75 12 9.25 9.25 0 1012 2.75a.75.75 0 01-.75-.75z"
        fill="#A283FD"
      />
      <Path
        d="M11.25 5a.75.75 0 01.75-.75A7.75 7.75 0 114.25 12a.75.75 0 011.5 0A6.25 6.25 0 1012 5.75a.75.75 0 01-.75-.75z"
        fill="#A283FD"
      />
      <Path
        d="M12 7.25a.75.75 0 000 1.5 3.25 3.25 0 010 6.5.75.75 0 000 1.5 4.75 4.75 0 100-9.5z"
        fill="#A283FD"
      />
    </Svg>
  );
};
