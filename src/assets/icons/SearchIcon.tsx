import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const SearchIcon = (props: SvgProps) => {
  return (
    <Svg width={27} height={27} viewBox="0 0 27 27" fill="none" {...props}>
      <Path
        d="M12.244 22.626c5.438 0 9.847-4.409 9.847-9.847 0-5.439-4.409-9.848-9.847-9.848-5.439 0-9.848 4.41-9.848 9.848 0 5.438 4.41 9.847 9.848 9.847zM20.92 23.38c.58 1.751 1.903 1.927 2.92.395.93-1.4.318-2.55-1.367-2.55-1.247-.01-1.947.963-1.554 2.156z"
        strokeWidth={1.64122}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
