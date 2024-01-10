import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const PlusIcon = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    viewBox="0 -960 960 960"
    {...props}>
    <Path d="M444-444H240v-72h204v-204h72v204h204v72H516v204h-72v-204Z" />
  </Svg>
);
export default PlusIcon;
