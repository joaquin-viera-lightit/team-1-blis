import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const Bed = (props: SvgProps) => {
  return (
    <Svg width={25} height={24} viewBox="0 0 25 24" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.444 3.25h2.112c1.838 0 3.294 0 4.433.153 1.172.158 2.121.49 2.87 1.238.748.749 1.08 1.698 1.238 2.87.151 1.126.153 2.56.153 4.368.344.283.617.65.79 1.069.121.29.168.59.19.907.02.304.02.675.02 1.12v.05c0 .445 0 .816-.02 1.12a2.822 2.822 0 01-.19.907 2.75 2.75 0 01-1.488 1.489c-.29.12-.59.167-.907.188a8.439 8.439 0 01-.395.017V20a.75.75 0 01-1.5 0v-1.25H6.25V20a.75.75 0 01-1.5 0v-1.255a8.433 8.433 0 01-.395-.016 2.822 2.822 0 01-.907-.188 2.75 2.75 0 01-1.489-1.489c-.12-.29-.167-.59-.188-.907-.021-.304-.021-.675-.021-1.12v-.05c0-.445 0-.816.02-1.12.022-.318.07-.617.19-.907a2.75 2.75 0 01.79-1.07c0-1.806.002-3.241.153-4.367.158-1.172.49-2.121 1.238-2.87.749-.748 1.698-1.08 2.87-1.238 1.14-.153 2.595-.153 4.433-.153zM4.25 11.279a14.073 14.073 0 011-.029v-.802c0-.898 0-1.648.08-2.242.084-.628.27-1.195.725-1.65.456-.456 1.023-.642 1.65-.726.595-.08 1.345-.08 2.243-.08h5.104c.899 0 1.648 0 2.242.08.628.084 1.195.27 1.65.725.456.456.642 1.023.726 1.65.08.595.08 1.345.08 2.243v.802a14.075 14.075 0 011 .029c-.003-1.535-.02-2.675-.14-3.568-.135-1.006-.389-1.586-.812-2.01-.423-.422-1.003-.676-2.009-.811-1.027-.138-2.382-.14-4.289-.14h-2c-1.907 0-3.261.002-4.29.14-1.005.135-1.585.389-2.008.812-.423.423-.677 1.003-.812 2.009-.12.893-.137 2.033-.14 3.568zm14-.029v-.75c0-.964-.002-1.612-.067-2.095-.062-.461-.169-.659-.3-.789-.13-.13-.327-.237-.788-.3-.483-.064-1.131-.066-2.095-.066h-1.75v4h5zm-6.5 0v-4H10c-.964 0-1.612.002-2.095.067-.461.062-.659.169-.789.3-.13.13-.237.327-.3.788-.064.483-.066 1.131-.066 2.095v.75h5zm-7.293 1.517c-.241.017-.358.046-.435.078a1.25 1.25 0 00-.677.677c-.032.077-.061.194-.078.435-.017.247-.017.567-.017 1.043s0 .796.017 1.043c.017.241.046.358.078.435.127.307.37.55.677.677.077.032.194.061.435.078.247.017.567.017 1.043.017h14c.476 0 .796 0 1.043-.017.241-.017.358-.046.435-.078.307-.127.55-.37.677-.677.032-.077.061-.194.078-.435.017-.247.017-.567.017-1.043s0-.796-.017-1.043c-.017-.241-.046-.358-.078-.435a1.25 1.25 0 00-.677-.677c-.077-.032-.194-.061-.435-.078a17.073 17.073 0 00-1.043-.017h-14c-.476 0-.796 0-1.043.017z"
        fill="#F4F0FF"
      />
    </Svg>
  );
};