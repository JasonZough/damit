import ITheme from './Theme';

export interface IStyledProps {
  theme: ITheme;
  [propName: string]: any;
}
