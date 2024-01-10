import {ReactElement, ReactNode} from 'react';

export type CustomFieldType = {
  changeText: (text: string) => void;
  onFocus: (text: boolean) => void;
  getList: (text: boolean) => void;
  value: string;
  title: string;
  leftIcon?: ReactNode | ReactElement;
  rightIcon: ReactNode | ReactElement;
};

export type CardType = {
  avatar: string;
  name: string;
  description: string;
  language: string;
  stars: number;
};
