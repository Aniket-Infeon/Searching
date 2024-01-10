import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
import {Text, View} from 'react-native';

const BackArrow = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    viewBox="0 -960 960 960"
    {...props}>
    <Path d="M384-96 0-480l384-384 68 68-316 316 316 316-68 68Z" />
  </Svg>
);
export default BackArrow;
