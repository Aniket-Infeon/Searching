import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const SortIcon = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 -960 960 960"
    {...props}>
    <Path
      fill={props.color}
      d="M120-240v-80h240v80H120Zm0-200v-80h480v80H120Zm0-200v-80h720v80H120Z"
    />
  </Svg>
);
export default SortIcon;
