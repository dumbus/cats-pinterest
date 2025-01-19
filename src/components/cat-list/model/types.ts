import { ICatData } from 'types/entities';

export interface ICatList {
  catList: ICatData[];
  renderButton?: boolean;
  onRemove?: (id: string) => void;
}
