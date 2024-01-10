import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const MinusIcon = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    viewBox="0 -960 960 960"
    {...props}>
    <Path d="M232-444v-72h496v72H232Z" />
  </Svg>
);
export default MinusIcon;
